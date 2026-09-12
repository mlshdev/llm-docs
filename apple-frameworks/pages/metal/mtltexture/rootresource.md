> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexture/rootresource](https://developer.apple.com/documentation/metal/mtltexture/rootresource)

# rootResource (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The resource that owns the storage for this texture.

> Use [parent](parent.md) or [buffer](buffer.md) instead.

## Declaration

```swift
var rootResource: (any MTLResource)? { get }
```

<a id="discussion"></a>

## Discussion

If the value is `nil`, then this texture image owns its own data. Otherwise, this value is the [MTLResource](../mtlresource.md) instance used to create the texture. For example, it might be a texture that uses the contents of an [MTLBuffer](../mtlbuffer.md) object or a texture view that reinterprets the contents of another [MTLTexture](../mtltexture.md).

## See Also

### Getting information about ancestor resources

- [parent](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.

# rootResource (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The resource that owns the storage for this texture.

> Use [parentTexture](parent.md) or [buffer](buffer.md) instead.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLResource> rootResource;
```

<a id="discussion"></a>

## Discussion

If the value is `nil`, then this texture image owns its own data. Otherwise, this value is the [MTLResource](../mtlresource.md) instance used to create the texture. For example, it might be a texture that uses the contents of an [MTLBuffer](../mtlbuffer.md) object or a texture view that reinterprets the contents of another [MTLTexture](../mtltexture.md).

## See Also

### Getting information about ancestor resources

- [parentTexture](parent.md): The parent texture used to create this texture, if any.
- [parentRelativeLevel](parentrelativelevel.md): The base level of the parent texture used to create this texture.
- [parentRelativeSlice](parentrelativeslice.md): The base slice of the parent texture used to create this texture.
- [buffer](buffer.md): The source buffer used to create this texture, if any.
- [bufferOffset](bufferoffset.md): The offset in the source buffer where the texture’s data comes from.
- [bufferBytesPerRow](bufferbytesperrow.md): The number of bytes in each row of the texture’s source buffer.
