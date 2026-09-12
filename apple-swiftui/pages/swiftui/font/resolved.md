> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/resolved](https://developer.apple.com/documentation/swiftui/font/resolved)

# Font.Resolved

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A concrete font value.

## Declaration

```swift
struct Resolved
```

<a id="overview"></a>

## Overview

`Font.Resolved` is a concrete representation of a Font that can be shown, with a specific set of `EnvironmentValues`. A `Resolved` font will always map to the same CTFont on a given platform.

> **See Also**

> [Font](../font.md).

## Topics

### Instance Properties

- [ctFont](resolved/ctfont.md): Returns the CTFont opaque type that represents a CoreText font object.
- [isBold](resolved/isbold.md): Returns `true` if the resolved font has a bold trait according to CoreText or the font’s weight is semi-bold or greater.
- [isItalic](resolved/isitalic.md): Returns `true` if the resolved font is italic.
- [isLowercaseSmallCaps](resolved/islowercasesmallcaps.md): Returns `true` if the resolved font’s lowercased characters use small caps.
- [isMonospaced](resolved/ismonospaced.md): Returns `true` if a resolved font is monospaced, false otherwise.
- [isSmallCaps](resolved/issmallcaps.md): Returns `true` if all of the resolved font’s characters use small caps.
- [isUppercaseSmallCaps](resolved/isuppercasesmallcaps.md): Returns `true` if the resolved font’s uppercased characters use small caps.
- [leading](resolved/leading.md): The leading of a resolved font.
- [pointSize](resolved/pointsize.md): The point size of a resolved font.
- [weight](resolved/weight.md): The weight of a resolved font.
- [width](resolved/width.md): The width of a resolved font.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
