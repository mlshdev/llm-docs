> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arenvironmentprobeanchor/environmenttexture](https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/environmenttexture)

# environmentTexture (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A cube-map texture that represents the view in all directions from the probe anchor’s position.

## Declaration

```swift
var environmentTexture: (any MTLTexture)? { get }
```

<a id="Discussion"></a>

## Discussion

This texture is in the format [MTLPixelFormat.bgra8Unorm_srgb](../../metal/mtlpixelformat/bgra8unorm_srgb.md).

# environmentTexture (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A cube-map texture that represents the view in all directions from the probe anchor’s position.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<MTLTexture> environmentTexture;
```

<a id="Discussion"></a>

## Discussion

This texture is in the format [MTLPixelFormatBGRA8Unorm_sRGB](../../metal/mtlpixelformat/bgra8unorm_srgb.md).
