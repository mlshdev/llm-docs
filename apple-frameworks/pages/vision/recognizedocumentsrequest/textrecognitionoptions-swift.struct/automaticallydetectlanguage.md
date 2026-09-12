> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct/automaticallydetectlanguage](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct/automaticallydetectlanguage)

# automaticallyDetectLanguage

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.

## Declaration

```swift
var automaticallyDetectLanguage: Bool
```

## See Also

### Inspecting the recognized text

- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [maximumCandidateCount](maximumcandidatecount.md): The maximum number of text candidates to return.
- [minimumTextHeightFraction](minimumtextheightfraction.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [useLanguageCorrection](uselanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
