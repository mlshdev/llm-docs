> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsscaletransform](https://developer.apple.com/documentation/metalperformanceshaders/mpsscaletransform)

# MPSScaleTransform (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A transform matrix for explicit resampling control with a Lanczos kernel.

## Declaration

```swift
struct MPSScaleTransform
```

## Topics

### Fields

- [scaleX](mpsscaletransform/scalex.md): The horizontal scale factor.
- [scaleY](mpsscaletransform/scaley.md): The vertical scale factor.
- [translateX](mpsscaletransform/translatex.md): The horizontal translation factor.
- [translateY](mpsscaletransform/translatey.md): The vertical translation factor.

### Initializers

- [init()](mpsscaletransform/init%28%29.md)
- [init(scaleX:scaleY:translateX:translateY:)](mpsscaletransform/init%28scalex_scaley_translatex_translatey_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.

# MPSScaleTransform (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A transform matrix for explicit resampling control with a Lanczos kernel.

## Declaration

```objectivec
typedef struct MPSScaleTransform { ... } MPSScaleTransform;
```

## Topics

### Fields

- [scaleX](mpsscaletransform/scalex.md): The horizontal scale factor.
- [scaleY](mpsscaletransform/scaley.md): The vertical scale factor.
- [translateX](mpsscaletransform/translatex.md): The horizontal translation factor.
- [translateY](mpsscaletransform/translatey.md): The vertical translation factor.

## See Also

### Related Documentation

- [MPSImageLanczosScale](mpsimagelanczosscale.md): A filter that resizes and changes the aspect ratio of an image using Lanczos resampling.
