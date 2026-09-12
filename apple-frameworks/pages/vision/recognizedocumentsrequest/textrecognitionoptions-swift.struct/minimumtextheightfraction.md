> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct/minimumtextheightfraction](https://developer.apple.com/documentation/vision/recognizedocumentsrequest/textrecognitionoptions-swift.struct/minimumtextheightfraction)

# minimumTextHeightFraction

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The minimum height, relative to the image height, of the text to recognize.

## Declaration

```swift
var minimumTextHeightFraction: Float
```

<a id="discussion"></a>

## Discussion

Specify a floating-point number relative to the image height. For example, to limit recognition to text that’s half of the image height, use `0.5`. Increasing the size reduces memory consumption and expedites recognition with the tradeoff of ignoring text smaller than the minimum height. The default value is `1/32`, or `0.03125`.

## See Also

### Inspecting the recognized text

- [automaticallyDetectLanguage](automaticallydetectlanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [customWords](customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [maximumCandidateCount](maximumcandidatecount.md): The maximum number of text candidates to return.
- [recognitionLanguages](recognitionlanguages.md): An array of languages to detect, in priority order.
- [useLanguageCorrection](uselanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
