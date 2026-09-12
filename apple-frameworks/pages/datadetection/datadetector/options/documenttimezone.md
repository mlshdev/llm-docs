> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/options/documenttimezone](https://developer.apple.com/documentation/datadetection/datadetector/options/documenttimezone)

# documentTimeZone

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A date that represents the date of the scanned string.

## Declaration

```swift
var documentTimeZone: TimeZone?
```

<a id="Discussion"></a>

## Discussion

This is the date that’s relevant to the subject of the string the system in scanning, such as a text message reception date. The default is “now.”

## See Also

### Hints you can provide to add more context for the matching process

- [documentDate](documentdate.md): The creation date of the scanned string.
- [documentLanguageCode](documentlanguagecode.md): An optional value that represents the language code of a specific locale.
- [documentRegion](documentregion.md): A locale region that’s relevant to the scanned string.
