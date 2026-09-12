> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blas_threading](https://developer.apple.com/documentation/accelerate/blas_threading)

# BLAS_THREADING (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the BLAS and LAPACK threading model.

## Declaration

```swift
struct BLAS_THREADING
```

<a id="overview"></a>

## Overview

Use the threading model constants to specify whether BLAS and LAPACK operations run in a single thread or multiple threads. Specify the single-threaded model if your app uses its own threading mechanism.

## Topics

### Specifying a threading model

- [init(\_:)](blas_threading/init%28__%29.md): Creates a threading model constant.
- [init(rawValue:)](blas_threading/init%28rawvalue_%29.md): Creates a threading model constant with an unsigned-integer value.
- [rawValue](blas_threading/rawvalue.md): The raw value that represents the threading model.
- [BLAS_THREADING_MULTI_THREADED](blas_threading_multi_threaded.md): A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.
- [BLAS_THREADING_SINGLE_THREADED](blas_threading_single_threaded.md): A constant that specifies BLAS and LAPACK execute on a single thread only.
- [BLAS_THREADING_MAX_OPTIONS](blas_threading_max_options.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Specifying the threading model

- [BLAS](blas.md): An enumeration that acts as a namespace for Swift overlays to BLAS.
- [BLASSetThreading(\_:)](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLASGetThreading()](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.

# BLAS_THREADING (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the BLAS and LAPACK threading model.

## Declaration

```objectivec
enum BLAS_THREADING : unsigned int;
```

<a id="overview"></a>

## Overview

Use the threading model constants to specify whether BLAS and LAPACK operations run in a single thread or multiple threads. Specify the single-threaded model if your app uses its own threading mechanism.

## Topics

### Specifying a threading model

- [BLAS_THREADING_MULTI_THREADED](blas_threading_multi_threaded.md): A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.
- [BLAS_THREADING_SINGLE_THREADED](blas_threading_single_threaded.md): A constant that specifies BLAS and LAPACK execute on a single thread only.
- [BLAS_THREADING_MAX_OPTIONS](blas_threading_max_options.md)

## See Also

### Specifying the threading model

- [BLASSetThreading](blassetthreading%28__%29.md): Sets the BLAS and LAPACK threading model.
- [BLASGetThreading](blasgetthreading%28%29.md): Returns the current BLAS and LAPACK threading model.
