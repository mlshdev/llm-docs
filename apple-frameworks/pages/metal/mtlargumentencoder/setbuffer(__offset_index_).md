> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setbuffer(_:offset:index:))

# setBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a reference to a buffer into the argument buffer.

## Declaration

```swift
func setBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: A buffer the method encodes.
- `offset`: A byte offset for `buffer`.
- `index`: The index of a buffer within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding buffers

- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Encodes references to an array of buffers into the argument buffer.

# setBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a reference to a buffer into the argument buffer.

## Declaration

```objectivec
- (void) setBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: A buffer the method encodes.
- `offset`: A byte offset for `buffer`.
- `index`: The index of a buffer within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding buffers

- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Encodes references to an array of buffers into the argument buffer.
