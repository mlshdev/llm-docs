> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cncustomdetectiontrack-9a2zo](https://developer.apple.com/documentation/cinematic/cncustomdetectiontrack-9a2zo)

# CNCustomDetectionTrack

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object representing a discrete detection track composed of individual detections.

## Declaration

```swift
class CNCustomDetectionTrack
```

## Topics

### Initializers

- [init(detections:smooth:)](cncustomdetectiontrack-9a2zo/init%28detections_smooth_%29.md): Initializes a custom detection track object with an array of detections and optionally applying smoothing.

### Instance Properties

- [allDetections](cncustomdetectiontrack-9a2zo/alldetections.md): All detected objects in the track.

## Relationships

### Inherits From

- [CNDetectionTrack](cndetectiontrack-2bxtd.md)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNDetectionType](cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.
