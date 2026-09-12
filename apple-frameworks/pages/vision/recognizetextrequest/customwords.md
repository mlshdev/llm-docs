> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizetextrequest/customwords](https://developer.apple.com/documentation/vision/recognizetextrequest/customwords)

# customWords

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An array of strings to supplement the recognized languages at the word-recognition stage.

## Declaration

```swift
var customWords: [String]
```

<a id="Discussion"></a>

## Discussion

Custom words take precedence over the standard lexicon. The request ignores this value if [usesLanguageCorrection](useslanguagecorrection.md) is `false`.

## See Also

### Configuring a request

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [usesLanguageCorrection](useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
- [minimumTextHeightFraction](minimumtextheightfraction.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [recognitionLevel](recognitionlevel-swift.property.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [RecognizeTextRequest.RecognitionLevel](recognitionlevel-swift.enum.md): Constants that identify the performance and accuracy of the text recognition.
