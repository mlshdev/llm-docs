> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blasgetthreading()](https://developer.apple.com/documentation/accelerate/blasgetthreading())

# BLASGetThreading() (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the current BLAS and LAPACK threading model.

## Declaration

```swift
func BLASGetThreading() -> BLAS_THREADING
```

<a id="return-value"></a>

## Return Value

A constant that represents the current BLAS and LAPACK threading model.

## See Also

### Specifying the threading model

- [BLAS](blas.md): An enumeration that acts as a namespace for Swift overlays to BLAS.
- [BLASSetThreading(\_:)](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.

# BLASGetThreading (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the current BLAS and LAPACK threading model.

## Declaration

```objectivec
enum BLAS_THREADING BLASGetThreading();
```

<a id="return-value"></a>

## Return Value

A constant that represents the current BLAS and LAPACK threading model.

## See Also

### Specifying the threading model

- [BLASSetThreading](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.
