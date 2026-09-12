> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/container/datadetectormatch/match](https://developer.apple.com/documentation/vision/documentobservation/container/datadetectormatch/match)

# match

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The details of the data detected.

## Declaration

```swift
var match: DataDetector.Match { get }
```

<a id="discussion"></a>

## Discussion

The extracted match includes the content type and the detected content. For example the type is `email` and the content is the email address.
