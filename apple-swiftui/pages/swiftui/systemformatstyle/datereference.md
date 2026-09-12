> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/systemformatstyle/datereference](https://developer.apple.com/documentation/swiftui/systemformatstyle/datereference)

# SystemFormatStyle.DateReference

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A format style that refers to a date using the most natural phrasing based on how much time separates it from the current time.

## Declaration

```swift
struct DateReference
```

<a id="overview"></a>

## Overview

`DateReference` adapts its output based on how far the referenced date is from the input (which is typically the current time). Close dates use a relative representation, while distant dates switch to an absolute one.

```swift
// Displays "in 5 minutes", "tomorrow", "June 2019", etc.
Text(.currentDate, format: .reference(to: eventDate))
```

<a id="Relative-vs-absolute-representation"></a>

### Relative vs. absolute representation

The style uses a relative format (“in 2 hours”, “3 days ago”) when the referenced date is within the threshold distance. Beyond that threshold, it switches to an absolute format (“Monday, June 3”, “June 2019”).

The `thresholdField` parameter controls where this switch happens. With the default value of `.day`, the style uses the relative format as long as the date falls within approximately one month of the reference date:

| Distance | Style | Output |
| --- | --- | --- |
| \< 1 min | Relative | `now` |
| 5 min | Relative | `in 5 minutes` |
| 3 hours | Relative | `in 3 hours` |
| 1 day | Relative | `tomorrow` |
| 3 days | Relative | `3 days ago` |
| 27 days | Relative | `27 days ago` |
| \> 1 month | Absolute | `Monday, June 3` |
| \> 1 year | Absolute | `June 2019` |

<a id="Controlling-the-absolute-representation"></a>

### Controlling the absolute representation

The `maxFieldCount` parameter determines how many date components appear in the absolute representation:

```swift
// maxFieldCount: 2 (default)
// Output for a date in a different year: "June 2019"

// maxFieldCount: 3
.reference(to: date, maxFieldCount: 3)
// Output: "June 3, 2019"
```

The style automatically removes higher-order fields that match the reference date. For a date within the same year, the year field is dropped, leaving room for day-level detail:

```swift
// Same year as reference date, maxFieldCount: 2
// Output: "Monday, June 3" (instead of "June 2019")
```

## Topics

### Initializers

- [init(to:allowedFields:maxFieldCount:thresholdField:)](datereference/init%28to_allowedfields_maxfieldcount_thresholdfield_%29.md): Creates a format style that refers to a comparison date using natural language.

### Instance Methods

- [calendar(\_:)](datereference/calendar%28__%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DiscreteFormatStyle](https://developer.apple.com/documentation/foundation/discreteformatstyle)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](https://developer.apple.com/documentation/foundation/formatstyle)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
