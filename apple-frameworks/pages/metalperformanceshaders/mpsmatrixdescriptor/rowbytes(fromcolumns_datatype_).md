> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes(fromcolumns:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes(fromcolumns:datatype:))

# rowBytes(fromColumns:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Determines the recommended matrix row stride, in bytes, for a given number of columns.

## Declaration

```swift
class func rowBytes(fromColumns columns: Int, dataType: MPSDataType) -> Int
```

## Parameters

- `columns`: The number of columns in the matrix.
- `dataType`: The type of the data to be stored in the matrix.

<a id="return-value"></a>

## Return Value

The recommended matrix row stride, in bytes.

<a id="Discussion"></a>

## Discussion

The optimal stride between the rows of a matrix is not necessarily equivalent to the number of columns in the matrix. This method returns the row stride, in bytes, which gives the best performance for a given number of columns. Using this row stride to construct your matrix descriptor is recommended, but not required (as long as the stride used is still large enough to allocate a full row of data).

## See Also

### Methods

- [init(dimensions:columns:rowBytes:dataType:)](init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytes(forColumns:dataType:)](rowbytes%28forcolumns_datatype_%29.md)

# rowBytesFromColumns:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Determines the recommended matrix row stride, in bytes, for a given number of columns.

## Declaration

```objectivec
+ (size_t) rowBytesFromColumns:(NSUInteger) columns dataType:(MPSDataType) dataType;
```

## Parameters

- `columns`: The number of columns in the matrix.
- `dataType`: The type of the data to be stored in the matrix.

<a id="return-value"></a>

## Return Value

The recommended matrix row stride, in bytes.

<a id="Discussion"></a>

## Discussion

The optimal stride between the rows of a matrix is not necessarily equivalent to the number of columns in the matrix. This method returns the row stride, in bytes, which gives the best performance for a given number of columns. Using this row stride to construct your matrix descriptor is recommended, but not required (as long as the stride used is still large enough to allocate a full row of data).

## See Also

### Methods

- [matrixDescriptorWithDimensions:columns:rowBytes:dataType:](init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytesForColumns:dataType:](rowbytes%28forcolumns_datatype_%29.md)
