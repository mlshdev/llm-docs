> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/iso8601datecomponents(timezone:dateseparator:)](https://developer.apple.com/documentation/swift/regexcomponent/iso8601datecomponents(timezone:dateseparator:))

# iso8601DateComponents(timeZone:dateSeparator:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a regex component to match an ISO 8601 date string, such as “2015-11-14”, and capture the string as a `DateComponents`. The captured `DateComponents` would be at midnight in the specified `timeZone`.

## Declaration

```swift
static func iso8601DateComponents(timeZone: TimeZone, dateSeparator: Date.ISO8601FormatStyle.DateSeparator = .dash) -> Self
```

## Parameters

- `timeZone`: The time zone to create the captured `Date` with.
- `dateSeparator`: The separator between date components.

<a id="return-value"></a>

## Return Value

A `RegexComponent` to match an ISO 8601 date string, not any time zone that may be in the string.
