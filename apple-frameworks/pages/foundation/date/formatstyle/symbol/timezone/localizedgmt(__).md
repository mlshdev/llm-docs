> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/timezone/localizedgmt(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/timezone/localizedgmt(_:))

# localizedGMT(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the localized GMT format representation of a timezone.

## Declaration

```swift
static func localizedGMT(_ width: Date.FormatStyle.Symbol.TimeZone.Width) -> Date.FormatStyle.Symbol.TimeZone
```

## Parameters

- `width`: Specifies the width of the string result.

<a id="return-value"></a>

## Return Value

A timezone format style appropriate for the locale and specified width.

<a id="Discussion"></a>

## Discussion

For example, `GMT-7` ([Date.FormatStyle.Symbol.TimeZone.Width.short](width/short.md)) or `GMT-07:00` ([Date.FormatStyle.Symbol.TimeZone.Width.long](width/long.md)).

## See Also

### Modifying a Time Zone

- [specificName(\_:)](specificname%28__%29.md): Returns the specific, non-location representation of a timezone.
- [genericName(\_:)](genericname%28__%29.md): Returns the generic, non-location representation of a timezone.
- [iso8601(\_:)](iso8601%28__%29.md): Creates the ISO 8601 representation of the timezone with hours, minutes, and optional seconds.
- [identifier(\_:)](identifier%28__%29.md): Returns the timezone identifier.
- [exemplarLocation](exemplarlocation.md): The exemplar city for a timezone.
- [genericLocation](genericlocation.md): The generic location representation of a timezone.
