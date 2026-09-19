> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/extendedlanguagetag

# extendedLanguageTag

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The language tag of the track.

## Declaration

```swift
var extendedLanguageTag: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [BCP-47](https://tools.ietf.org/html/bcp47) language tag, or `nil` if the track doesn’t specify a language tag.

## See Also

### Accessing language support

- [languageCode](languagecode.md): The language code of the track.
