> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/init(rows:columns:rowbytes:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/init(rows:columns:rowbytes:datatype:))

# init(rows:columns:rowBytes:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(rows: Int, columns: Int, rowBytes: Int, dataType: MPSDataType)
```

## See Also

### Initializers

- [init(rows:columns:matrices:rowBytes:matrixBytes:dataType:)](init%28rows_columns_matrices_rowbytes_matrixbytes_datatype_%29.md)

# matrixDescriptorWithRows:columns:rowBytes:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) matrixDescriptorWithRows:(NSUInteger) rows columns:(NSUInteger) columns rowBytes:(NSUInteger) rowBytes dataType:(MPSDataType) dataType;
```

## See Also

### Initializers

- [matrixDescriptorWithRows:columns:matrices:rowBytes:matrixBytes:dataType:](init%28rows_columns_matrices_rowbytes_matrixbytes_datatype_%29.md)
