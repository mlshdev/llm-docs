> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/option/cubelayout](https://developer.apple.com/documentation/metalkit/mtktextureloader/option/cubelayout)

# cubeLayout (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify how cube texture data is arranged in the source image.

## Declaration

```swift
static let cubeLayout: MTKTextureLoader.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the values listed for [MTKTextureLoader.CubeLayout](../cubelayout.md). If this option is omitted, the texture loader does not create a cube texture.

This option cannot be used with PVR files, KTX files, or [MDLTexture](../../../modelio/mdltexture.md) objects, which support cube textures directly.

## See Also

### Specifying Cube Layout

- [MTKTextureLoader.CubeLayout](../cubelayout.md): Options for specifying how cube texture data is arranged in the source image.

# MTKTextureLoaderOptionCubeLayout (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A key used to specify how cube texture data is arranged in the source image.

## Declaration

```objectivec
extern MTKTextureLoaderOption const MTKTextureLoaderOptionCubeLayout;
```

<a id="Discussion"></a>

## Discussion

The value for this key is one of the values listed for [MTKTextureLoaderCubeLayout](../cubelayout.md). If this option is omitted, the texture loader does not create a cube texture.

This option cannot be used with PVR files, KTX files, or [MDLTexture](../../../modelio/mdltexture.md) objects, which support cube textures directly.

## See Also

### Specifying Cube Layout

- [MTKTextureLoaderCubeLayout](../cubelayout.md): Options for specifying how cube texture data is arranged in the source image.
