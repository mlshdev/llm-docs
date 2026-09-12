> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/extendedlanguagetag](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/extendedlanguagetag)

# extendedLanguageTag (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The language tag of the track.

## Declaration

```swift
var extendedLanguageTag: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value is a [BCP-47](https://tools.ietf.org/html/bcp47) language tag, or `nil` if the track doesn’t specify a language tag.

## See Also

### Accessing language support

- [languageCode](languagecode.md): The language code of the track.

# extendedLanguageTag (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The language tag of the track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * extendedLanguageTag;
```

<a id="Discussion"></a>

## Discussion

The value is a [BCP-47](https://tools.ietf.org/html/bcp47) language tag, or `nil` if the track doesn’t specify a language tag.

## See Also

### Accessing language support

- [languageCode](languagecode.md): The language code of the track.
