> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetection-swift.struct](https://developer.apple.com/documentation/cinematic/cndetection-swift.struct)

# CNDetection

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A structure that represents a detected subject, face, torso or pet at a particular time.

## Declaration

```swift
struct CNDetection
```

<a id="overview"></a>

## Overview

Specifies the type, distance bounds, and time of the detection. Detections obtained from the Cinematic script include a unique number that can tracks the detection over time.

Some types of detections also include a unique group number that associates related detections (for example, the face and torso of the same person).

## Topics

### Initializers

- [init(time:detectionType:normalizedRect:focusDisparity:)](cndetection-swift.struct/init%28time_detectiontype_normalizedrect_focusdisparity_%29.md): Creates a Cinematic detection of a subject.

### Instance Properties

- [detectionGroupID](cndetection-swift.struct/detectiongroupid.md): A unique number representing the detection to focus on if this is a group decision.
- [detectionID](cndetection-swift.struct/detectionid.md): An unique identifier assigned by the Cinematic script to all detections of the same subject and detection type across time.
- [detectionType](cndetection-swift.struct/detectiontype.md): The type of object detected, such as the face, torso, cat, dog, and so on.
- [focusDisparity](cndetection-swift.struct/focusdisparity.md): The disparity to use in order to focus on the object.
- [normalizedRect](cndetection-swift.struct/normalizedrect.md): The rectangle within the image where the object occurs, normalized such that (0.0, 0.0) is the top-left and (1.0, 1.0) is the bottom-right.
- [time](cndetection-swift.struct/time.md): The first presentation time which the subject should be in focus.

### Type Methods

- [accessibilityLabel(for:)](cndetection-swift.struct/accessibilitylabel%28for_%29.md): A localized accessibility label converting a specific detection type into a broad category such as a person, pet, and so on.
- [disparity(in:sourceDisparity:detectionType:priorDisparity:)](cndetection-swift.struct/disparity%28in_sourcedisparity_detectiontype_priordisparity_%29.md): Determines the disparity to use to focus on the object in the rectangle.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDecision](cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.
