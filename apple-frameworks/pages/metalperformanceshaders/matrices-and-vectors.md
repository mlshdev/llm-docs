> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/matrices-and-vectors](https://developer.apple.com/documentation/metalperformanceshaders/matrices-and-vectors)

# Matrices and Vectors

**Interface languages:** Swift, Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** API Collection

Solve systems of equations, factorize matrices and multiply matrices and vectors.

## Topics

### Matrices

- [MPSMatrix](mpsmatrix.md): A 2D array of data that stores the data’s values.
- [MPSMatrixDescriptor](mpsmatrixdescriptor.md): A description of attributes used to create an MPS matrix.
- [MPSTemporaryMatrix](mpstemporarymatrix.md): A matrix allocated on GPU private memory.

### Vectors

- [MPSVector](mpsvector.md): A 1D array of data that stores the data’s values.
- [MPSVectorDescriptor](mpsvectordescriptor.md): A description of the length and data type of a vector.
- [MPSTemporaryVector](mpstemporaryvector.md): A vector allocated on GPU private memory.

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)

### Matrix Arithmetic Operations

- [MPSMatrixSum](mpsmatrixsum.md): A kernel for performing a pointwise summation of a matrix.
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md): A class that copies image data to a matrix.

### Matrix Neural Network Operations

- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md): A kernel for applying a fully connected neural network layer.
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md): A kernel for applying a fully gradient connected neural network layer.
- [MPSMatrixNeuron](mpsmatrixneuron.md): A neuron activation kernel that operates on matrices.
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md): A gradient neuron activation kernel that operates on matrices.

### Matrix Softmax Operations

- [MPSMatrixLogSoftMax](mpsmatrixlogsoftmax.md): A logarithmic softmax kernel that operates on matrices.
- [MPSMatrixLogSoftMaxGradient](mpsmatrixlogsoftmaxgradient.md): A logarithmic gradient softmax kernel that operates on matrices.
- [MPSMatrixSoftMax](mpsmatrixsoftmax.md): A softmax kernel that operates on matrices.
- [MPSMatrixSoftMaxGradient](mpsmatrixsoftmaxgradient.md): A gradient softmax kernel that operates on matrices.

### Matrix Normalization Operations

- [MPSMatrixBatchNormalization](mpsmatrixbatchnormalization.md): A batch normalization kernel that operates on matrices.
- [MPSMatrixBatchNormalizationGradient](mpsmatrixbatchnormalizationgradient.md): A batch normalization gradient kernel that operates on matrices.
