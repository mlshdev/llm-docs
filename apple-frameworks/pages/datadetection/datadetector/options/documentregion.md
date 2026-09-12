> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/options/documentregion](https://developer.apple.com/documentation/datadetection/datadetector/options/documentregion)

# documentRegion

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A locale region that’s relevant to the scanned string.

## Declaration

```swift
var documentRegion: Locale.Region?
```

<a id="Discussion"></a>

## Discussion

Set `documentRegion` to the region relevant to the scanned string, if any.

> **Important**

>  Only set this value if you know it with a high degree of confidence; otherwise, set to `nil`.

## See Also

### Hints you can provide to add more context for the matching process

- [documentDate](documentdate.md): The creation date of the scanned string.
- [documentLanguageCode](documentlanguagecode.md): An optional value that represents the language code of a specific locale.
- [documentTimeZone](documenttimezone.md): A date that represents the date of the scanned string.
