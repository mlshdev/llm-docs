> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes(forcolumns:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes(forcolumns:datatype:))

# rowBytes(forColumns:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class func rowBytes(forColumns columns: Int, dataType: MPSDataType) -> Int
```

## See Also

### Methods

- [init(dimensions:columns:rowBytes:dataType:)](init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytes(fromColumns:dataType:)](rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.

# rowBytesForColumns:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (size_t) rowBytesForColumns:(NSUInteger) columns dataType:(MPSDataType) dataType;
```

## See Also

### Methods

- [matrixDescriptorWithDimensions:columns:rowBytes:dataType:](init%28dimensions_columns_rowbytes_datatype_%29.md): Deprecated. Creates a matrix descriptor with the specified dimensions and data type.
- [rowBytesFromColumns:dataType:](rowbytes%28fromcolumns_datatype_%29.md): Deprecated. Determines the recommended matrix row stride, in bytes, for a given number of columns.
