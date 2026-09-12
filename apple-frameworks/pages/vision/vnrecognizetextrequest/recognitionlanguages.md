> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/recognitionlanguages](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/recognitionlanguages)

# recognitionLanguages (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An array of languages to detect, in priority order.

## Declaration

```swift
var recognitionLanguages: [String] { get set }
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

The order of the languages in the array defines the order in which languages are used during language processing and text recognition.

Specify the languages as ISO language codes.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguages(for:revision:)](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

# recognitionLanguages (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An array of languages to detect, in priority order.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSString *> * recognitionLanguages;
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

The order of the languages in the array defines the order in which languages are used during language processing and text recognition.

Specify the languages as ISO language codes.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.
