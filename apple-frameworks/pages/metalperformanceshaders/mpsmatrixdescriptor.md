> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor)

# MPSMatrixDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of attributes used to create an MPS matrix.

## Declaration

```swift
class MPSMatrixDescriptor
```

<a id="overview"></a>

## Overview

Matrix data is assumed to be stored in row-major order.

## Topics

### Initializers

- [init(rows:columns:matrices:rowBytes:matrixBytes:dataType:)](mpsmatrixdescriptor/init%28rows_columns_matrices_rowbytes_matrixbytes_datatype_%29.md)
- [init(rows:columns:rowBytes:dataType:)](mpsmatrixdescriptor/init%28rows_columns_rowbytes_datatype_%29.md)

### Methods

- [init(dimensions:columns:rowBytes:dataType:)](mpsmatrixdescriptor/init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytes(fromColumns:dataType:)](mpsmatrixdescriptor/rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.
- [rowBytes(forColumns:dataType:)](mpsmatrixdescriptor/rowbytes%28forcolumns_datatype_%29.md)

### Properties

- [rows](mpsmatrixdescriptor/rows.md): The number of rows in the matrix.
- [columns](mpsmatrixdescriptor/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrixdescriptor/datatype.md): The type of the values in the matrix.
- [MPSDataType](mpsdatatype.md): A value to specify a type of data.
- [rowBytes](mpsmatrixdescriptor/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [matrices](mpsmatrixdescriptor/matrices.md)
- [matrixBytes](mpsmatrixdescriptor/matrixbytes.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matrices

- [MPSMatrix](mpsmatrix.md): A 2D array of data that stores the data’s values.
- [MPSTemporaryMatrix](mpstemporarymatrix.md): A matrix allocated on GPU private memory.

# MPSMatrixDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of attributes used to create an MPS matrix.

## Declaration

```objectivec
@interface MPSMatrixDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Matrix data is assumed to be stored in row-major order.

## Topics

### Initializers

- [matrixDescriptorWithRows:columns:matrices:rowBytes:matrixBytes:dataType:](mpsmatrixdescriptor/init%28rows_columns_matrices_rowbytes_matrixbytes_datatype_%29.md)
- [matrixDescriptorWithRows:columns:rowBytes:dataType:](mpsmatrixdescriptor/init%28rows_columns_rowbytes_datatype_%29.md)

### Methods

- [matrixDescriptorWithDimensions:columns:rowBytes:dataType:](mpsmatrixdescriptor/init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytesFromColumns:dataType:](mpsmatrixdescriptor/rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.
- [rowBytesForColumns:dataType:](mpsmatrixdescriptor/rowbytes%28forcolumns_datatype_%29.md)

### Properties

- [rows](mpsmatrixdescriptor/rows.md): The number of rows in the matrix.
- [columns](mpsmatrixdescriptor/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrixdescriptor/datatype.md): The type of the values in the matrix.
- [MPSDataType](mpsdatatype.md): A value to specify a type of data.
- [rowBytes](mpsmatrixdescriptor/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [matrices](mpsmatrixdescriptor/matrices.md)
- [matrixBytes](mpsmatrixdescriptor/matrixbytes.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Matrices

- [MPSMatrix](mpsmatrix.md): A 2D array of data that stores the data’s values.
- [MPSTemporaryMatrix](mpstemporarymatrix.md): A matrix allocated on GPU private memory.
