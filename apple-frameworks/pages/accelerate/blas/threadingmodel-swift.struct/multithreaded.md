> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas/threadingmodel-swift.struct/multithreaded](https://developer.apple.com/documentation/accelerate/blas/threadingmodel-swift.struct/multithreaded)

# multiThreaded

**Framework:** Accelerate  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS 15.0+ · tvOS · visionOS · watchOS

A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.

## Declaration

```swift
static let multiThreaded: BLAS.ThreadingModel
```

## See Also

### Specifying a threading model

- [singleThreaded](singlethreaded.md): A constant that specifies BLAS and LAPACK execute on a single thread only.
