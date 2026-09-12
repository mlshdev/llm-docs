> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/makeaccelerationstructure(size:offset:)](https://developer.apple.com/documentation/metal/mtlheap/makeaccelerationstructure(size:offset:))

# makeAccelerationStructure(size:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
func makeAccelerationStructure(size: Int, offset: Int) -> (any MTLAccelerationStructure)?
```

## See Also

### Creating acceleration structure from a heap

- [makeAccelerationStructure(size:)](makeaccelerationstructure%28size_%29.md)
- [makeAccelerationStructure(descriptor:)](makeaccelerationstructure%28descriptor_%29.md)
- [makeAccelerationStructure(descriptor:offset:)](makeaccelerationstructure%28descriptor_offset_%29.md)

# newAccelerationStructureWithSize:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (id<MTLAccelerationStructure>) newAccelerationStructureWithSize:(NSUInteger) size offset:(NSUInteger) offset;
```

## See Also

### Creating acceleration structure from a heap

- [newAccelerationStructureWithSize:](makeaccelerationstructure%28size_%29.md)
- [newAccelerationStructureWithDescriptor:](makeaccelerationstructure%28descriptor_%29.md)
- [newAccelerationStructureWithDescriptor:offset:](makeaccelerationstructure%28descriptor_offset_%29.md)
