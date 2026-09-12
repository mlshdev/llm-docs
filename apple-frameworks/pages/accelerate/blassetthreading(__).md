> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blassetthreading(_:)](https://developer.apple.com/documentation/accelerate/blassetthreading(_:))

# BLASSetThreading(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the BLAS and LAPACK threading model.

## Declaration

```swift
func BLASSetThreading(_ threading: BLAS_THREADING) -> Int32
```

## Parameters

- `threading`: A constant that specifies the threading model.

<a id="return-value"></a>

## Return Value

`0` on success or `-1` if the current platform doesn’t support the threading model.

<a id="Discussion"></a>

## Discussion

This function sets the threading model for subsequent calls into BLAS and LAPACK.

This setting is per thread, and Accelerate saves it in a thread-local variable.

## See Also

### Specifying the threading model

- [BLAS](blas.md): An enumeration that acts as a namespace for Swift overlays to BLAS.
- [BLASGetThreading()](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.

# BLASSetThreading (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the BLAS and LAPACK threading model.

## Declaration

```objectivec
int BLASSetThreading(const enum BLAS_THREADING threading);
```

## Parameters

- `threading`: A constant that specifies the threading model.

<a id="return-value"></a>

## Return Value

`0` on success or `-1` if the current platform doesn’t support the threading model.

<a id="Discussion"></a>

## Discussion

This function sets the threading model for subsequent calls into BLAS and LAPACK.

This setting is per thread, and Accelerate saves it in a thread-local variable.

## See Also

### Specifying the threading model

- [BLASGetThreading](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.
