> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/timeformatstyle/pattern-swift.struct](https://developer.apple.com/documentation/swift/duration/timeformatstyle/pattern-swift.struct)

# Duration.TimeFormatStyle.Pattern

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The units — including hours, minutes, or seconds — and the configuration of those units, used to format a duration.

## Declaration

```swift
struct Pattern
```

<a id="overview"></a>

## Overview

Use a pattern when initializing a [Duration.TimeFormatStyle](../timeformatstyle.md), or creating a time format style from the convenience method `Swift/Duration/TimeFormatStyle/time(pattern:)`.

Use the type properties [hourMinute](pattern-swift.struct/hourminute.md), [hourMinuteSecond](pattern-swift.struct/hourminutesecond.md), or [minuteSecond](pattern-swift.struct/minutesecond.md) to create patterns with default behavior. To customize how a pattern handles zero-padding and fractional parts, use one of the type methods that take these customizations as parameters.

## Topics

### Creating a pattern

- [hourMinute(padHourToLength:roundSeconds:)](pattern-swift.struct/hourminute%28padhourtolength_roundseconds_%29.md): Returns a pattern to format a duration with hours and minutes only, with the given unit configurations.
- [hourMinuteSecond(padHourToLength:fractionalSecondsLength:roundFractionalSeconds:)](pattern-swift.struct/hourminutesecond%28padhourtolength_fractionalsecondslength_roundfractionalseconds_%29.md): Returns a pattern to format a duration with hours, minutes, and seconds, with the given unit configurations.
- [minuteSecond(padMinuteToLength:fractionalSecondsLength:roundFractionalSeconds:)](pattern-swift.struct/minutesecond%28padminutetolength_fractionalsecondslength_roundfractionalseconds_%29.md): Returns a pattern to format a duration with minutes and seconds only, with the given unit configurations.

### Using common patterns

- [hourMinute](pattern-swift.struct/hourminute.md): A pattern to format a duration with hours and minutes only, with default padding and rounding behavior.
- [hourMinuteSecond](pattern-swift.struct/hourminutesecond.md): A pattern to format a duration with hours, minutes, and seconds, with default padding and rounding behavior.
- [minuteSecond](pattern-swift.struct/minutesecond.md): A pattern to format a duration with minutes and seconds only, with default padding and rounding behavior.

## Relationships

### Conforms To

- [Decodable](../../decodable.md)
- [Encodable](../../encodable.md)
- [Equatable](../../equatable.md)
- [Hashable](../../hashable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Creating a time format style

- [init(pattern:locale:)](init%28pattern_locale_%29.md): Creates a time format style using the provided pattern and optional locale.
