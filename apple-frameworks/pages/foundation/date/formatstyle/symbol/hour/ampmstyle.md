> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/hour/ampmstyle](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/hour/ampmstyle)

# Date.FormatStyle.Symbol.Hour.AMPMStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The format style of the string representation of the day period, before or after noon, in a date.

## Declaration

```swift
struct AMPMStyle
```

<a id="overview"></a>

## Overview

Possible values for this style are: [omitted](ampmstyle/omitted.md), [narrow](ampmstyle/narrow.md), [abbreviated](ampmstyle/abbreviated.md), and [wide](ampmstyle/wide.md).

## Topics

### Creating AMPM Styles

- [abbreviated](ampmstyle/abbreviated.md): A type that specifies the abbreviated day period for when the locale prefers using day period with hour.
- [narrow](ampmstyle/narrow.md): A type that specifies the narrow day period if the locale prefers using day period with hour.
- [omitted](ampmstyle/omitted.md): A type that hides the day period marker.
- [wide](ampmstyle/wide.md): A type that represents the wide day period if the locale prefers using day period with hour.

### Comparing AMPM Styles

- [==(\_:\_:)](../../../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
