> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas_threading/init(rawvalue:)](https://developer.apple.com/documentation/accelerate/blas_threading/init(rawvalue:))

# init(rawValue:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a threading model constant with an unsigned-integer value.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: A raw unsigned-integer value.

## See Also

### Specifying a threading model

- [init(\_:)](init%28__%29.md): Creates a threading model constant.
- [rawValue](rawvalue.md): The raw value that represents the threading model.
- [BLAS_THREADING_MULTI_THREADED](../blas_threading_multi_threaded.md): A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.
- [BLAS_THREADING_SINGLE_THREADED](../blas_threading_single_threaded.md): A constant that specifies BLAS and LAPACK execute on a single thread only.
- [BLAS_THREADING_MAX_OPTIONS](../blas_threading_max_options.md)
