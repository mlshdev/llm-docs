> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/options/documentlanguagecode](https://developer.apple.com/documentation/datadetection/datadetector/options/documentlanguagecode)

# documentLanguageCode

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional value that represents the language code of a specific locale.

## Declaration

```swift
var documentLanguageCode: Locale.LanguageCode?
```

<a id="Discussion"></a>

## Discussion

For more information on locales, see [Locale.LanguageCode](../../../foundation/locale/languagecode-swift.struct.md).

## See Also

### Hints you can provide to add more context for the matching process

- [documentDate](documentdate.md): The creation date of the scanned string.
- [documentRegion](documentregion.md): A locale region that’s relevant to the scanned string.
- [documentTimeZone](documenttimezone.md): A date that represents the date of the scanned string.
