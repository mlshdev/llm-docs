> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/extendedlanguagetag](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/extendedlanguagetag)

# extendedLanguageTag (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The extended language for the input’s track.

## Declaration

```swift
var extendedLanguageTag: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Extended language tags are normally set only when an ISO 639-2/T language code alone is ambiguous. For example, you may use an extended language tag to distinguish media by the regional dialect in use or the writing system employed.

Specify the value as an RFC 4646 language tag, or `nil` to prevent the writer from writing an extended language tag.

## See Also

### Configuring language support

- [languageCode](languagecode.md): The language code of the input’s track.

# extendedLanguageTag (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The extended language for the input’s track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * extendedLanguageTag;
```

<a id="Discussion"></a>

## Discussion

Extended language tags are normally set only when an ISO 639-2/T language code alone is ambiguous. For example, you may use an extended language tag to distinguish media by the regional dialect in use or the writing system employed.

Specify the value as an RFC 4646 language tag, or `nil` to prevent the writer from writing an extended language tag.

## See Also

### Configuring language support

- [languageCode](languagecode.md): The language code of the input’s track.
