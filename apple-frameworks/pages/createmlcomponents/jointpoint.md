> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointpoint](https://developer.apple.com/documentation/createmlcomponents/jointpoint)

# JointPoint

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A joint in a pose that contains a location and scoring information.

## Declaration

```swift
struct JointPoint
```

## Topics

### Creating a joint point

- [init(\_:location:confidence:)](jointpoint/init%28__location_confidence_%29.md): Creates a joint point with its key, location and confidence.

### Getting the detection confidence

- [confidence](jointpoint/confidence.md): A detection confidence of the joint

### Getting the key name

- [key](jointpoint/key.md): The key name for the joint

### Getting the joint location

- [location](jointpoint/location.md): The location of the joint point

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pose components

- [Counting human body action repetitions in a live video feed](counting-human-body-action-repetitions-in-a-live-video-feed.md): Use Create ML Components to analyze a series of video frames and count a person’s repetitive or periodic body movements.
- [Pose](pose.md): A pose that contains joint keypoints from a person, a hand, or a combination.
- [JointKey](jointkey.md): A key that uniquely identifies a joint.
- [PoseSelector](poseselector.md): A transformer that selects one pose from an array of poses.
- [PoseSelectionStrategy](poseselectionstrategy.md): Pose selection strategy.
- [JointsSelector](jointsselector.md): Joints selector from a pose.
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanHandPoseExtractor](humanhandposeextractor.md): The human hand pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
