> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizetextrequest/useslanguagecorrection](https://developer.apple.com/documentation/vision/recognizetextrequest/useslanguagecorrection)

# usesLanguageCorrection

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the request applies language correction during the recognition process.

## Declaration

```swift
var usesLanguageCorrection: Bool
```

<a id="Discussion"></a>

## Discussion

When this value is `true`, Vision applies language correction during the recognition process. Disabling this property returns the raw recognition results, which provides performance benefits but less accurate results.

## See Also

### Configuring a request

- [automaticallyDetectsLanguage](automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [supportedRecognitionLanguages](supportedrecognitionlanguages.md): The identifiers of the languages that the request supports.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [minimumTextHeightFraction](minimumtextheightfraction.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [recognitionLevel](recognitionlevel-swift.property.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [RecognizeTextRequest.RecognitionLevel](recognitionlevel-swift.enum.md): Constants that identify the performance and accuracy of the text recognition.
