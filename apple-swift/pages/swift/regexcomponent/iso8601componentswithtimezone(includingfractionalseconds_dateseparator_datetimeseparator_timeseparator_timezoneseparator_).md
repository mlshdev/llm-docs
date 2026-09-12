> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/iso8601componentswithtimezone(includingfractionalseconds:dateseparator:datetimeseparator:timeseparator:timezoneseparator:)](https://developer.apple.com/documentation/swift/regexcomponent/iso8601componentswithtimezone(includingfractionalseconds:dateseparator:datetimeseparator:timeseparator:timezoneseparator:))

# iso8601ComponentsWithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a regex component to match an ISO 8601 date and time string, including time zone, and capture the string as a `DateComponents` using the time zone as specified in the string.

## Declaration

```swift
static func iso8601ComponentsWithTimeZone(includingFractionalSeconds: Bool = false, dateSeparator: Date.ISO8601FormatStyle.DateSeparator = .dash, dateTimeSeparator: Date.ISO8601FormatStyle.DateTimeSeparator = .standard, timeSeparator: Date.ISO8601FormatStyle.TimeSeparator = .colon, timeZoneSeparator: Date.ISO8601FormatStyle.TimeZoneSeparator = .omitted) -> Self
```

## Parameters

- `includingFractionalSeconds`: Specifies if the string contains fractional seconds.
- `dateSeparator`: The separator between date components.
- `dateTimeSeparator`: The separator between date and time parts.
- `timeSeparator`: The separator between time components.
- `timeZoneSeparator`: The separator between time parts in the time zone.

<a id="return-value"></a>

## Return Value

A `RegexComponent` to match an ISO 8601 string, including time zone.
