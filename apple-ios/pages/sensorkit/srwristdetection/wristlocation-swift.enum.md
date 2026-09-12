> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristdetection/wristlocation-swift.enum](https://developer.apple.com/documentation/sensorkit/srwristdetection/wristlocation-swift.enum)

# SRWristDetection.WristLocation (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Preferences for where a user wears a watch.

## Declaration

```swift
enum WristLocation
```

## Topics

### Wrist Preferences

- [SRWristDetection.WristLocation.left](wristlocation-swift.enum/left.md): Indicates that the user wears a watch on the left wrist.
- [SRWristDetection.WristLocation.right](wristlocation-swift.enum/right.md): Indicates that the user wears a watch on the right wrist.

### Initializers

- [init(rawValue:)](wristlocation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Watch Configuration

- [crownOrientation](crownorientation-swift.property.md): A value that indicates the direction the Digital Crown faces with respect to the user.
- [SRWristDetection.CrownOrientation](crownorientation-swift.enum.md): Directions the Digital Crown can face with respect to the wearer.
- [onWrist](onwrist.md): A value that indicates whether the watch is on the user’s wrist.
- [onWristDate](onwristdate.md): The date and time that the user puts their Apple Watch on their wrist.
- [offWristDate](offwristdate.md): The date and time that the user takes their Apple Watch off their wrist.
- [wristLocation](wristlocation-swift.property.md): A value that indicates the wrist where the user wears the watch.

# SRWristLocation (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Preferences for where a user wears a watch.

## Declaration

```objectivec
enum SRWristLocation : NSInteger;
```

## Topics

### Wrist Preferences

- [SRWristLocationLeft](wristlocation-swift.enum/left.md): Indicates that the user wears a watch on the left wrist.
- [SRWristLocationRight](wristlocation-swift.enum/right.md): Indicates that the user wears a watch on the right wrist.

## See Also

### Inspecting Watch Configuration

- [crownOrientation](crownorientation-swift.property.md): A value that indicates the direction the Digital Crown faces with respect to the user.
- [SRCrownOrientation](crownorientation-swift.enum.md): Directions the Digital Crown can face with respect to the wearer.
- [onWrist](onwrist.md): A value that indicates whether the watch is on the user’s wrist.
- [onWristDate](onwristdate.md): The date and time that the user puts their Apple Watch on their wrist.
- [offWristDate](offwristdate.md): The date and time that the user takes their Apple Watch off their wrist.
- [wristLocation](wristlocation-swift.property.md): A value that indicates the wrist where the user wears the watch.
