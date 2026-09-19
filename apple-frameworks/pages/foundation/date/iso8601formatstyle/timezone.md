> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/timezone

# timeZone

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time zone used to create and parse date representations.

## Declaration

```swift
var timeZone: TimeZone { get set }
```

<a id="Discussion"></a>

## Discussion

The default time zone is Greenwich Mean Time (GMT).

## See Also

### Modifying an ISO 8601 Format Style

- [dateSeparator](dateseparator-swift.property.md): The character used to separate the components of a date.
- [dateTimeSeparator](datetimeseparator-swift.property.md): The character used to separate the date and time components of an ISO 8601 string representation of a date.
- [dateTimeSeparator(\_:)](datetimeseparator%28__%29.md): Sets the character that specifies the date and time components.
