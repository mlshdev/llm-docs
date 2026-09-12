> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnfixeddetectiontrack-93rrw](https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-93rrw)

# CNFixedDetectionTrack

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object representing the fixed detection track.

## Declaration

```swift
class CNFixedDetectionTrack
```

## Topics

### Initializers

- [init(focusDisparity:)](cnfixeddetectiontrack-93rrw/init%28focusdisparity_%29.md): Creates a detection track with fixed focus at the given disparity.
- [init(originalDetection:)](cnfixeddetectiontrack-93rrw/init%28originaldetection_%29.md): Creates a detection track with fixed focus at the disparity of an existing detection.

### Instance Properties

- [focusDisparity](cnfixeddetectiontrack-93rrw/focusdisparity.md): The disparity to use in order to focus on the object.
- [originalDetection](cnfixeddetectiontrack-93rrw/originaldetection.md): The original detection based on the fixed detection track.

## Relationships

### Inherits From

- [CNDetectionTrack](cndetectiontrack-2bxtd.md)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.
