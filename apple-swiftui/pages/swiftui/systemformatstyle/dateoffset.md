> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/systemformatstyle/dateoffset](https://developer.apple.com/documentation/swiftui/systemformatstyle/dateoffset)

# SystemFormatStyle.DateOffset

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A format style that displays the time offset between a comparison date and an anchor date that you provide.

## Declaration

```swift
struct DateOffset
```

<a id="overview"></a>

## Overview

`DateOffset` formats the difference between the input date and the specified anchor into a human-readable string. It automatically chooses between a compact time representation (like `5:32`) and a units representation (like `2 days, 3 hours`) based on what values you set in `allowedFields`.

When you use this with [Text](../text.md), the value the style displays updates automatically as time progresses:

```swift
let startDate = Date.now

// Shows elapsed time since startDate.
Text(.currentDate, format: .offset(to: startDate))
// Output: "3 minutes, 42 seconds"
```

<a id="Controlling-which-units-appear"></a>

### Controlling which units appear

By default, the style may show year, month, day, hour, minute, and second fields. You can restrict this with `allowedFields`:

```swift
// Only show hours, minutes, and seconds in time format.
Text(.currentDate, format: .offset(
    to: startDate,
    allowedFields: [.hour, .minute, .second],
    maxFieldCount: 3))
// Output: "1:23:45"
```

When you limit the allowed fields to `[.minute, .second]` (with `maxFieldCount: 2`) or `[.hour, .minute, .second]` (with `maxFieldCount: 3`), the style uses a time-pattern format:

| Allowed fields | Max fields | Example output |
| --- | --- | --- |
| `[.minute, .second]` | 2 | `5:32` |
| `[.hour, .minute, .second]` | 3 | `1:05:32` |
| `[.hour, .minute]` | 2 | `1 hour, 5 minutes` |
| `[.year, .month, .day, ...]` | 2 | `2 days, 3 hours` |

<a id="Controlling-the-sign"></a>

### Controlling the sign

The `sign` parameter determines how the style indicates whether the offset is in the past or future:

```swift
// .automatic (default): sign only when date is before anchor
Text(.currentDate, format: .offset(to: anchor))
// 5 seconds after anchor: "5 seconds"
// 5 seconds before anchor: "−5 seconds"

// .never: no sign regardless of direction
Text(.currentDate, format: .offset(to: anchor, sign: .never))
// 5 seconds before anchor: "5 seconds"

// .always(includingZero: false): sign for both directions
Text(.currentDate, format:
    .offset(to: anchor, sign: .always(includingZero: false)))
// 5 seconds after anchor: "+5 seconds"
// 5 seconds before anchor: "−5 seconds"
// 0 seconds from anchor: "0 seconds"
```

<a id="Limiting-the-number-of-fields"></a>

### Limiting the number of fields

The `maxFieldCount` parameter controls how many units appear in the output. For an offset of 1 hour, 34 minutes, and 23 seconds from the anchor:

| `maxFieldCount` | Output |
| --- | --- |
| 2 (default) | `1 hour, 34 minutes` |
| 1 | `1 hour` |
| 3 | `1 hour, 34 minutes, 23 seconds` |

## Topics

### Initializers

- [init(to:allowedFields:maxFieldCount:sign:)](dateoffset/init%28to_allowedfields_maxfieldcount_sign_%29.md): Creates a format style that displays the offset between a comparison date and an anchor date that you provide.

### Instance Methods

- [calendar(\_:)](dateoffset/calendar%28__%29.md)

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
