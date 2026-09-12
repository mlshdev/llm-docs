> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/timestyle](https://developer.apple.com/documentation/foundation/date/formatstyle/timestyle)

# Date.FormatStyle.TimeStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Type that defines time styles varied in length or components included.

## Declaration

```swift
struct TimeStyle
```

<a id="overview"></a>

## Overview

The exact format depends on the locale. Possible time styles include [omitted](timestyle/omitted.md), [shortened](timestyle/shortened.md), [standard](timestyle/standard.md), and [complete](timestyle/complete.md).

The following code sample shows a variety of time style format results using the `en_US` locale.

```swift
let meetingDate = Date()
meetingDate.formatted(date: .numeric, time: .omitted)
// 10/17/2020
 
meetingDate.formatted(date: .numeric, time: .shortened)
// 10/17/2020, 9:54 PM
 
meetingDate.formatted(date: .numeric, time: .standard)
// 10/17/2020, 9:54:29 PM
 
meetingDate.formatted(date: .numeric, time: .complete)
// 10/17/2020, 9:54:29 PM CDT

meetingDate.formatted()
// 10/17/2020, 9:54 PM

```

The default time style is [shortened](timestyle/shortened.md).

## Topics

### Modifying a Time Style

- [complete](timestyle/complete.md): A time style with all components represented.
- [omitted](timestyle/omitted.md): A time style with no time-related components represented.
- [shortened](timestyle/shortened.md): A shortened time style with only the hour, minute, and day period components represented.
- [standard](timestyle/standard.md): A time style with all components except the time zone represented.

### Comparing Time Styles

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

### Specifying the Time Format

- [hour(\_:)](hour%28__%29.md): Modifies the date format style to use the specified hour format style.
- [minute(\_:)](minute%28__%29.md): Modifies the date format style to use the specified minute format style.
- [second(\_:)](second%28__%29.md): Modifies the date format style to use the specified second format style.
- [secondFraction(\_:)](secondfraction%28__%29.md): Modifies the date format style to use the specified second fraction format style.
- [timeZone(\_:)](timezone%28__%29.md): Modifies the date format style to use the specified time zone format style.
