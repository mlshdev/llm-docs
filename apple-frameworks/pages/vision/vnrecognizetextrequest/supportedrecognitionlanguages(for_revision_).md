> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/supportedrecognitionlanguages(for:revision:)](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/supportedrecognitionlanguages(for:revision:))

# supportedRecognitionLanguages(for:revision:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Requests a list of languages that the specified revision recognizes.

> Use [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md) instead.

## Declaration

```swift
class func supportedRecognitionLanguages(for recognitionLevel: VNRequestTextRecognitionLevel, revision requestRevision: Int) throws -> [String]
```

## Parameters

- `recognitionLevel`: The level of recognition to prioritize. Set this level to [VNRequestTextRecognitionLevel.fast](../vnrequesttextrecognitionlevel/fast.md)to prioritize speed over accuracy, and to [VNRequestTextRecognitionLevel.accurate](../vnrequesttextrecognitionlevel/accurate.md) to prioritize accuracy at the expense of speed.
- `requestRevision`: The revision of the text recognition algorithm for the Vision framework to use.

<a id="return-value"></a>

## Return Value

An array of supported languages, listed as ISO language codes.

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

A language supported in one recognition level may not be available in another recognition level.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages()](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.

# supportedRecognitionLanguagesForTextRecognitionLevel:revision:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Requests a list of languages that the specified revision recognizes.

> Use [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) supportedRecognitionLanguagesForTextRecognitionLevel:(VNRequestTextRecognitionLevel) recognitionLevel revision:(NSUInteger) requestRevision error:(NSError **) error;
```

## Parameters

- `recognitionLevel`: The level of recognition to prioritize. Set this level to [VNRequestTextRecognitionLevelFast](../vnrequesttextrecognitionlevel/fast.md)to prioritize speed over accuracy, and to [VNRequestTextRecognitionLevelAccurate](../vnrequesttextrecognitionlevel/accurate.md) to prioritize accuracy at the expense of speed.
- `requestRevision`: The revision of the text recognition algorithm for the Vision framework to use.
- `error`: An error that contains information about failed language support, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

An array of supported languages, listed as ISO language codes. On failure, this method returns `nil`.

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

A language supported in one recognition level may not be available in another recognition level.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesAndReturnError:](supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
