> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewdrawabledepthformat](https://developer.apple.com/documentation/glkit/glkviewdrawabledepthformat)

# GLKViewDrawableDepthFormat (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

The format of the depth renderbuffer.

## Declaration

```swift
enum GLKViewDrawableDepthFormat
```

## Topics

### Constants

- [GLKViewDrawableDepthFormat.formatNone](glkviewdrawabledepthformat/formatnone.md): The underlying framebuffer object has no depth buffer.
- [GLKViewDrawableDepthFormat.format16](glkviewdrawabledepthformat/format16.md): A 16-bit depth entry for each pixel.
- [GLKViewDrawableDepthFormat.format24](glkviewdrawabledepthformat/format24.md): A 24-bit depth entry for each pixel.

### Initializers

- [init(rawValue:)](glkviewdrawabledepthformat/init%28rawvalue_%29.md)

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

- [GLKViewDrawableColorFormat](glkviewdrawablecolorformat.md): The format of the color renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.
- [GLKViewDrawableMultisample](glkviewdrawablemultisample.md): The format of the multisampling buffer.

# GLKViewDrawableDepthFormat (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

The format of the depth renderbuffer.

## Declaration

```objectivec
enum GLKViewDrawableDepthFormat : GLint;
```

## Topics

### Constants

- [GLKViewDrawableDepthFormatNone](glkviewdrawabledepthformat/formatnone.md): The underlying framebuffer object has no depth buffer.
- [GLKViewDrawableDepthFormat16](glkviewdrawabledepthformat/format16.md): A 16-bit depth entry for each pixel.
- [GLKViewDrawableDepthFormat24](glkviewdrawabledepthformat/format24.md): A 24-bit depth entry for each pixel.

## See Also

### Constants

- [GLKViewDrawableColorFormat](glkviewdrawablecolorformat.md): The format of the color renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.
- [GLKViewDrawableMultisample](glkviewdrawablemultisample.md): The format of the multisampling buffer.
