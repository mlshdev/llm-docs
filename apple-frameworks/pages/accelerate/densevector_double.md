> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/densevector_double](https://developer.apple.com/documentation/accelerate/densevector_double)

# DenseVector_Double (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a dense vector of double-precision, floating-point values.

## Declaration

```swift
struct DenseVector_Double
```

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)
- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md)

<a id="overview"></a>

## Overview

You typically use dense vectors to represent the unknowns vector, *x*, and the right-hand-side vector, *b*, in the matrix equation *Ax = b.* A [DenseVector_Double](densevector_double.md) structure provides a pointer to its underlying data and a count of its number of elements.

The following code shows an example of how to create a dense vector structure from an array of double-precision values. In this case, use [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md) to pass a pointer to your collection. The [DenseVector_Double](densevector_double.md) structure is valid only during the execution of the closure. Don’t store or return the structure for later use.

```swift
var vectorValues: [Double] = [10, 20, 30, 40]
let vectorValuesCount = Int32(vectorValues.count)

vectorValues.withUnsafeMutableBufferPointer { vectorValuesPtr in
    
    let vector = DenseVector_Double(count: vectorValuesCount,
                                    data: vectorValuesPtr.baseAddress!)
    
    // Perform operations using `vector`.
}
```

## Topics

### Initializers

- [init(count:data:)](densevector_double/init%28count_data_%29.md): Creates a new vector of double-precision values.

### Inspecting a Vector’s Structure and Data

- [count](densevector_double/count.md): The number of items in the vector.
- [data](densevector_double/data.md): The array of double-precision, floating-point values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Creating dense matrices and dense vectors

- [DenseMatrix_Double](densematrix_double.md): A structure that contains a dense matrix of double-precision, floating-point values.
- [DenseMatrix_Float](densematrix_float.md): A structure that contains a dense matrix of single-precision, floating-point values.
- [DenseVector_Float](densevector_float.md): A structure that contains a dense vector of single-precision, floating-point values.

# DenseVector_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a dense vector of double-precision, floating-point values.

## Declaration

```objectivec
typedef struct { ... } DenseVector_Double;
```

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)
- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md)

<a id="overview"></a>

## Overview

You typically use dense vectors to represent the unknowns vector, *x*, and the right-hand-side vector, *b*, in the matrix equation *Ax = b.* A [DenseVector_Double](densevector_double.md) structure provides a pointer to its underlying data and a count of its number of elements.

The following code shows an example of how to create a dense vector structure from an array of double-precision values. In this case, use [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md) to pass a pointer to your collection. The [DenseVector_Double](densevector_double.md) structure is valid only during the execution of the closure. Don’t store or return the structure for later use.

```swift
var vectorValues: [Double] = [10, 20, 30, 40]
let vectorValuesCount = Int32(vectorValues.count)

vectorValues.withUnsafeMutableBufferPointer { vectorValuesPtr in
    
    let vector = DenseVector_Double(count: vectorValuesCount,
                                    data: vectorValuesPtr.baseAddress!)
    
    // Perform operations using `vector`.
}
```

## Topics

### Inspecting a Vector’s Structure and Data

- [count](densevector_double/count.md): The number of items in the vector.
- [data](densevector_double/data.md): The array of double-precision, floating-point values.

## See Also

### Creating dense matrices and dense vectors

- [DenseMatrix_Double](densematrix_double.md): A structure that contains a dense matrix of double-precision, floating-point values.
- [DenseMatrix_Float](densematrix_float.md): A structure that contains a dense matrix of single-precision, floating-point values.
- [DenseVector_Float](densevector_float.md): A structure that contains a dense vector of single-precision, floating-point values.
