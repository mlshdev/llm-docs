> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/format/colorspace](https://developer.apple.com/documentation/realitykit/textureresource/format/colorspace)

# TextureResource.Format.ColorSpace

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A profile that specifies the interpretation of pixel values as a color.

## Declaration

```swift
enum ColorSpace
```

<a id="overview"></a>

## Overview

This color space specifies the color primaries, and the pixel format specifies the white point transfer function.

## Topics

### Format color spaces

- [TextureResource.Format.ColorSpace.displayP3](colorspace/displayp3.md): DCI P3 primaries with a D65 white point.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the format profile

- [TextureResource.Format.NormalEncoding](normalencoding.md): A profile that specifies the interpretation of pixel values as a normal.
