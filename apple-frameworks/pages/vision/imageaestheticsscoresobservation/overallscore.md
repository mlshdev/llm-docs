> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imageaestheticsscoresobservation/overallscore](https://developer.apple.com/documentation/vision/imageaestheticsscoresobservation/overallscore)

# overallScore

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A score which incorporates aesthetic score, failure score, and utility labels.

## Declaration

```swift
let overallScore: Float
```

<a id="discussion"></a>

## Discussion

This returns a value within the range of `-1` and `1`, where `-1` is least desirable and `1` is most desirable.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [isUtility](isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.
