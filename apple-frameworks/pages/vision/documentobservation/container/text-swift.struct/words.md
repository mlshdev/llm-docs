> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/text-swift.struct/words](https://developer.apple.com/documentation/vision/documentobservation/container/text-swift.struct/words)

# words

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An instance property that returns individual words in a text container.

## Declaration

```swift
var words: [RecognizedTextObservation]? { get }
```

<a id="discussion"></a>

## Discussion

Chinese, Japanese, Korean, and Thai don’t recognize individual words.

## See Also

### Accessing the text

- [detectedData](detecteddata.md): Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.
- [lines](lines.md): The text grouped by line.
- [transcript](transcript.md): The complete text as a string.
