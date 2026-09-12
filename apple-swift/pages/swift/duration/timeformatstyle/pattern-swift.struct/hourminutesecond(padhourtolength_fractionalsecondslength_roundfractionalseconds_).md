> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/timeformatstyle/pattern-swift.struct/hourminutesecond(padhourtolength:fractionalsecondslength:roundfractionalseconds:)](https://developer.apple.com/documentation/swift/duration/timeformatstyle/pattern-swift.struct/hourminutesecond(padhourtolength:fractionalsecondslength:roundfractionalseconds:))

# hourMinuteSecond(padHourToLength:fractionalSecondsLength:roundFractionalSeconds:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a pattern to format a duration with hours, minutes, and seconds, with the given unit configurations.

## Declaration

```swift
static func hourMinuteSecond(padHourToLength: Int, fractionalSecondsLength: Int = 0, roundFractionalSeconds: FloatingPointRoundingRule = .toNearestOrEven) -> Duration.TimeFormatStyle.Pattern
```

## Parameters

- `padHourToLength`: Padding for the hour field. For example, setting this value to `2` formats one hour as `01:00` in `en_US` locale.
- `fractionalSecondsLength`: The length of the fractional seconds. For example, setting this value to `2` formats one hour as `1:00:00.00` in the `en_US` locale.
- `roundFractionalSeconds`: The rule to use for rounding the seconds value, given the remaining fractional seconds value. Use one of the cases from the [FloatingPointRoundingRule](../../../floatingpointroundingrule.md) enumeration.

<a id="return-value"></a>

## Return Value

A [Duration.TimeFormatStyle.Pattern](../pattern-swift.struct.md) that formats a duration with hours, minutes, and seconds, using the given unit configurations.

## See Also

### Creating a pattern

- [hourMinute(padHourToLength:roundSeconds:)](hourminute%28padhourtolength_roundseconds_%29.md): Returns a pattern to format a duration with hours and minutes only, with the given unit configurations.
- [minuteSecond(padMinuteToLength:fractionalSecondsLength:roundFractionalSeconds:)](minutesecond%28padminutetolength_fractionalsecondslength_roundfractionalseconds_%29.md): Returns a pattern to format a duration with minutes and seconds only, with the given unit configurations.
