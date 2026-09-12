> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/parse(_:)](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/parse(_:))

# parse(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Parses a string into a date.

## Declaration

```swift
func parse(_ value: String) throws -> Date
```

## Parameters

- `value`: The string to parse.

<a id="return-value"></a>

## Return Value

An instance of `Date` parsed from the input string.

<a id="Discussion"></a>

## Discussion

This method attempts to parse a provided string into an instance of date using the source date format style. The function throws an error if it can’t parse the input string into a date instance.

The date format style guides parsing the date instance from an input string, as the following example illustrates.

```swift
let birthdayFormatStyle = Date.ISO8601FormatStyle()    
    .dateSeparator(.dash)
    .timeSeparator(.colon)
    .year()
    .month()
    .day()
    .time(includingFractionalSeconds: false)

// Create a date instance from a string representation of a date.
let yourBirthdayString = "2021-02-17T14:33:25"
let yourBirthday = try? birthdayFormatStyle.parse(yourBirthdayString)
// Feb 17, 2021 at 8:33 AM
```

## See Also

### Parsing an ISO 8601 Format Style

- [parseStrategy](parsestrategy.md): The strategy used to parse a string into a date.
