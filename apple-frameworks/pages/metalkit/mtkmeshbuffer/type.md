> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbuffer/type](https://developer.apple.com/documentation/metalkit/mtkmeshbuffer/type)

# type (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of data contained in the originating Model I/O buffer.

## Declaration

```swift
var type: MDLMeshBufferType { get }
```

<a id="Discussion"></a>

## Discussion

A [MDLMeshBuffer](../../modelio/mdlmeshbuffer.md) object can contain Model I/O mesh vertex data or submesh index data.

## See Also

### Originating Objects

- [allocator](allocator.md): The allocator object used to create this mesh buffer.

# type (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of data contained in the originating Model I/O buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLMeshBufferType type;
```

<a id="Discussion"></a>

## Discussion

A [MDLMeshBuffer](../../modelio/mdlmeshbuffer.md) object can contain Model I/O mesh vertex data or submesh index data.

## See Also

### Originating Objects

- [allocator](allocator.md): The allocator object used to create this mesh buffer.
- [zone](zone.md): The zone, if any, from which this mesh buffer was created.
