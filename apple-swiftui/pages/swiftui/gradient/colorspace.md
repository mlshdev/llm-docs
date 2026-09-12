> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gradient/colorspace](https://developer.apple.com/documentation/swiftui/gradient/colorspace)

# Gradient.ColorSpace

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A method of interpolating between the colors in a gradient.

## Declaration

```swift
struct ColorSpace
```

## Topics

### Getting an interpolation method

- [device](colorspace/device.md): Interpolates gradient colors in the output color space.
- [perceptual](colorspace/perceptual.md): Interpolates gradient colors in a perceptual color space.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with color spaces

- [colorSpace(\_:)](colorspace%28__%29.md): Returns a version of the gradient that will use a specified color space for interpolating between its colors.
