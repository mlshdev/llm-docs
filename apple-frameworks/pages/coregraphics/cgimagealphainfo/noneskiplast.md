> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimagealphainfo/noneskiplast](https://developer.apple.com/documentation/coregraphics/cgimagealphainfo/noneskiplast)

# CGImageAlphaInfo.noneSkipLast (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

There is no alpha channel.

## Declaration

```swift
case noneSkipLast
```

## See Also

### Constants

- [CGImageAlphaInfo.first](first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [CGImageAlphaInfo.last](last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [CGImageAlphaInfo.none](none.md): There is no alpha channel.
- [CGImageAlphaInfo.noneSkipFirst](noneskipfirst.md): There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.
- [CGImageAlphaInfo.alphaOnly](alphaonly.md): There is no color data, only an alpha channel.
- [CGImageAlphaInfo.premultipliedFirst](premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [CGImageAlphaInfo.premultipliedLast](premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.

# kCGImageAlphaNoneSkipLast (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

There is no alpha channel.

## Declaration

```objectivec
kCGImageAlphaNoneSkipLast
```

## See Also

### Constants

- [kCGImageAlphaFirst](first.md): The alpha component is stored in the most significant bits of each pixel. For example, non-premultiplied ARGB.
- [kCGImageAlphaLast](last.md): The alpha component is stored in the least significant bits of each pixel. For example, non-premultiplied RGBA.
- [kCGImageAlphaNone](none.md): There is no alpha channel.
- [kCGImageAlphaNoneSkipFirst](noneskipfirst.md): There is no alpha channel. If the total size of the pixel is greater than the space required for the number of color components in the color space, the most significant bits are ignored.
- [kCGImageAlphaOnly](alphaonly.md): There is no color data, only an alpha channel.
- [kCGImageAlphaPremultipliedFirst](premultipliedfirst.md): The alpha component is stored in the most significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied ARGB.
- [kCGImageAlphaPremultipliedLast](premultipliedlast.md): The alpha component is stored in the least significant bits of each pixel and the color components have already been multiplied by this alpha value. For example, premultiplied RGBA.
