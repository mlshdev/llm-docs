> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackingrequest/islastframe](https://developer.apple.com/documentation/vision/vntrackingrequest/islastframe)

# isLastFrame (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean that indicates the last frame in a tracking sequence.

## Declaration

```swift
var isLastFrame: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), the current tracker will be released to the pool of available trackers when the current frame finishes processing.

## See Also

### Configuring a Tracking Request

- [VNRequestTrackingLevel](../vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](inputobservation.md): The observation object defining a region to track.
- [trackingLevel](trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.

# lastFrame (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean that indicates the last frame in a tracking sequence.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, getter=isLastFrame) BOOL lastFrame;
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), the current tracker will be released to the pool of available trackers when the current frame finishes processing.

## See Also

### Configuring a Tracking Request

- [VNRequestTrackingLevel](../vnrequesttrackinglevel.md): An enumeration of tracking priorities.
- [inputObservation](inputobservation.md): The observation object defining a region to track.
- [trackingLevel](trackinglevel.md): A value for specifying whether to prioritize speed or location accuracy.
