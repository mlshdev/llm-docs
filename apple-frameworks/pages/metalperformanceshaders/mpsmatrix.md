> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrix](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrix)

# MPSMatrix (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A 2D array of data that stores the data’s values.

## Declaration

```swift
class MPSMatrix
```

<a id="overview"></a>

## Overview

[MPSMatrix](mpsmatrix.md) objects serve as inputs and outputs of [MPSMatrixMultiplication](mpsmatrixmultiplication.md) objects. Matrix data is assumed to be stored in row-major order.

> **Note**

>  An [MPSMatrix](mpsmatrix.md) object maintains its internal storage using a [MTLBuffer](../metal/mtlbuffer.md) object. Thus, the same rules for maintaining coherency of the buffer’s data between CPU memory and GPU memory also apply to an [MPSMatrix](mpsmatrix.md) object.

## Topics

### Methods

- [init(buffer:descriptor:)](mpsmatrix/init%28buffer_descriptor_%29.md): Initializes a matrix with a buffer.

### Properties

- [device](mpsmatrix/device.md): The device on which the matrix will be used.
- [rows](mpsmatrix/rows.md): The number of rows in the matrix.
- [columns](mpsmatrix/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrix/datatype.md): The type of the values in the matrix.
- [rowBytes](mpsmatrix/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [data](mpsmatrix/data.md): The buffer that stores the matrix data.
- [matrices](mpsmatrix/matrices.md)
- [matrixBytes](mpsmatrix/matrixbytes.md)

### Initializers

- [init(buffer:offset:descriptor:)](mpsmatrix/init%28buffer_offset_descriptor_%29.md)
- [init(device:descriptor:)](mpsmatrix/init%28device_descriptor_%29.md)

### Instance Properties

- [offset](mpsmatrix/offset.md)

### Instance Methods

- [resourceSize()](mpsmatrix/resourcesize%28%29.md)
- [synchronize(on:)](mpsmatrix/synchronize%28on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryMatrix](mpstemporarymatrix.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Matrices

- [MPSMatrixDescriptor](mpsmatrixdescriptor.md): A description of attributes used to create an MPS matrix.
- [MPSTemporaryMatrix](mpstemporarymatrix.md): A matrix allocated on GPU private memory.

# MPSMatrix (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A 2D array of data that stores the data’s values.

## Declaration

```objectivec
@interface MPSMatrix : NSObject
```

<a id="overview"></a>

## Overview

[MPSMatrix](mpsmatrix.md) objects serve as inputs and outputs of [MPSMatrixMultiplication](mpsmatrixmultiplication.md) objects. Matrix data is assumed to be stored in row-major order.

> **Note**

>  An [MPSMatrix](mpsmatrix.md) object maintains its internal storage using a [MTLBuffer](../metal/mtlbuffer.md) object. Thus, the same rules for maintaining coherency of the buffer’s data between CPU memory and GPU memory also apply to an [MPSMatrix](mpsmatrix.md) object.

## Topics

### Methods

- [initWithBuffer:descriptor:](mpsmatrix/init%28buffer_descriptor_%29.md): Initializes a matrix with a buffer.

### Properties

- [device](mpsmatrix/device.md): The device on which the matrix will be used.
- [rows](mpsmatrix/rows.md): The number of rows in the matrix.
- [columns](mpsmatrix/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrix/datatype.md): The type of the values in the matrix.
- [rowBytes](mpsmatrix/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [data](mpsmatrix/data.md): The buffer that stores the matrix data.
- [matrices](mpsmatrix/matrices.md)
- [matrixBytes](mpsmatrix/matrixbytes.md)

### Instance Properties

- [offset](mpsmatrix/offset.md)

### Instance Methods

- [initWithBuffer:offset:descriptor:](mpsmatrix/init%28buffer_offset_descriptor_%29.md)
- [initWithDevice:descriptor:](mpsmatrix/init%28device_descriptor_%29.md)
- [resourceSize](mpsmatrix/resourcesize%28%29.md)
- [synchronizeOnCommandBuffer:](mpsmatrix/synchronize%28on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSTemporaryMatrix](mpstemporarymatrix.md)

## See Also

### Matrices

- [MPSMatrixDescriptor](mpsmatrixdescriptor.md): A description of attributes used to create an MPS matrix.
- [MPSTemporaryMatrix](mpstemporarymatrix.md): A matrix allocated on GPU private memory.
