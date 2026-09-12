> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointsselector](https://developer.apple.com/documentation/createmlcomponents/jointsselector)

# JointsSelector

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Joints selector from a pose.

## Declaration

```swift
struct JointsSelector
```

## Topics

### Creating a selector

- [init(ignoredJoints:)](jointsselector/init%28ignoredjoints_%29.md): Creates a joint selector transformer using a list of joint keys to be ignored.
- [init(selectedJoints:)](jointsselector/init%28selectedjoints_%29.md): Creates a joint selector transformer using a list of joint keys to be selected.

### Getting the properties

- [ignoredJoints](jointsselector/ignoredjoints.md): A list of joint keys to be ignored.
- [selectedJoints](jointsselector/selectedjoints.md): A list of joint keys to be selected.

### Performing the selector

- [applied(to:eventHandler:)](jointsselector/applied%28to_eventhandler_%29.md): Select joints to be included in the pose. Ignored joints will be reset to zero in all fields.

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
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanHandPoseExtractor](humanhandposeextractor.md): The human hand pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
