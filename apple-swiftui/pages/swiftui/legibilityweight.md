> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/legibilityweight](https://developer.apple.com/documentation/swiftui/legibilityweight)

# LegibilityWeight

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The Accessibility Bold Text user setting options.

## Declaration

```swift
enum LegibilityWeight
```

<a id="overview"></a>

## Overview

The app can’t override the user’s choice before iOS 16, tvOS 16 or watchOS 9.0.

## Topics

### Getting weights

- [LegibilityWeight.regular](legibilityweight/regular.md): Use regular font weight (no Accessibility Bold).
- [LegibilityWeight.bold](legibilityweight/bold.md): Use heavier font weight (force Accessibility Bold).

### Creating a weight

- [init(\_:)](legibilityweight/init%28__%29.md): Creates a legibility weight from its UILegibilityWeight equivalent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Improving legibility

- [accessibilityShowButtonShapes](environmentvalues/accessibilityshowbuttonshapes.md): Deprecated. Whether the system preference for Show Button Shapes is enabled.
- [accessibilityReduceTransparency](environmentvalues/accessibilityreducetransparency.md): Whether the system preference for Reduce Transparency is enabled.
- [legibilityWeight](environmentvalues/legibilityweight.md): The font weight to apply to text.
