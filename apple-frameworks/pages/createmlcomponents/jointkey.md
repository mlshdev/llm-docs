> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointkey](https://developer.apple.com/documentation/createmlcomponents/jointkey)

# JointKey

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A key that uniquely identifies a joint.

## Declaration

```swift
struct JointKey
```

## Topics

### Getting elbow properties

- [leftElbow](jointkey/leftelbow.md): A key associated with left elbow joint in a body pose.
- [rightElbow](jointkey/rightelbow.md): A key associated with right elbow joint in a body pose.

### Getting head properties

- [leftEye](jointkey/lefteye.md): A key associated with left eye joint in a body pose.
- [rightEye](jointkey/righteye.md): A key associated with right eye joint in a body pose.
- [leftEar](jointkey/leftear.md): A key associated with left ear joint in a body pose.
- [rightEar](jointkey/rightear.md): A key associated with right ear joint in a body pose.
- [nose](jointkey/nose.md): A key associated with nose joint in a body pose.

### Getting index finger properties

- [indexDIP](jointkey/indexdip.md): A key associated with index finger’s distal interphalangeal (DIP) joint in a hand pose.
- [indexMCP](jointkey/indexmcp.md): A key associated with index finger’s metacarpophalangeal (MCP) joint in a hand pose.
- [indexPIP](jointkey/indexpip.md): A key associated with index finger’s proximal interphalangeal (PIP) joint in a hand pose.
- [indexTip](jointkey/indextip.md): A key associated with index finger tip joint in a hand pose.

### Getting little finger properties

- [littleDIP](jointkey/littledip.md): A key associated with ring finger’s distal interphalangeal (DIP) joint in a hand pose.
- [littleMCP](jointkey/littlemcp.md): A key associated with ring finger’s metacarpophalangeal (MCP) joint in a hand pose.
- [littlePIP](jointkey/littlepip.md): A key associated with ring finger’s proximal interphalangeal (PIP) joint in a hand pose.
- [littleTip](jointkey/littletip.md): A key associated with ring finger tip joint in a hand pose.

### Getting middle finger properties

- [middleDIP](jointkey/middledip.md): A key associated with middle finger’s distal interphalangeal (DIP) joint in a hand pose.
- [middleMCP](jointkey/middlemcp.md): A key associated with middle finger’s metacarpophalangeal (MCP) joint in a hand pose.
- [middlePIP](jointkey/middlepip.md): A key associated with middle finger’s proximal interphalangeal (PIP) joint in a hand pose.
- [middleTip](jointkey/middletip.md): A key associated with middle finger tip joint in a hand pose.

### Getting ring finger properties

- [ringDIP](jointkey/ringdip.md): A key associated with ring finger’s distal interphalangeal (DIP) joint in a hand pose.
- [ringMCP](jointkey/ringmcp.md): A key associated with ring finger’s metacarpophalangeal (MCP) joint in a hand pose.
- [ringPIP](jointkey/ringpip.md): A key associated with ring finger’s proximal interphalangeal (PIP) joint in a hand pose.
- [ringTip](jointkey/ringtip.md): A key associated with ring finger tip joint in a hand pose.

### Getting thumb properties

- [thumbCMC](jointkey/thumbcmc.md): A key associated with thumb carpometacarpal (CMC) joint in a hand pose.
- [thumbIP](jointkey/thumbip.md): A key associated with thumb interphalangeal (IP) joint in a hand pose.
- [thumbMP](jointkey/thumbmp.md): A key associated with thumb metacarpophalangeal (MP) joint in a hand pose.
- [thumbTip](jointkey/thumbtip.md): A key associated with thumb tip joint in a hand pose.

### Getting wrist properties

- [leftWrist](jointkey/leftwrist.md): A key associated with left wrist joint in a body pose.
- [rightWrist](jointkey/rightwrist.md): A key associated with right wrist joint in a body pose.
- [wrist](jointkey/wrist.md): A key associated with hand wrist joint in a hand pose.

### Getting neck and shoulder properties

- [neck](jointkey/neck.md): A key associated with neck joint in a body pose.
- [leftShoulder](jointkey/leftshoulder.md): A key associated with left shoulder joint in a body pose.
- [rightShoulder](jointkey/rightshoulder.md): A key associated with right shoulder joint in a body pose.

### Getting hip, knee, and ankle properties

- [leftHip](jointkey/lefthip.md): A key associated with left hip joint in a body pose.
- [leftKnee](jointkey/leftknee.md): A key associated with left knee joint in a body pose.
- [rightHip](jointkey/righthip.md): A key associated with right hip joint in a body pose.
- [rightKnee](jointkey/rightknee.md): A key associated with right knee joint in a body pose.
- [leftAnkle](jointkey/leftankle.md): A key associated with left ankle joint in a body pose.
- [rightAnkle](jointkey/rightankle.md): A key associated with right ankle joint in a body pose.

### Getting root and raw Properties

- [root](jointkey/root.md): A key associated with root joint in a body pose.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pose components

- [Counting human body action repetitions in a live video feed](counting-human-body-action-repetitions-in-a-live-video-feed.md): Use Create ML Components to analyze a series of video frames and count a person’s repetitive or periodic body movements.
- [Pose](pose.md): A pose that contains joint keypoints from a person, a hand, or a combination.
- [JointPoint](jointpoint.md): A joint in a pose that contains a location and scoring information.
- [PoseSelector](poseselector.md): A transformer that selects one pose from an array of poses.
- [PoseSelectionStrategy](poseselectionstrategy.md): Pose selection strategy.
- [JointsSelector](jointsselector.md): Joints selector from a pose.
- [HumanBodyPoseExtractor](humanbodyposeextractor.md): The human body pose image feature extractor.
- [HumanHandPoseExtractor](humanhandposeextractor.md): The human hand pose image feature extractor.
- [HumanBodyActionCounter](humanbodyactioncounter.md): A human body action repetition counting transformer that takes window of human body poses and produces cumulative human body action repetition counts.
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md): A human body action period predictor transformer that takes window of poses and produces a window of predictions.
