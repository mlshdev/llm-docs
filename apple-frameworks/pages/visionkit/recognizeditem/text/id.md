> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/recognizeditem/text/id](https://developer.apple.com/documentation/visionkit/recognizeditem/text/id)

# id

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A unique identifier for the recognized item.

## Declaration

```swift
var id: UUID { get }
```

<a id="discussion"></a>

## Discussion

If the same item resides in more than one video frame, the `id` remains the same.
