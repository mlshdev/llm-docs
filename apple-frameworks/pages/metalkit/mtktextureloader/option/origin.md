> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/origin](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/origin)

# origin (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify when to flip the pixel coordinates of the texture.

## Declaration

```swift
static let origin: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the values listed for [MTKTextureLoader.Origin](../origin.md). If you omit this option, the texture loader doesn’t flip loaded textures.

This option cannot be used with block-compressed texture formats, and can be used only with 2D, 2D array, and cube map textures. Each mipmap level and slice of a texture are flipped.

## See Also

### Specifying Origin Information

- [MTKTextureLoader.Origin](../origin.md): Options for specifying when to flip the pixel coordinates of the texture.

# MTKTextureLoaderOptionOrigin (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify when to flip the pixel coordinates of the texture.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionOrigin;
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the values listed for [MTKTextureLoaderOrigin](../origin.md). If you omit this option, the texture loader doesn’t flip loaded textures.

This option cannot be used with block-compressed texture formats, and can be used only with 2D, 2D array, and cube map textures. Each mipmap level and slice of a texture are flipped.

## See Also

### Specifying Origin Information

- [MTKTextureLoaderOrigin](../origin.md): Options for specifying when to flip the pixel coordinates of the texture.
