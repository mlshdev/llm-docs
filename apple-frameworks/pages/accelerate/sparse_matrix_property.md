> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_matrix_property](https://developer.apple.com/documentation/accelerate/sparse_matrix_property)

# sparse_matrix_property (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The matrix property type.

## Declaration

```swift
struct sparse_matrix_property
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Constants

- [SPARSE_UPPER_TRIANGULAR](sparse_upper_triangular.md): An upper triangular matrix.
- [SPARSE_LOWER_TRIANGULAR](sparse_lower_triangular.md): A lower triangular matrix.
- [SPARSE_UPPER_SYMMETRIC](sparse_upper_symmetric.md): A symmetric matrix with values derived from the upper triangle.
- [SPARSE_LOWER_SYMMETRIC](sparse_lower_symmetric.md): A symmetric matrix with values derived from the lower triangle.

### Initializers

- [init(\_:)](sparse_matrix_property/init%28__%29.md)
- [init(rawValue:)](sparse_matrix_property/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](sparse_matrix_property/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting Types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.

# sparse_matrix_property (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The matrix property type.

## Declaration

```objectivec
typedef enum { ... } sparse_matrix_property;
```

<a id="overview"></a>

## Overview

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## Topics

### Constants

- [SPARSE_UPPER_TRIANGULAR](sparse_upper_triangular.md): An upper triangular matrix.
- [SPARSE_LOWER_TRIANGULAR](sparse_lower_triangular.md): A lower triangular matrix.
- [SPARSE_UPPER_SYMMETRIC](sparse_upper_symmetric.md): A symmetric matrix with values derived from the upper triangle.
- [SPARSE_LOWER_SYMMETRIC](sparse_lower_symmetric.md): A symmetric matrix with values derived from the lower triangle.

## See Also

### Supporting Types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
