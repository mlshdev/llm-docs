> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/languagecode](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/languagecode)

# languageCode

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The language code of the track.

## Declaration

```swift
var languageCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The language tag of the track.
