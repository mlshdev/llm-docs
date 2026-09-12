> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/bufferbytesperrow](https://developer.apple.com/documentation/metal/mtltexture/bufferbytesperrow)

# bufferBytesPerRow (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

The number of bytes in each row of the texture’s source buffer.

## Declaration

```swift
var bufferBytesPerRow: Int { get }
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
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.

# bufferBytesPerRow (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

The number of bytes in each row of the texture’s source buffer.

## Declaration

```objectivec
@property (readonly) NSUInteger bufferBytesPerRow;
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
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.
