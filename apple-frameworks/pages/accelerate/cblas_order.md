> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_order](https://developer.apple.com/documentation/accelerate/cblas_order)

# CBLAS_ORDER (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether a matrix is in row-major or column-major order.

## Declaration

```swift
struct CBLAS_ORDER
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Initializers

- [init(\_:)](cblas_order/init%28__%29.md)
- [init(rawValue:)](cblas_order/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](cblas_order/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Constants

- [CBLAS_TRANSPOSE](cblas_transpose.md): Indicates transpose operation to perform on a matrix.
- [CBLAS_UPLO](cblas_uplo.md)
- [CBLAS_DIAG](cblas_diag.md): Indicates whether a triangular matrix is unit-diagonal (diagonal elements are all equal to 1).
- [CBLAS_SIDE](cblas_side.md): Indicates the order of a matrix multiplication.

# CBLAS_ORDER (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether a matrix is in row-major or column-major order.

## Declaration

```objectivec
enum CBLAS_ORDER : unsigned int;
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Constants

- [CBLAS_TRANSPOSE](cblas_transpose.md): Indicates transpose operation to perform on a matrix.
- [CBLAS_UPLO](cblas_uplo.md)
- [CBLAS_DIAG](cblas_diag.md): Indicates whether a triangular matrix is unit-diagonal (diagonal elements are all equal to 1).
- [CBLAS_SIDE](cblas_side.md): Indicates the order of a matrix multiplication.
