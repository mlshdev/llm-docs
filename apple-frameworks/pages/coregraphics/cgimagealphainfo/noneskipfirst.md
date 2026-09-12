> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimagealphainfo/noneskipfirst](https://developer.apple.com/documentation/coregraphics/cgimagealphainfo/noneskipfirst)

# CGImageAlphaInfo.noneSkipFirst (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.

## Declaration

```swift
case noneSkipFirst
```

## See Also

### Constants

- [CGImageAlphaInfo.first](first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [CGImageAlphaInfo.last](last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [CGImageAlphaInfo.none](none.md): There is no alpha channel.
- [CGImageAlphaInfo.alphaOnly](alphaonly.md): There is no color data, only an alpha channel.
- [CGImageAlphaInfo.noneSkipLast](noneskiplast.md): There is no alpha channel.
- [CGImageAlphaInfo.premultipliedFirst](premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [CGImageAlphaInfo.premultipliedLast](premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.

# kCGImageAlphaNoneSkipFirst (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.

## Declaration

```objectivec
kCGImageAlphaNoneSkipFirst
```

## See Also

### Constants

- [kCGImageAlphaFirst](first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [kCGImageAlphaLast](last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [kCGImageAlphaNone](none.md): There is no alpha channel.
- [kCGImageAlphaOnly](alphaonly.md): There is no color data, only an alpha channel.
- [kCGImageAlphaNoneSkipLast](noneskiplast.md): There is no alpha channel.
- [kCGImageAlphaPremultipliedFirst](premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [kCGImageAlphaPremultipliedLast](premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.
