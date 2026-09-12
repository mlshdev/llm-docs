> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffer/zone](https://developer.apple.com/documentation/modelio/mdlmeshbuffer/zone)

# zone (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The memory pool from which the buffer was created.

## Declaration

```swift
var zone: any MDLMeshBufferZone { get }
```

<a id="Discussion"></a>

## Discussion

Use the [newBuffer(from:data:type:)](../mdlmeshbufferallocator/newbuffer%28from_data_type_%29.md) or [newBuffer(from:length:type:)](../mdlmeshbufferallocator/newbuffer%28from_length_type_%29.md) method of an allocator to reserve memory in a shared pool for multiple related buffers.

## See Also

### Inspecting a Buffer

- [allocator](allocator.md): The allocator object that created the buffer.
- [type](type.md): The type of data contained in a buffer.

# zone (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The memory pool from which the buffer was created.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) id<MDLMeshBufferZone> zone;
```

<a id="Discussion"></a>

## Discussion

Use the [newBufferFromZone:data:type:](../mdlmeshbufferallocator/newbuffer%28from_data_type_%29.md) or [newBufferFromZone:length:type:](../mdlmeshbufferallocator/newbuffer%28from_length_type_%29.md) method of an allocator to reserve memory in a shared pool for multiple related buffers.

## See Also

### Inspecting a Buffer

- [allocator](allocator.md): The allocator object that created the buffer.
- [type](type.md): The type of data contained in a buffer.
