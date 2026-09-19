> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/compatibility

# CVPixelFormatDescription.Compatibility

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of options that control compatibility between different pixel formats.

## Declaration

```swift
struct Compatibility
```

## Topics

### Type Properties

- [cgBitmapContext](compatibility/cgbitmapcontext.md): The pixel format is compatible with a Core Graphics bitmap context.
- [cgImage](compatibility/cgimage.md): The pixel format is compatible with a Core Graphics image.
- [ioSurfaceCoreAnimation](compatibility/iosurfacecoreanimation.md): The CVPixelBuffer’s IOSurface is compatible with CoreAnimation CALayer.
- [metalTexture](compatibility/metaltexture.md): The pixel format is compatible with a Metal texture.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
