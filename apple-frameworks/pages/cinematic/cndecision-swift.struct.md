> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndecision-swift.struct](https://developer.apple.com/documentation/cinematic/cndecision-swift.struct)

# CNDecision

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.

## Declaration

```swift
struct CNDecision
```

## Topics

### Initializers

- [init(time:detectionGroupID:strong:)](cndecision-swift.struct/init%28time_detectiongroupid_strong_%29.md): Makes a decision to focus on the detection with the given unique detection.
- [init(time:detectionID:strong:)](cndecision-swift.struct/init%28time_detectionid_strong_%29.md): Makes a decision to focus on the best among those detections with the same detection group ID.

### Instance Properties

- [focusDetectionID](cndecision-swift.struct/focusdetectionid-swift.property.md)
- [isStrongDecision](cndecision-swift.struct/isstrongdecision.md): A flag representing whether this is a strong decision.
- [isUserDecision](cndecision-swift.struct/isuserdecision.md): A flag representing whether this is a user-created decision or a base decision.
- [time](cndecision-swift.struct/time.md): The first presentation time that the subject should be in focus.

### Enumerations

- [CNDecision.FocusDetectionID](cndecision-swift.struct/focusdetectionid-swift.enum.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDetectionTrack](cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.
