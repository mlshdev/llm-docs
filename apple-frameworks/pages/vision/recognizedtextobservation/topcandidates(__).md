> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtextobservation/topcandidates(_:)](https://developer.apple.com/documentation/vision/recognizedtextobservation/topcandidates(_:))

# topCandidates(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Requests the top candidates for a recognized text string.

## Declaration

```swift
func topCandidates(_ maxCandidateCount: Int) -> [RecognizedText]
```

## Parameters

- `maxCandidateCount`: The maximum number of candidates to return, up to `10`.

## See Also

### Getting the recognized text

- [RecognizedText](../recognizedtext.md): Text recognized in an image through a text recognition request.
