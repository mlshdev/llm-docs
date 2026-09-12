> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequesttrackinglevel](https://developer.apple.com/documentation/vision/vnrequesttrackinglevel)

# VNRequestTrackingLevel (Swift)

**Framework:** Vision  
**Kind:** Enumeration

An enumeration of tracking priorities.

## Declaration

```swift
enum VNRequestTrackingLevel
```

## Topics

### Enumeration Cases

- [VNRequestTrackingLevel.accurate](vnrequesttrackinglevel/accurate.md): Tracking level that favors location accuracy over speed.
- [VNRequestTrackingLevel.fast](vnrequesttrackinglevel/fast.md): Tracking level that favors speed over location accuracy.

### Creating a Tracking Level

- [init(rawValue:)](vnrequesttrackinglevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a Tracking Request

- [inputObservation](vntrackingrequest/inputobservation.md): The observation object defining a region to track.
- [trackingLevel](vntrackingrequest/trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.
- [isLastFrame](vntrackingrequest/islastframe.md): A Boolean that indicates the last frame in a tracking sequence.

# VNRequestTrackingLevel (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

An enumeration of tracking priorities.

## Declaration

```objectivec
enum VNRequestTrackingLevel : NSUInteger;
```

## Topics

### Enumeration Cases

- [VNRequestTrackingLevelAccurate](vnrequesttrackinglevel/accurate.md): Tracking level that favors location accuracy over speed.
- [VNRequestTrackingLevelFast](vnrequesttrackinglevel/fast.md): Tracking level that favors speed over location accuracy.

## See Also

### Configuring a Tracking Request

- [inputObservation](vntrackingrequest/inputobservation.md): The observation object defining a region to track.
- [trackingLevel](vntrackingrequest/trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.
- [lastFrame](vntrackingrequest/islastframe.md): A Boolean that indicates the last frame in a tracking sequence.
