> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_matrix_float](https://developer.apple.com/documentation/accelerate/sparse_matrix_float)

# sparse_matrix_float (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sparse matrix opaque type for float.

## Declaration

```swift
typealias sparse_matrix_float = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.

# sparse_matrix_float (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sparse matrix opaque type for float.

## Declaration

```objectivec
typedef struct sparse_m_float * sparse_matrix_float;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.
