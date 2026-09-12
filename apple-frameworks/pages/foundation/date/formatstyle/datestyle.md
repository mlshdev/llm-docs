> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/datestyle](https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle)

# Date.FormatStyle.DateStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Type that defines date styles varied in length or components included.

## Declaration

```swift
struct DateStyle
```

<a id="overview"></a>

## Overview

The exact format depends on the locale. Possible values of date style include [omitted](datestyle/omitted.md), [numeric](datestyle/numeric.md), [abbreviated](datestyle/abbreviated.md), [long](datestyle/long.md), and [complete](datestyle/complete.md).

The following code sample shows a variety of date style format results using the `en_US` locale.

```swift
let meetingDate = Date()
meetingDate.formatted(date: .omitted, time: .standard) 
// 9:42:14 AM

meetingDate.formatted(date: .numeric, time: .omitted) 
// 10/17/2020

meetingDate.formatted(date: .abbreviated, time: .omitted)
// Oct 17, 2020

meetingDate.formatted(date: .long, time: .omitted) 
// October 17, 2020

meetingDate.formatted(date: .complete, time: .omitted) 
// Saturday, October 17, 2020

meetingDate.formatted()
// 10/17/2020, 9:42 AM
```

The default date style is `numeric`.

## Topics

### Modifying a Date Style

- [abbreviated](datestyle/abbreviated.md): A date style with some components abbreviated for space-constrained applications.
- [complete](datestyle/complete.md): A date style with all components represented.
- [long](datestyle/long.md): A lengthened date style with the full month, day of month, and year components represented.
- [numeric](datestyle/numeric.md): A date style with the month, day of month, and year components represented as numeric values.
- [omitted](datestyle/omitted.md): A date style with no date-related components represented.

### Comparing Date Styles

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

### Specifying the Date Format

- [day(\_:)](day%28__%29.md): Modifies the date format style to use the specified day format style.
- [dayOfYear(\_:)](dayofyear%28__%29.md): Modifies the date format style to use the specified day of the year format style.
- [era(\_:)](era%28__%29.md): Modifies the date format style to use the specified era format style.
- [month(\_:)](month%28__%29.md): Modifies the date format style to use the specified month format style.
- [quarter(\_:)](quarter%28__%29.md): Modifies the date format style to use the specified quarter format style.
- [week(\_:)](week%28__%29.md): Modifies the date format style to use the specified week format style.
- [weekday(\_:)](weekday%28__%29.md): Modifies the date format style to use the specified weekday format style.
- [year(\_:)](year%28__%29.md): Modifies the date format style to use the specified year format style.
