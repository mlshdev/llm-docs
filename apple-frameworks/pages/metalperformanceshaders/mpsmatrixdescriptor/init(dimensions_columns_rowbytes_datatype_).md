> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/init(dimensions:columns:rowbytes:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/init(dimensions:columns:rowbytes:datatype:))

# init(dimensions:columns:rowBytes:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a matrix descriptor with the specified dimensions and data type.

## Declaration

```swift
convenience init(dimensions rows: Int, columns: Int, rowBytes: Int, dataType: MPSDataType)
```

## Parameters

- `rows`: The number of rows in the matrix.
- `columns`: The number of columns in the matrix.
- `rowBytes`: The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- `dataType`: The type of the data to be stored in the matrix.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrixDescriptor](../mpsmatrixdescriptor.md) object.

<a id="Discussion"></a>

## Discussion

For performance considerations, the optimal row stride may not necessarily be equal to the number of columns in the matrix. The [rowBytes(fromColumns:dataType:)](rowbytes%28fromcolumns_datatype_%29.md) method may be used to help you determine this value.

## See Also

### Methods

- [rowBytes(fromColumns:dataType:)](rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.
- [rowBytes(forColumns:dataType:)](rowbytes%28forcolumns_datatype_%29.md)

# matrixDescriptorWithDimensions:columns:rowBytes:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a matrix descriptor with the specified dimensions and data type.

## Declaration

```objectivec
+ (instancetype) matrixDescriptorWithDimensions:(NSUInteger) rows columns:(NSUInteger) columns rowBytes:(NSUInteger) rowBytes dataType:(MPSDataType) dataType;
```

## Parameters

- `rows`: The number of rows in the matrix.
- `columns`: The number of columns in the matrix.
- `rowBytes`: The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- `dataType`: The type of the data to be stored in the matrix.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrixDescriptor](../mpsmatrixdescriptor.md) object.

<a id="Discussion"></a>

## Discussion

For performance considerations, the optimal row stride may not necessarily be equal to the number of columns in the matrix. The [rowBytesFromColumns:dataType:](rowbytes%28fromcolumns_datatype_%29.md) method may be used to help you determine this value.

## See Also

### Methods

- [rowBytesFromColumns:dataType:](rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.
- [rowBytesForColumns:dataType:](rowbytes%28forcolumns_datatype_%29.md)
