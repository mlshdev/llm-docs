> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/useslanguagecorrection](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/useslanguagecorrection)

# usesLanguageCorrection (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the request applies language correction during the recognition process.

## Declaration

```swift
var usesLanguageCorrection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), Vision applies language correction during the recognition process. Disabling this property returns the raw recognition results, which provides performance benefits but less accurate results.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguages(for:revision:)](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

# usesLanguageCorrection (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the request applies language correction during the recognition process.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL usesLanguageCorrection;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), Vision applies language correction during the recognition process. Disabling this property returns the raw recognition results, which provides performance benefits but less accurate results.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.
