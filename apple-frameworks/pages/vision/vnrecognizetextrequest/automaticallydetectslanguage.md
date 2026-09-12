> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/automaticallydetectslanguage](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/automaticallydetectslanguage)

# automaticallyDetectsLanguage (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.

## Declaration

```swift
var automaticallyDetectsLanguage: Bool { get set }
```

## See Also

### Specifying the Language

- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguages(for:revision:)](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

# automaticallyDetectsLanguage (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL automaticallyDetectsLanguage;
```

## See Also

### Specifying the Language

- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.
