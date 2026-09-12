> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/presentation-swift.struct](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/presentation-swift.struct)

# Date.RelativeFormatStyle.Presentation

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents the style to use when formatting relative dates, such as “1 week ago” or “last week”.

## Declaration

```swift
struct Presentation
```

<a id="overview"></a>

## Overview

Cases include `named` and `numeric`.

## Topics

### Modifying Relative Date Style Presentations

- [named](presentation-swift.struct/named.md): A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.
- [numeric](presentation-swift.struct/numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.

### Comparing Relative Date Style Presentations

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

- [Date.RelativeFormatStyle.UnitsStyle](unitsstyle-swift.struct.md): A type that represents the style to use when formatting the units of relative dates.
