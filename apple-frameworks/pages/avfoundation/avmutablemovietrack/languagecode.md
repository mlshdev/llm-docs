> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/languagecode](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/languagecode)

# languageCode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The language code of the track.

## Declaration

```swift
var languageCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The language tag of the track.

# languageCode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The language code of the track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * languageCode;
```

<a id="Discussion"></a>

## Discussion

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The language tag of the track.
