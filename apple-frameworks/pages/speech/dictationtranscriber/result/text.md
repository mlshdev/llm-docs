> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/result/text](https://developer.apple.com/documentation/speech/dictationtranscriber/result/text)

# text

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The most likely interpretation of the audio in this range.

## Declaration

```swift
var text: AttributedString { get }
```

<a id="discussion"></a>

## Discussion

An empty string indicates that the audio contains no recognizable speech and, for results in the volatile range, that previous results for this range are revoked.

This value is the first (most likely) element of [alternatives](alternatives.md).

## See Also

### Getting transcriptions

- [alternatives](alternatives.md): All the alternative interpretations of the audio in this range. The interpretations are in descending order of likelihood.
