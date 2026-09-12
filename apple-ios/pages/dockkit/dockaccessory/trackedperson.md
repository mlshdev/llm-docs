> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackedperson](https://developer.apple.com/documentation/dockkit/dockaccessory/trackedperson)

# DockAccessory.TrackedPerson

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The state of a tracked person in the active tracking session.

## Declaration

```swift
struct TrackedPerson
```

## Topics

### Instance Properties

- [identifier](trackedperson/identifier.md): A unique identifier representing the tracked person. This identifier persists as long as the dock tracks the person. The value is random and doesn’t persist across sessions.
- [lookingAtCameraConfidence](trackedperson/lookingatcameraconfidence.md): The confidence of the person looking directly at the camera. The range is from `0.0` to `1.0`, or `nil` if the framework hasn’t calculated the score.
- [rect](trackedperson/rect.md): The bounding box rectangle of the tracked person’s face in the frame.
- [saliencyRank](trackedperson/saliencyrank.md): The saliency rank of the person the dock is tracking. A lower rank indicates higher importance of the person. This property is `nil` if the saliency ranking isn’t set or the person isn’t salient.
- [speakingConfidence](trackedperson/speakingconfidence.md): The confidence score of the person speaking at the moment of tracking. The range is from `0.0` to `1.0`, or `nil` if the framework hasn’t calculated the score.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
