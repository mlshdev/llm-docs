> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/humanhandposeextractor](https://developer.apple.com/documentation/createmlcomponents/humanhandposeextractor)

# HumanHandPoseExtractor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The human hand pose image feature extractor.

## Declaration

```swift
struct HumanHandPoseExtractor
```

## Topics

### Creating the extractor

- [init()](humanhandposeextractor/init%28%29.md): Creates a human hand pose extractor transformer

### Extracting the hand pose

- [applied(to:eventHandler:)](humanhandposeextractor/applied%28to_eventhandler_%29.md): Extracts human hand poses from a pixel buffer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Pose components

- [Counting human body action repetitions in a live video feed](counting-human-body-action-repetitions-in-a-live-video-feed.md): Use Create ML Components to analyze a series of video frames and count a person’s repetitive or periodic body movements.
- [Pose](pose.md): A pose that contains joint keypoints from a person, a hand, or a combination.
- [JointKey](jointkey.md): A key that uniquely identifies a joint.
- [JointPoint](jointpoint.md): A joint in a pose that contains a location and scoring information.
- [PoseSelector](poseselector.md): A transformer that selects one pose from an array of poses.
- [PoseSelectionStrategy](poseselectionstrategy.md): Pose selection strategy.
- [JointsSelector](jointsselector.md): Joints selector from a pose.
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
