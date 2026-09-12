> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureinfoorigin](https://developer.apple.com/documentation/glkit/glktextureinfoorigin)

# GLKTextureInfoOrigin (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The location of the origin in the original source image.

## Declaration

```swift
enum GLKTextureInfoOrigin
```

<a id="overview"></a>

## Overview

The origin’s position has no effect on how the texture is loaded into the context. If you need to flip the image before loading it, your app must explicitly add the GLKTextureOriginBottomLeft key to the options dictionary provided when loading the texture.

## Topics

### Constants

- [GLKTextureInfoOrigin.unknown](glktextureinfoorigin/unknown.md): The origin of the texture is not supported.
- [GLKTextureInfoOrigin.topLeft](glktextureinfoorigin/topleft.md): The origin of the texture is in the top-left corner.
- [GLKTextureInfoOrigin.bottomLeft](glktextureinfoorigin/bottomleft.md): The origin of the texture is in the bottom-left corner.

### Initializers

- [init(rawValue:)](glktextureinfoorigin/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [GLKTextureInfoAlphaState](glktextureinfoalphastate.md): Values that describe the alpha information stored in a source image’s pixel data.

# GLKTextureInfoOrigin (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The location of the origin in the original source image.

## Declaration

```objectivec
enum GLKTextureInfoOrigin : GLint;
```

<a id="overview"></a>

## Overview

The origin’s position has no effect on how the texture is loaded into the context. If you need to flip the image before loading it, your app must explicitly add the GLKTextureOriginBottomLeft key to the options dictionary provided when loading the texture.

## Topics

### Constants

- [GLKTextureInfoOriginUnknown](glktextureinfoorigin/unknown.md): The origin of the texture is not supported.
- [GLKTextureInfoOriginTopLeft](glktextureinfoorigin/topleft.md): The origin of the texture is in the top-left corner.
- [GLKTextureInfoOriginBottomLeft](glktextureinfoorigin/bottomleft.md): The origin of the texture is in the bottom-left corner.

## See Also

### Constants

- [GLKTextureInfoAlphaState](glktextureinfoalphastate.md): Values that describe the alpha information stored in a source image’s pixel data.
