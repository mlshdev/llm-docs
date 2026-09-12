> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsemultiply(_:_:_:_:)-3l60d](https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:_:)-3l60d)

# SparseMultiply(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.

## Declaration

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Float, _ X: DenseVector_Float, _ Y: DenseVector_Float, _ workspace: UnsafeMutableRawPointer)
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `X`: The vector *X*.
- `Y`: The vector *Y*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+` `workspaceRequiredPerRHS`.

## See Also

### Subfactor and dense vector multiplication with user-defined workspace

- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-9tahm.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-4u1y3.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-1ooyi.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-5etjg.md): Perform the multiply operation `y = Subfactor * x` in place for complex double values.
- [SparseMultiply(\_:\_:\_:)](sparsemultiply%28______%29-5kh07.md): Perform the multiply operation `y = Subfactor * x` in place for complex float values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-4xr8.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-7xipz.md): Perform the multiply operation `y = Subfactor * x` for complex double values.
- [SparseMultiply(\_:\_:\_:\_:)](sparsemultiply%28________%29-9v0nu.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.

# SparseMultiply (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.

## Declaration

```objectivec
static void SparseMultiply(SparseOpaqueSubfactor_Float Subfactor, DenseVector_Float x, DenseVector_Float y, void *workspace);
```

## Parameters

- `Subfactor`: The subfactor to multiply by, which [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md) returns.
- `x`: The vector *X*.
- `y`: The vector *Y*.
- `workspace`: A workspace of size `workspaceRequiredStatic` `+` `workspaceRequiredPerRHS`.

## See Also

### Subfactor and dense vector multiplication with user-defined workspace

- [SparseMultiply](sparsemultiply%28______%29-9tahm.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-4u1y3.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of single-precision values *X*, in place and without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28________%29-1ooyi.md): Performs the multiply operation *Y = Subfactor \* X* on a vector of double-precision values *X*, without any internal memory allocations.
- [SparseMultiply](sparsemultiply%28______%29-5etjg.md): Perform the multiply operation `y = Subfactor * x` in place for complex double values.
- [SparseMultiply](sparsemultiply%28______%29-5kh07.md): Perform the multiply operation `y = Subfactor * x` in place for complex float values.
- [SparseMultiply](sparsemultiply%28________%29-4xr8.md): Perform the multiply operation `y = Subfactor * x` for complex float values..
- [SparseMultiply](sparsemultiply%28________%29-7xipz.md): Perform the multiply operation `y = Subfactor * x` for complex double values.
- [SparseMultiply](sparsemultiply%28________%29-9v0nu.md): Perform the multiply operation `Y = Subfactor * X` for complex double values.
