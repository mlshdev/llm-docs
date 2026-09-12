> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas/threadingmodel-swift.struct/singlethreaded](https://developer.apple.com/documentation/accelerate/blas/threadingmodel-swift.struct/singlethreaded)

# singleThreaded

**Framework:** Accelerate  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS 15.0+ · tvOS · visionOS · watchOS

A constant that specifies BLAS and LAPACK execute on a single thread only.

## Declaration

```swift
static let singleThreaded: BLAS.ThreadingModel
```

## See Also

### Specifying a threading model

- [multiThreaded](multithreaded.md): A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.
