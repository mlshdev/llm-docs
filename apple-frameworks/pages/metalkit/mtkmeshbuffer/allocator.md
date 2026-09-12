> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbuffer/allocator](https://developer.apple.com/documentation/metalkit/mtkmeshbuffer/allocator)

# allocator (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object used to create this mesh buffer.

## Declaration

```swift
var allocator: MTKMeshBufferAllocator { get }
```

<a id="Discussion"></a>

## Discussion

The allocator uses Model I/O for copy and re-layout operations, such as when a new vertex descriptor is applied to an existing vertex buffer.

## See Also

### Originating Objects

- [type](type.md): The type of data contained in the originating Model I/O buffer.

# allocator (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object used to create this mesh buffer.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) MTKMeshBufferAllocator * allocator;
```

<a id="Discussion"></a>

## Discussion

The allocator uses Model I/O for copy and re-layout operations, such as when a new vertex descriptor is applied to an existing vertex buffer.

## See Also

### Originating Objects

- [zone](zone.md): The zone, if any, from which this mesh buffer was created.
- [type](type.md): The type of data contained in the originating Model I/O buffer.
