> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/init(rows:columns:matrices:rowbytes:matrixbytes:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/init(rows:columns:matrices:rowbytes:matrixbytes:datatype:))

# init(rows:columns:matrices:rowBytes:matrixBytes:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(rows: Int, columns: Int, matrices: Int, rowBytes: Int, matrixBytes: Int, dataType: MPSDataType)
```

## See Also

### Initializers

- [init(rows:columns:rowBytes:dataType:)](init%28rows_columns_rowbytes_datatype_%29.md)

# matrixDescriptorWithRows:columns:matrices:rowBytes:matrixBytes:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) matrixDescriptorWithRows:(NSUInteger) rows columns:(NSUInteger) columns matrices:(NSUInteger) matrices rowBytes:(NSUInteger) rowBytes matrixBytes:(NSUInteger) matrixBytes dataType:(MPSDataType) dataType;
```

## See Also

### Initializers

- [matrixDescriptorWithRows:columns:rowBytes:dataType:](init%28rows_columns_rowbytes_datatype_%29.md)
