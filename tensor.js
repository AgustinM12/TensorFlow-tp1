// Importa TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Crea dos tensores de ejemplo
const tensor1 = tf.tensor2d([[1, 2], [3, 4]]);
const tensor2 = tf.tensor2d([[5, 6], [7, 8]]);

// Realiza la suma de los tensores
const result = tensor1.add(tensor2);

// Muestra el resultado
result.print();