> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas/threadingmodel-swift.struct](https://developer.apple.com/documentation/accelerate/blas/threadingmodel-swift.struct)

# BLAS.ThreadingModel

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS 15.0+ · tvOS · visionOS · watchOS

Constants that describe the BLAS and LAPACK threading model.

## Declaration

```swift
struct ThreadingModel
```

<a id="overview"></a>

## Overview

Use the threading model constants to specify whether BLAS and LAPACK operations run in a single thread or multiple threads. Specify the single-threaded model if your app uses its own threading mechanism.

## Topics

### Specifying a threading model

- [multiThreaded](threadingmodel-swift.struct/multithreaded.md): A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.
- [singleThreaded](threadingmodel-swift.struct/singlethreaded.md): A constant that specifies BLAS and LAPACK execute on a single thread only.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Setting the BLAS and LAPACK threading model

- [threadingModel](threadingmodel-swift.type.property.md): The BLAS and LAPACK threading model.
