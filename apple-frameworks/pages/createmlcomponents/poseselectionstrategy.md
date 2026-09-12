> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/poseselectionstrategy](https://developer.apple.com/documentation/createmlcomponents/poseselectionstrategy)

# PoseSelectionStrategy

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Pose selection strategy.

## Declaration

```swift
enum PoseSelectionStrategy
```

## Topics

### Selection strategies

- [PoseSelectionStrategy.maximumBoundingBoxArea](poseselectionstrategy/maximumboundingboxarea.md): The strategy to choose a pose with the maximum bounding box area.
- [PoseSelectionStrategy.highestJointLocation](poseselectionstrategy/highestjointlocation.md): The strategy to choose a pose where a joint in it has the higest y coordinate location.
- [PoseSelectionStrategy.leftmostJointLocation](poseselectionstrategy/leftmostjointlocation.md): The strategy to choose a pose where a joint in it has the leftmost x coordinate location.
- [PoseSelectionStrategy.lowestJointLocation](poseselectionstrategy/lowestjointlocation.md): The strategy to choose a pose where a joint in it has the lowest y coordinate location.
- [PoseSelectionStrategy.rightmostJointLocation](poseselectionstrategy/rightmostjointlocation.md): The strategy to choose a pose where a joint in it has the leftmost x coordinate location.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pose components

- [Counting human body action repetitions in a live video feed](counting-human-body-action-repetitions-in-a-live-video-feed.md): Use Create ML Components to analyze a series of video frames and count a person’s repetitive or periodic body movements.
- [Pose](pose.md): A pose that contains joint keypoints from a person, a hand, or a combination.
- [JointKey](jointkey.md): A key that uniquely identifies a joint.
- [JointPoint](jointpoint.md): A joint in a pose that contains a location and scoring information.
- [PoseSelector](poseselector.md): A transformer that selects one pose from an array of poses.
- [JointsSelector](jointsselector.md): Joints selector from a pose.
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanHandPoseExtractor](humanhandposeextractor.md): The human hand pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
