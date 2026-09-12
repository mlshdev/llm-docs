> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avroutedetector/isroutedetectionenabled](https://developer.apple.com/documentation/avfoundation/avroutedetector/isroutedetectionenabled)

# isRouteDetectionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether route detection is in an enabled state.

## Declaration

```swift
var isRouteDetectionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  Enabling route detection significantly increases power consumption. Turn it off when you no longer need it.

## See Also

### Detecting routes

- [multipleRoutesDetected](multipleroutesdetected.md): A Boolean value that indicates whether the object detects more than one playback route.
- [AVRouteDetectorMultipleRoutesDetectedDidChange](../../foundation/nsnotification/name-swift.struct/avroutedetectormultipleroutesdetecteddidchange.md): A notification the system posts when changes occur to its detected routes.

# routeDetectionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether route detection is in an enabled state.

## Declaration

```objectivec
@property (getter=isRouteDetectionEnabled) BOOL routeDetectionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  Enabling route detection significantly increases power consumption. Turn it off when you no longer need it.

## See Also

### Detecting routes

- [multipleRoutesDetected](multipleroutesdetected.md): A Boolean value that indicates whether the object detects more than one playback route.
- [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](../avroutedetectormultipleroutesdetecteddidchangenotification.md): A notification the system posts when changes occur to its detected routes.
