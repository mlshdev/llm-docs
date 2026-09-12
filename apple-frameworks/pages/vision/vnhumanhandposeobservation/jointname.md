> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanhandposeobservation/jointname](https://developer.apple.com/documentation/vision/vnhumanhandposeobservation/jointname)

# VNHumanHandPoseObservation.JointName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint names for the hand pose.

## Declaration

```swift
struct JointName
```

## Topics

### Thumb

- [thumbTip](jointname/thumbtip.md): The tip of the thumb.
- [thumbIP](jointname/thumbip.md): The thumb’s interphalangeal (IP) joint.
- [thumbMP](jointname/thumbmp.md): The thumb’s metacarpophalangeal (MP) joint.
- [thumbCMC](jointname/thumbcmc.md): The thumb’s carpometacarpal (CMC) joint.

### Index

- [indexTip](jointname/indextip.md): The tip of the index finger.
- [indexDIP](jointname/indexdip.md): The index finger’s distal interphalangeal (DIP) joint.
- [indexPIP](jointname/indexpip.md): The index finger’s proximal interphalangeal (PIP) joint.
- [indexMCP](jointname/indexmcp.md): The index finger’s metacarpophalangeal (MCP) joint.

### Middle

- [middleTip](jointname/middletip.md): The tip of the middle finger.
- [middleDIP](jointname/middledip.md): The middle finger’s distal interphalangeal (DIP) joint.
- [middlePIP](jointname/middlepip.md): The middle finger’s proximal interphalangeal (PIP) joint.
- [middleMCP](jointname/middlemcp.md): The middle finger’s metacarpophalangeal (MCP) joint.

### Ring

- [ringTip](jointname/ringtip.md): The tip of the ring finger.
- [ringDIP](jointname/ringdip.md): The ring finger’s distal interphalangeal (DIP) joint.
- [ringPIP](jointname/ringpip.md): The ring finger’s proximal interphalangeal (PIP) joint.
- [ringMCP](jointname/ringmcp.md): The ring finger’s metacarpophalangeal (MCP) joint.

### Little

- [littleTip](jointname/littletip.md): The tip of the little finger.
- [littleDIP](jointname/littledip.md): The little finger’s distal interphalangeal (DIP) joint.
- [littlePIP](jointname/littlepip.md): The little finger’s proximal interphalangeal (PIP) joint.
- [littleMCP](jointname/littlemcp.md): The little finger’s metacarpophalangeal (MCP) joint.

### Wrist

- [wrist](jointname/wrist.md): The wrist.

### Initializers

- [init(rawValue:)](jointname/init%28rawvalue_%29.md): Creates a joint name with a recognized point key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# VNHumanHandPoseObservationJointName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint names for the hand pose.

## Declaration

```objectivec
typedef VNRecognizedPointKey VNHumanHandPoseObservationJointName;
```

## Topics

### Thumb

- [VNHumanHandPoseObservationJointNameThumbTip](jointname/thumbtip.md): The tip of the thumb.
- [VNHumanHandPoseObservationJointNameThumbIP](jointname/thumbip.md): The thumb’s interphalangeal (IP) joint.
- [VNHumanHandPoseObservationJointNameThumbMP](jointname/thumbmp.md): The thumb’s metacarpophalangeal (MP) joint.
- [VNHumanHandPoseObservationJointNameThumbCMC](jointname/thumbcmc.md): The thumb’s carpometacarpal (CMC) joint.

### Index

- [VNHumanHandPoseObservationJointNameIndexTip](jointname/indextip.md): The tip of the index finger.
- [VNHumanHandPoseObservationJointNameIndexDIP](jointname/indexdip.md): The index finger’s distal interphalangeal (DIP) joint.
- [VNHumanHandPoseObservationJointNameIndexPIP](jointname/indexpip.md): The index finger’s proximal interphalangeal (PIP) joint.
- [VNHumanHandPoseObservationJointNameIndexMCP](jointname/indexmcp.md): The index finger’s metacarpophalangeal (MCP) joint.

### Middle

- [VNHumanHandPoseObservationJointNameMiddleTip](jointname/middletip.md): The tip of the middle finger.
- [VNHumanHandPoseObservationJointNameMiddleDIP](jointname/middledip.md): The middle finger’s distal interphalangeal (DIP) joint.
- [VNHumanHandPoseObservationJointNameMiddlePIP](jointname/middlepip.md): The middle finger’s proximal interphalangeal (PIP) joint.
- [VNHumanHandPoseObservationJointNameMiddleMCP](jointname/middlemcp.md): The middle finger’s metacarpophalangeal (MCP) joint.

### Ring

- [VNHumanHandPoseObservationJointNameRingTip](jointname/ringtip.md): The tip of the ring finger.
- [VNHumanHandPoseObservationJointNameRingDIP](jointname/ringdip.md): The ring finger’s distal interphalangeal (DIP) joint.
- [VNHumanHandPoseObservationJointNameRingPIP](jointname/ringpip.md): The ring finger’s proximal interphalangeal (PIP) joint.
- [VNHumanHandPoseObservationJointNameRingMCP](jointname/ringmcp.md): The ring finger’s metacarpophalangeal (MCP) joint.

### Little

- [VNHumanHandPoseObservationJointNameLittleTip](jointname/littletip.md): The tip of the little finger.
- [VNHumanHandPoseObservationJointNameLittleDIP](jointname/littledip.md): The little finger’s distal interphalangeal (DIP) joint.
- [VNHumanHandPoseObservationJointNameLittlePIP](jointname/littlepip.md): The little finger’s proximal interphalangeal (PIP) joint.
- [VNHumanHandPoseObservationJointNameLittleMCP](jointname/littlemcp.md): The little finger’s metacarpophalangeal (MCP) joint.

### Wrist

- [VNHumanHandPoseObservationJointNameWrist](jointname/wrist.md): The wrist.

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
