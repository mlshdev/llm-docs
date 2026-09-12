> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/options/documentdate](https://developer.apple.com/documentation/datadetection/datadetector/options/documentdate)

# documentDate

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The creation date of the scanned string.

## Declaration

```swift
var documentDate: Date?
```

<a id="Discussion"></a>

## Discussion

Set `documentDate` to the creation date of the scanned string. For example, this property can represent the reception date of a text message. The default is now.

## See Also

### Hints you can provide to add more context for the matching process

- [documentLanguageCode](documentlanguagecode.md): An optional value that represents the language code of a specific locale.
- [documentRegion](documentregion.md): A locale region that’s relevant to the scanned string.
- [documentTimeZone](documenttimezone.md): A date that represents the date of the scanned string.
