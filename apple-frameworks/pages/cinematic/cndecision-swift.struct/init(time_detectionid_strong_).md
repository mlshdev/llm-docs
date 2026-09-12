> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndecision-swift.struct/init(time:detectionid:strong:)](https://developer.apple.com/documentation/cinematic/cndecision-swift.struct/init(time:detectionid:strong:))

# init(time:detectionID:strong:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Makes a decision to focus on the best among those detections with the same detection group ID.

## Declaration

```swift
init(time: CMTime, detectionID: CNDetectionID, strong isStrong: Bool)
```

## Parameters

- `time`: The first presentation time which the subject should be in focus.
- `detectionID`: A unique number representing the detection to focus on if this is a group decision.
- `isStrong`: A flag representing whether this is a strong decision or not. A strong decision keeps focus for as long as possible.

<a id="Discussion"></a>

## Discussion

A strong decision keeps focus for as long as possible on the detected subject.

## See Also

### Initializers

- [init(time:detectionGroupID:strong:)](init%28time_detectiongroupid_strong_%29.md): Makes a decision to focus on the detection with the given unique detection.
