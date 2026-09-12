> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/resolvedhdr](https://developer.apple.com/documentation/swiftui/color/resolvedhdr)

# Color.ResolvedHDR

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A concrete color value, including HDR headroom information.

## Declaration

```swift
@frozen struct ResolvedHDR
```

<a id="overview"></a>

## Overview

`Color.ResolvedHDR` is a set of RGBA values that represent a color that can be shown. The color components are stored in the extended sRGB color space and may contain a “headroom” value describing how the color is rendered for displays with different dynamic ranges. This is a low-level type, most colors are represented by the `Color` type.

> **See Also**

> `Color.Resolved`, `Color`.

## Topics

### Creating a concrete color value

- [init(\_:headroom:)](resolvedhdr/init%28__headroom_%29.md): Initializes a new resolved color value.

### Getting color properties

- [red](resolvedhdr/red.md): The amount of red in the color in the extended sRGB color space.
- [green](resolvedhdr/green.md): The amount of green in the color in the extended sRGB color space.
- [blue](resolvedhdr/blue.md): The amount of blue in the color in the extended sRGB color space.
- [linearRed](resolvedhdr/linearred.md): The amount of red in the color in the extended sRGB color space variant with linear gamma.
- [linearGreen](resolvedhdr/lineargreen.md): The amount of green in the color in the extended sRGB color space variant with linear gamma.
- [linearBlue](resolvedhdr/linearblue.md): The amount of blue in the color in the extended sRGB color space variant with linear gamma.
- [opacity](resolvedhdr/opacity.md): The opacity of the color, in the range `0` to `1`.
- [headroom](resolvedhdr/headroom.md): The content headroom of the color.

## Relationships

### Conforms To

- [Animatable](../animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](../shapestyle.md)

## See Also

### Working with high dynamic range (HDR) colors

- [resolveHDR(in:)](resolvehdr%28in_%29.md): Evaluates this color to a resolved color with content headroom, given a set of environment values.
