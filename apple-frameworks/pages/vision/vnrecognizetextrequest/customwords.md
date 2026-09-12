> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/customwords](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/customwords)

# customWords (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An array of strings to supplement the recognized languages at the word-recognition stage.

## Declaration

```swift
var customWords: [String] { get set }
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

Custom words take precedence over the standard lexicon. The request ignores this value if [usesLanguageCorrection](useslanguagecorrection.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguages(for:revision:)](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

# customWords (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An array of strings to supplement the recognized languages at the word-recognition stage.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSString *> * customWords;
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

Custom words take precedence over the standard lexicon. The request ignores this value if [usesLanguageCorrection](useslanguagecorrection.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.
