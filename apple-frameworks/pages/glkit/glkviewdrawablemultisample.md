> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewdrawablemultisample](https://developer.apple.com/documentation/glkit/glkviewdrawablemultisample)

# GLKViewDrawableMultisample (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

The format of the multisampling buffer.

## Declaration

```swift
enum GLKViewDrawableMultisample
```

<a id="overview"></a>

## Overview

Multisampling improves the quality of the output image, but may require more memory and image processing to do so. As such, you should profile your application with and without multisampling enabled, and choose a setting that provides both the image quality and performance you require.

## Topics

### Constants

- [GLKViewDrawableMultisample.multisampleNone](glkviewdrawablemultisample/multisamplenone.md): Multisampling is not enabled.
- [GLKViewDrawableMultisample.multisample4X](glkviewdrawablemultisample/multisample4x.md): Multisampling is enabled.

### Initializers

- [init(rawValue:)](glkviewdrawablemultisample/init%28rawvalue_%29.md)

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
- [GLKViewDrawableDepthFormat](glkviewdrawabledepthformat.md): The format of the depth renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.

# GLKViewDrawableMultisample (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

The format of the multisampling buffer.

## Declaration

```objectivec
enum GLKViewDrawableMultisample : GLint;
```

<a id="overview"></a>

## Overview

Multisampling improves the quality of the output image, but may require more memory and image processing to do so. As such, you should profile your application with and without multisampling enabled, and choose a setting that provides both the image quality and performance you require.

## Topics

### Constants

- [GLKViewDrawableMultisampleNone](glkviewdrawablemultisample/multisamplenone.md): Multisampling is not enabled.
- [GLKViewDrawableMultisample4X](glkviewdrawablemultisample/multisample4x.md): Multisampling is enabled.

## See Also

### Constants

- [GLKViewDrawableColorFormat](glkviewdrawablecolorformat.md): The format of the color renderbuffer.
- [GLKViewDrawableDepthFormat](glkviewdrawabledepthformat.md): The format of the depth renderbuffer.
- [GLKViewDrawableStencilFormat](glkviewdrawablestencilformat.md): The format of the stencil renderbuffer.
