> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas](https://developer.apple.com/documentation/accelerate/blas)

# BLAS

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS 15.0+ · tvOS · visionOS · watchOS

An enumeration that acts as a namespace for Swift overlays to BLAS.

## Declaration

```swift
struct BLAS
```

<a id="overview"></a>

## Overview

The [BLAS](blas.md) enumeration provides methods and structures that offer a Swift-friendly API for Basic Linear Algebra Subprograms (BLAS) and Linear Algebra PACKage (LAPACK) operations.

## Topics

### Setting the BLAS and LAPACK threading model

- [threadingModel](blas/threadingmodel-swift.type.property.md): The BLAS and LAPACK threading model.
- [BLAS.ThreadingModel](blas/threadingmodel-swift.struct.md): Constants that describe the BLAS and LAPACK threading model.

## See Also

### Specifying the threading model

- [BLASSetThreading(\_:)](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLASGetThreading()](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
- [BLAS_THREADING](blas_threading.md): Constants that describe the BLAS and LAPACK threading model.
