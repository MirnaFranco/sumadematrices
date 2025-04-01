from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir peticiones desde el frontend

@app.route('/sum', methods=['POST'])
def sum_matrices():
    data = request.get_json()
    matrix1 = np.array(data.get("matrix1", []))
    matrix2 = np.array(data.get("matrix2", []))
    
    if matrix1.shape != matrix2.shape:
        return jsonify({"error": "Las matrices deben tener el mismo tamaño"}), 400
    
    result = matrix1 + matrix2
    return jsonify({"result": result.tolist()})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
