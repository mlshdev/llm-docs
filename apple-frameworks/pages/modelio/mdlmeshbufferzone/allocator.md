> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlmeshbufferzone/allocator

# allocator (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object that created the zone.

## Declaration

```swift
var allocator: any MDLMeshBufferAllocator { get }
```

<a id="Discussion"></a>

## Discussion

Use the [newZone(\_:)](../mdlmeshbufferallocator/newzone%28__%29.md) method of a concrete class implementing the [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) protocol to create a zone.

## See Also

### Inspecting a Zone

- [capacity](capacity.md): The data capacity of the zone, in bytes.

# allocator (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object that created the zone.

## Declaration

```objectivec
@property (nonatomic, readonly) id<MDLMeshBufferAllocator> allocator;
```

<a id="Discussion"></a>

## Discussion

Use the [newZone:](../mdlmeshbufferallocator/newzone%28__%29.md) method of a concrete class implementing the [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) protocol to create a zone.

## See Also

### Inspecting a Zone

- [capacity](capacity.md): The data capacity of the zone, in bytes.
