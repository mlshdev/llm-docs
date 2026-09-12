> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontrack-2bxtd](https://developer.apple.com/documentation/cinematic/cndetectiontrack-2bxtd)

# CNDetectionTrack

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object representing a series of detections of the same subject over time.

## Declaration

```swift
class CNDetectionTrack
```

## Topics

### Instance Properties

- [detectionGroupID](cndetectiontrack-2bxtd/detectiongroupid.md): The detection group ID of the subject detected by the track.
- [detectionID](cndetectiontrack-2bxtd/detectionid.md): The unique ID of the subject detected during this track.
- [detectionType](cndetectiontrack-2bxtd/detectiontype.md): The type of object that’s detected.
- [isDiscrete](cndetectiontrack-2bxtd/isdiscrete.md): A flag determining if the detection track has discrete detections, otherwise continuous.
- [isUserCreated](cndetectiontrack-2bxtd/isusercreated.md): A flag indicating if the client created the detection track.

### Instance Methods

- [detection(atOrBefore:)](cndetectiontrack-2bxtd/detection%28atorbefore_%29.md): Returns the array of detections in the detection track before a given time.
- [detection(nearest:)](cndetectiontrack-2bxtd/detection%28nearest_%29.md): Returns the array of detections in the detection track nearest a given time.
- [detections(in:)](cndetectiontrack-2bxtd/detections%28in_%29.md): Returns the array of detections in the detection track within the given time range.

## Relationships

### Inherited By

- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md)
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.
