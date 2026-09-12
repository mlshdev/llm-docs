> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetstatesize_double(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparsegetstatesize_double(_:_:_:_:_:))

# SparseGetStateSize_Double(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the size in bytes necessary for a call to the double-precision sparse iterate method.

## Declaration

```swift
func SparseGetStateSize_Double(_ method: SparseIterativeMethod, _ preconditioner: Bool, _ m: Int32, _ n: Int32, _ nrhs: Int32) -> Int
```

## Parameters

- `method`: The method to return required state space size for.
- `preconditioner`: Set to `true` if your subsequent calls to `SparseIterate` use a preconditioner.
- `m`: The number of rows in matrix *A*.
- `n`: The number of columns in matrix *A*.
- `nrhs`: The number of columns in matrices *B* and *X*.

<a id="return-value"></a>

## Return Value

The size of the required state space, in bytes.

## See Also

### Functions that Calculate Iterate State Size

- [SparseGetStateSize_Float(\_:\_:\_:\_:\_:)](sparsegetstatesize_float%28__________%29.md): Returns the size in bytes necessary for a call to the single-precision sparse iterate method.
- [SparseGetStateSize_Complex_Double(\_:\_:\_:\_:\_:)](sparsegetstatesize_complex_double%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex double values.
- [SparseGetStateSize_Complex_Float(\_:\_:\_:\_:\_:)](sparsegetstatesize_complex_float%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex float values.

# SparseGetStateSize_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the size in bytes necessary for a call to the double-precision sparse iterate method.

## Declaration

```objectivec
static size_t SparseGetStateSize_Double(SparseIterativeMethod method, bool preconditioner, int m, int n, int nrhs);
```

## Parameters

- `method`: The method to return required state space size for.
- `preconditioner`: Set to `true` if your subsequent calls to `SparseIterate` use a preconditioner.
- `m`: The number of rows in matrix *A*.
- `n`: The number of columns in matrix *A*.
- `nrhs`: The number of columns in matrices *B* and *X*.

<a id="return-value"></a>

## Return Value

The size of the required state space, in bytes.

## See Also

### Functions that Calculate Iterate State Size

- [SparseGetStateSize_Float](sparsegetstatesize_float%28__________%29.md): Returns the size in bytes necessary for a call to the single-precision sparse iterate method.
- [SparseGetStateSize_Complex_Double](sparsegetstatesize_complex_double%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex double values.
- [SparseGetStateSize_Complex_Float](sparsegetstatesize_complex_float%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex float values.
