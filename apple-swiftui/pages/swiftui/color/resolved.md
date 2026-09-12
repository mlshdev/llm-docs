> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/resolved](https://developer.apple.com/documentation/swiftui/color/resolved)

# Color.Resolved

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A concrete color value.

## Declaration

```swift
@frozen struct Resolved
```

<a id="overview"></a>

## Overview

`Color.Resolved` is a set of RGBA values that represent a color that can be shown. The values are stored in the Linear sRGB color space, using extended range. This is a low-level type, most colors are represented by the `Color` type.

> **See Also**

> `Color.ResolvedHDR`, `Color`.

## Topics

### Initializers

- [init(colorSpace:red:green:blue:opacity:)](resolved/init%28colorspace_red_green_blue_opacity_%29.md): Creates a resolved color from red, green, and blue component values.

### Instance Properties

- [blue](resolved/blue.md): The amount of blue in the color in the sRGB color space.
- [cgColor](resolved/cgcolor.md): A Core Graphics representation of the color.
- [green](resolved/green.md): The amount of green in the color in the sRGB color space.
- [linearBlue](resolved/linearblue.md): The amount of blue in the color in the sRGB linear color space.
- [linearGreen](resolved/lineargreen.md): The amount of green in the color in the sRGB linear color space.
- [linearRed](resolved/linearred.md): The amount of red in the color in the sRGB linear color space.
- [opacity](resolved/opacity.md): The degree of opacity in the color, given in the range `0` to `1`.
- [red](resolved/red.md): The amount of red in the color in the sRGB color space.

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
