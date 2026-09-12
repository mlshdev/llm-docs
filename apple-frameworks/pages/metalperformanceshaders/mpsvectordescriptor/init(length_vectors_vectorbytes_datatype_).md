> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsvectordescriptor/init(length:vectors:vectorbytes:datatype:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsvectordescriptor/init(length:vectors:vectorbytes:datatype:))

# init(length:vectors:vectorBytes:dataType:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(length: Int, vectors: Int, vectorBytes: Int, dataType: MPSDataType)
```

## See Also

### Initializers

- [init(length:dataType:)](init%28length_datatype_%29.md)

# vectorDescriptorWithLength:vectors:vectorBytes:dataType: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) vectorDescriptorWithLength:(NSUInteger) length vectors:(NSUInteger) vectors vectorBytes:(NSUInteger) vectorBytes dataType:(MPSDataType) dataType;
```

## See Also

### Initializers

- [vectorDescriptorWithLength:dataType:](init%28length_datatype_%29.md)
