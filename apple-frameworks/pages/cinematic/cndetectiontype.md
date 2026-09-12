> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetectiontype](https://developer.apple.com/documentation/cinematic/cndetectiontype)

# CNDetectionType (Swift)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The type of object detected, such as face, torso, cat, dog and so on.

## Declaration

```swift
enum CNDetectionType
```

## Topics

### Enumeration Cases

- [CNDetectionType.autoFocus](cndetectiontype/autofocus.md)
- [CNDetectionType.catBody](cndetectiontype/catbody.md)
- [CNDetectionType.catHead](cndetectiontype/cathead.md)
- [CNDetectionType.custom](cndetectiontype/custom.md)
- [CNDetectionType.dogBody](cndetectiontype/dogbody.md)
- [CNDetectionType.dogHead](cndetectiontype/doghead.md)
- [CNDetectionType.fixedFocus](cndetectiontype/fixedfocus.md)
- [CNDetectionType.humanFace](cndetectiontype/humanface.md)
- [CNDetectionType.humanHead](cndetectiontype/humanhead.md)
- [CNDetectionType.humanTorso](cndetectiontype/humantorso.md)
- [CNDetectionType.sportsBall](cndetectiontype/sportsball.md)
- [CNDetectionType.unknown](cndetectiontype/unknown.md)

### Initializers

- [init(rawValue:)](cndetectiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing

- [Editing Spatial Audio with an audio mix](editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.

# CNDetectionType (Objective-C)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The type of object detected, such as face, torso, cat, dog and so on.

## Declaration

```objectivec
enum CNDetectionType : NSInteger;
```

## Topics

### Enumeration Cases

- [CNDetectionTypeAutoFocus](cndetectiontype/autofocus.md)
- [CNDetectionTypeCatBody](cndetectiontype/catbody.md)
- [CNDetectionTypeCatHead](cndetectiontype/cathead.md)
- [CNDetectionTypeCustom](cndetectiontype/custom.md)
- [CNDetectionTypeDogBody](cndetectiontype/dogbody.md)
- [CNDetectionTypeDogHead](cndetectiontype/doghead.md)
- [CNDetectionTypeFixedFocus](cndetectiontype/fixedfocus.md)
- [CNDetectionTypeHumanFace](cndetectiontype/humanface.md)
- [CNDetectionTypeHumanHead](cndetectiontype/humanhead.md)
- [CNDetectionTypeHumanTorso](cndetectiontype/humantorso.md)
- [CNDetectionTypeSportsBall](cndetectiontype/sportsball.md)
- [CNDetectionTypeUnknown](cndetectiontype/unknown.md)

## See Also

### Editing

- [CNDetection](cndetection-c.class.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cndecision-c.class.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cndetectiontrack-61x7g.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cnfixeddetectiontrack-5aei2.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cncustomdetectiontrack-891hc.md): An object representing a discrete detection track composed of individual detections.
