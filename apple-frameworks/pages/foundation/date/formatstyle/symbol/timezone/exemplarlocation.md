> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/timezone/exemplarlocation](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/timezone/exemplarlocation)

# exemplarLocation

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The exemplar city for a timezone.

## Declaration

```swift
static var exemplarLocation: Date.FormatStyle.Symbol.TimeZone { get }
```

<a id="Discussion"></a>

## Discussion

If the exemplar city is unavailable, the system provides the localized exemplar city name for the special zone or `unknown`. For example, `Los Angeles`.

## See Also

### Modifying a Time Zone

- [specificName(\_:)](specificname%28__%29.md): Returns the specific, non-location representation of a timezone.
- [genericName(\_:)](genericname%28__%29.md): Returns the generic, non-location representation of a timezone.
- [iso8601(\_:)](iso8601%28__%29.md): Creates the ISO 8601 representation of the timezone with hours, minutes, and optional seconds.
- [localizedGMT(\_:)](localizedgmt%28__%29.md): Returns the localized GMT format representation of a timezone.
- [identifier(\_:)](identifier%28__%29.md): Returns the timezone identifier.
- [genericLocation](genericlocation.md): The generic location representation of a timezone.
