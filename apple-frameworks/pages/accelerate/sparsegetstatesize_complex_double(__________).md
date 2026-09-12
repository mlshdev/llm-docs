> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegetstatesize_complex_double(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparsegetstatesize_complex_double(_:_:_:_:_:))

# SparseGetStateSize_Complex_Double(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns size in bytes of state space required for call to `SparseIterate()` for complex double values.

## Declaration

```swift
func SparseGetStateSize_Complex_Double(_ method: SparseIterativeMethod, _ preconditioner: Bool, _ m: Int32, _ n: Int32, _ nrhs: Int32) -> Int
```

## Parameters

- `method`: (Input) Method to return required state space size for.
- `preconditioner`: (Input) True if a preconditioner will be supplied, false otherwise.
- `m`: (Input) Number of entries in right-hand side (rows in matrix `A`).
- `n`: (Input) Number of variables to solve for (columns in matrix `A`).
- `nrhs`: (Input) Number of right-hand sides to be solved for.

<a id="return-value"></a>

## Return Value

Size of state space required in bytes.

## See Also

### Functions that Calculate Iterate State Size

- [SparseGetStateSize_Double(\_:\_:\_:\_:\_:)](sparsegetstatesize_double%28__________%29.md): Returns the size in bytes necessary for a call to the double-precision sparse iterate method.
- [SparseGetStateSize_Float(\_:\_:\_:\_:\_:)](sparsegetstatesize_float%28__________%29.md): Returns the size in bytes necessary for a call to the single-precision sparse iterate method.
- [SparseGetStateSize_Complex_Float(\_:\_:\_:\_:\_:)](sparsegetstatesize_complex_float%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex float values.

# SparseGetStateSize_Complex_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Returns size in bytes of state space required for call to `SparseIterate()` for complex double values.

## Declaration

```objectivec
static size_t SparseGetStateSize_Complex_Double(SparseIterativeMethod method, bool preconditioner, int m, int n, int nrhs);
```

## Parameters

- `method`: (Input) Method to return required state space size for.
- `preconditioner`: (Input) True if a preconditioner will be supplied, false otherwise.
- `m`: (Input) Number of entries in right-hand side (rows in matrix `A`).
- `n`: (Input) Number of variables to solve for (columns in matrix `A`).
- `nrhs`: (Input) Number of right-hand sides to be solved for.

<a id="return-value"></a>

## Return Value

Size of state space required in bytes.

## See Also

### Functions that Calculate Iterate State Size

- [SparseGetStateSize_Double](sparsegetstatesize_double%28__________%29.md): Returns the size in bytes necessary for a call to the double-precision sparse iterate method.
- [SparseGetStateSize_Float](sparsegetstatesize_float%28__________%29.md): Returns the size in bytes necessary for a call to the single-precision sparse iterate method.
- [SparseGetStateSize_Complex_Float](sparsegetstatesize_complex_float%28__________%29.md): Returns size in bytes of state space required for call to `SparseIterate()` for complex float values.
