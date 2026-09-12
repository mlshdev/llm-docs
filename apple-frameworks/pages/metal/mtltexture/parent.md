> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/parent](https://developer.apple.com/documentation/metal/mtltexture/parent)

# parent (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent texture used to create this texture, if any.

## Declaration

```swift
var parent: (any MTLTexture)? { get }
```

<a id="discussion"></a>

## Discussion

When this value is `nil`, an [MTLBuffer](../mtlbuffer.md) instance provides texture data.

## See Also

### Getting information about ancestor resources

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.

# parentTexture (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent texture used to create this texture, if any.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLTexture> parentTexture;
```

<a id="discussion"></a>

## Discussion

When this value is `nil`, an [MTLBuffer](../mtlbuffer.md) instance provides texture data.

## See Also

### Getting information about ancestor resources

- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
- [rootResource](rootresource.md): Deprecated. The resource that owns the storage for this texture.
