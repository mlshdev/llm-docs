> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/subfactor-multiplication-functions](https://developer.apple.com/documentation/accelerate/subfactor-multiplication-functions)

# Subfactor Multiplication Functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Multiply subfactors by matrices and vectors.

## Topics

### Subfactor and dense matrix multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-2osop.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-581zl.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

### Subfactor and dense vector multiplication

- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-3s0hu.md): Perform the multiply operation `Y = Subfactor * X` in place for complex double values.
- [SparseMultiply(\_:\_:)](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

### Subfactor and dense vector multiplication with user-defined workspace

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-9tahm.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4u1y3.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-1ooyi.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-3l60d.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-5etjg.md): Perform the multiply operation `y = Subfactor * x` in place for complex double values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-5kh07.md): Perform the multiply operation `y = Subfactor * x` in place for complex float values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-4xr8.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-7xipz.md): Perform the multiply operation `y = Subfactor * x` for complex double values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-9v0nu.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

## See Also

### Subfactor Solve and Operation Functions

- [Subfactor Solve Functions](subfactor-solve-functions.md): Solve systems with the equation *Subfactor \* X = B*.

# Subfactor Multiplication Functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Multiply subfactors by matrices and vectors.

## Topics

### Subfactor and dense matrix multiplication

- [SparseMultiply](sparsemultiply%28____%29-88trz.md): Performs the multiply operation *Y* *= Subfactor \* X,* \__in place on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3r4mf.md): Performs the multiply operation *Y*\_ \_*= Subfactor \* X*, in place on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-4nosz.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-88stx.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-34fp6.md): Perform the multiply operation `Y = Subfactor * X` in place for complex float values.
- [SparseMultiply](sparsemultiply%28____%29-3dwed.md): Perform the multiply operation `y = Subfactor * x` for complex floatr values, in place.
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.
- [SparseMultiply](sparsemultiply%28______%29-7q8gs.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

### Subfactor and dense matrix multiplication with user-defined workspace

- [SparseMultiply](sparsemultiply%28______%29-20xvs.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6thvw.md): Performs the multiply operation *Y* *= Subfactor \* X*, in place on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-2osop.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of double-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-9v8hk.md): Performs the multiply operation *Y* *= Subfactor \* X* on a dense matrix of single-precision values and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-6strd.md): Perform the multiply operation `Y = Subfactor * X `for complex float values, in place.
- [SparseMultiply](sparsemultiply%28______%29-7mdi8.md): Perform the multiply operation `Y = Subfactor * X `for complex double values, in place.
- [SparseMultiply](sparsemultiply%28________%29-581zl.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

### Subfactor and dense vector multiplication

- [SparseMultiply](sparsemultiply%28____%29-8ehhn.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28____%29-7l3sr.md): Performs the multiply operation *Y = Subfactor \* X*, in place on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28______%29-6abql.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values.
- [SparseMultiply](sparsemultiply%28______%29-2h425.md): Performs the multiply operation *Y = Subfactor \** *X* on a vector of single-precision values.
- [SparseMultiply](sparsemultiply%28____%29-3s0hu.md): Perform the multiply operation `Y = Subfactor * X` in place for complex double values.
- [SparseMultiply](sparsemultiply%28____%29-9fn7j.md): Perform the multiply operation `y = Subfactor * x` for complex double values, in place.
- [SparseMultiply](sparsemultiply%28______%29-4fwfv.md): Perform the multiply operation `y = Subfactor * x` for complex double values..
- [SparseMultiply](sparsemultiply%28______%29-58wuo.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28______%29-6wrnf.md): Perform the multiply operation `Y = Subfactor * X` for complex float values.

### Subfactor and dense vector multiplication with user-defined workspace

- [SparseMultiply](sparsemultiply%28______%29-9tahm.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-4u1y3.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-1ooyi.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-3l60d.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-5etjg.md): Perform the multiply operation `y = Subfactor * x` in place for complex double values.
- [SparseMultiply](sparsemultiply%28______%29-5kh07.md): Perform the multiply operation `y = Subfactor * x` in place for complex float values.
- [SparseMultiply](sparsemultiply%28________%29-4xr8.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28________%29-7xipz.md): Perform the multiply operation `y = Subfactor * x` for complex double values.
- [SparseMultiply](sparsemultiply%28________%29-9v0nu.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

## See Also

### Subfactor Solve and Operation Functions

- [Subfactor Solve Functions](subfactor-solve-functions.md): Solve systems with the equation *Subfactor \* X = B*.
