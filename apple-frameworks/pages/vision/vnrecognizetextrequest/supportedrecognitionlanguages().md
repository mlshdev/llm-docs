> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/supportedrecognitionlanguages()](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/supportedrecognitionlanguages())

# supportedRecognitionLanguages() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the identifiers of the languages that the request supports.

## Declaration

```swift
func supportedRecognitionLanguages() throws -> [String]
```

<a id="return-value"></a>

## Return Value

The language identifiers.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages(for:revision:)](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

# supportedRecognitionLanguagesAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the identifiers of the languages that the request supports.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedRecognitionLanguagesAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The language identifiers. On failure, this method returns `nil`.

## See Also

### Specifying the Language

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.
