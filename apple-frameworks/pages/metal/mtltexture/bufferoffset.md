> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/bufferoffset](https://developer.apple.com/documentation/metal/mtltexture/bufferoffset)

# bufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

The offset in the source buffer where the texture’s data comes from.

## Declaration

```swift
var bufferOffset: Int { get }
```

<a id="discussion"></a>

## Discussion

This property is only valid for textures created from a [buffer](buffer.md). The default value is `0`.

## See Also

### Related Documentation

- [makeTexture(descriptor:offset:bytesPerRow:)](../mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md): Creates a texture that shares its storage with the buffer.

### Getting information about ancestor resources

- [parent](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.

# bufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

The offset in the source buffer where the texture’s data comes from.

## Declaration

```objectivec
@property (readonly) NSUInteger bufferOffset;
```

<a id="discussion"></a>

## Discussion

This property is only valid for textures created from a [buffer](buffer.md). The default value is `0`.

## See Also

### Related Documentation

- [newTextureWithDescriptor:offset:bytesPerRow:](../mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md): Creates a texture that shares its storage with the buffer.

### Getting information about ancestor resources

- [parentTexture](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.
