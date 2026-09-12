> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/languagecode](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/languagecode)

# languageCode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The language code of the input’s track.

## Declaration

```swift
var languageCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify an ISO 639-2/T language code value, or `nil` to prevent the writer from writing a language code.

## See Also

### Configuring language support

- [extendedLanguageTag](extendedlanguagetag.md): The extended language for the input’s track.

# languageCode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The language code of the input’s track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * languageCode;
```

<a id="Discussion"></a>

## Discussion

Specify an ISO 639-2/T language code value, or `nil` to prevent the writer from writing a language code.

## See Also

### Configuring language support

- [extendedLanguageTag](extendedlanguagetag.md): The extended language for the input’s track.
