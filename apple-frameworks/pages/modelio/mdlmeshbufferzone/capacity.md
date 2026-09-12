> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferzone/capacity](https://developer.apple.com/documentation/modelio/mdlmeshbufferzone/capacity)

# capacity (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data capacity of the zone, in bytes.

## Declaration

```swift
var capacity: Int { get }
```

<a id="Discussion"></a>

## Discussion

You specify the capacity of a zone when creating it with the [newZone(\_:)](../mdlmeshbufferallocator/newzone%28__%29.md) method of a concrete class implementing the [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) protocol.

## See Also

### Inspecting a Zone

- [allocator](allocator.md): The allocator object that created the zone.

# capacity (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data capacity of the zone, in bytes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger capacity;
```

<a id="Discussion"></a>

## Discussion

You specify the capacity of a zone when creating it with the [newZone:](../mdlmeshbufferallocator/newzone%28__%29.md) method of a concrete class implementing the [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) protocol.

## See Also

### Inspecting a Zone

- [allocator](allocator.md): The allocator object that created the zone.
