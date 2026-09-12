> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/poseselector](https://developer.apple.com/documentation/createmlcomponents/poseselector)

# PoseSelector

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A transformer that selects one pose from an array of poses.

## Declaration

```swift
struct PoseSelector
```

## Topics

### Creating a selector

- [init()](poseselector/init%28%29.md): Creates a pose selector.
- [init(strategy:)](poseselector/init%28strategy_%29.md): Creates a pose selector.
- [init(strategy:confidenceThreshold:)](poseselector/init%28strategy_confidencethreshold_%29.md): Creates a pose selector.

### Getting the properties

- [confidenceThreshold](poseselector/confidencethreshold.md): A threshold confidence between 0 to 1 for the joints to be considered valid in pose selection. The default value is 0.2.
- [strategy](poseselector/strategy.md): Pose selection strategy.

### Performing the transformation

- [applied(to:eventHandler:)](poseselector/applied%28to_eventhandler_%29.md): Select a pose if multiple poses are detected on the same frame.

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
- [PoseSelectionStrategy](poseselectionstrategy.md): Pose selection strategy.
- [JointsSelector](jointsselector.md): Joints selector from a pose.
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanHandPoseExtractor](humanhandposeextractor.md): The human hand pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
