> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/documentobservation/container/text-swift.struct/detecteddata

# detectedData

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Detected content in the document matched to a specific type of data, such as emails, phone numbers, addresses, and so on.

## Declaration

```swift
var detectedData: [DocumentObservation.Container.DataDetectorMatch] { get }
```

<a id="discussion"></a>

## Discussion

This is a computed property that may be computationally expensive for large text regions.

## See Also

### Accessing the text

- [lines](lines.md): The text grouped by line.
- [transcript](transcript.md): The complete text as a string.
- [words](words.md): An instance property that returns individual words in a text container.
