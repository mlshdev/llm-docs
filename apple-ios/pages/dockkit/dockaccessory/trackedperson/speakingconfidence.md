> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackedperson/speakingconfidence](https://developer.apple.com/documentation/dockkit/dockaccessory/trackedperson/speakingconfidence)

# speakingConfidence

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The confidence score of the person speaking at the moment of tracking. The range is from `0.0` to `1.0`, or `nil` if the framework hasn’t calculated the score.

## Declaration

```swift
var speakingConfidence: Double?
```
