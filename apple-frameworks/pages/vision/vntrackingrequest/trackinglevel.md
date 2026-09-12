> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackingrequest/trackinglevel](https://developer.apple.com/documentation/vision/vntrackingrequest/trackinglevel)

# trackingLevel (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value for specifying whether to prioritize speed or location accuracy.

## Declaration

```swift
var trackingLevel: VNRequestTrackingLevel { get set }
```

## See Also

### Configuring a Tracking Request

- [VNRequestTrackingLevel](../vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](inputobservation.md): The observation object defining a region to track.
- [isLastFrame](islastframe.md): A Boolean that indicates the last frame in a tracking sequence.

# trackingLevel (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A value for specifying whether to prioritize speed or location accuracy.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNRequestTrackingLevel trackingLevel;
```

## See Also

### Configuring a Tracking Request

- [VNRequestTrackingLevel](../vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](inputobservation.md): The observation object defining a region to track.
- [lastFrame](islastframe.md): A Boolean that indicates the last frame in a tracking sequence.
