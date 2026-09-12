> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_norm](https://developer.apple.com/documentation/accelerate/sparse_norm)

# sparse_norm (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The norm specifier.

## Declaration

```swift
struct sparse_norm
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Constants

- [SPARSE_NORM_ONE](sparse_norm_one.md): Norm One
- [SPARSE_NORM_TWO](sparse_norm_two.md): Norm Two
- [SPARSE_NORM_INF](sparse_norm_inf.md): Norm Inf
- [SPARSE_NORM_R1](sparse_norm_r1.md): Norm R1

### Initializers

- [init(\_:)](sparse_norm/init%28__%29.md)
- [init(rawValue:)](sparse_norm/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sparse_norm/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting Types

- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.
- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_stride](sparse_stride.md): The stride type.

# sparse_norm (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The norm specifier.

## Declaration

```objectivec
typedef enum { ... } sparse_norm;
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Constants

- [SPARSE_NORM_ONE](sparse_norm_one.md): Norm One
- [SPARSE_NORM_TWO](sparse_norm_two.md): Norm Two
- [SPARSE_NORM_INF](sparse_norm_inf.md): Norm Inf
- [SPARSE_NORM_R1](sparse_norm_r1.md): Norm R1

## See Also

### Supporting Types

- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.
- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_stride](sparse_stride.md): The stride type.
