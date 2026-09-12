> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/unitsstyle-swift.struct](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/unitsstyle-swift.struct)

# Date.RelativeFormatStyle.UnitsStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents the style to use when formatting the units of relative dates.

## Declaration

```swift
struct UnitsStyle
```

<a id="overview"></a>

## Overview

Cases include [wide](unitsstyle-swift.struct/wide.md), [narrow](unitsstyle-swift.struct/narrow.md), [abbreviated](unitsstyle-swift.struct/abbreviated.md) and [spellOut](unitsstyle-swift.struct/spellout.md).

## Topics

### Modifying a Relative Date Format Units Style

- [abbreviated](unitsstyle-swift.struct/abbreviated.md): A style that uses abbreviated units, such as “2 mo. ago”.
- [narrow](unitsstyle-swift.struct/narrow.md): A style that uses the shortest units, such as “2 mo. ago”.
- [spellOut](unitsstyle-swift.struct/spellout.md): A style that spells out units, such as “two months ago”.
- [wide](unitsstyle-swift.struct/wide.md): A style that uses full representation of units, such as “2 months ago”.

### Comparing Relative Date Format Units Styles

- [==(\_:\_:)](../==%28____%29.md): Returns true if the two `Date` values represent the same point in time.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [Date.RelativeFormatStyle.Presentation](presentation-swift.struct.md): A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.
