> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avroutedetector/multipleroutesdetected](https://developer.apple.com/documentation/avfoundation/avroutedetector/multipleroutesdetected)

# multipleRoutesDetected (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the object detects more than one playback route.

## Declaration

```swift
var multipleRoutesDetected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system posts a [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](../avroutedetectormultipleroutesdetecteddidchangenotification.md) notification when this property value changes.

## See Also

### Detecting routes

- [isRouteDetectionEnabled](isroutedetectionenabled.md): A Boolean value that indicates whether route detection is in an enabled state.
- [AVRouteDetectorMultipleRoutesDetectedDidChange](../../foundation/nsnotification/name-swift.struct/avroutedetectormultipleroutesdetecteddidchange.md): A notification the system posts when changes occur to its detected routes.

# multipleRoutesDetected (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the object detects more than one playback route.

## Declaration

```objectivec
@property (readonly) BOOL multipleRoutesDetected;
```

<a id="Discussion"></a>

## Discussion

The system posts a [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](../avroutedetectormultipleroutesdetecteddidchangenotification.md) notification when this property value changes.

## See Also

### Detecting routes

- [routeDetectionEnabled](isroutedetectionenabled.md): A Boolean value that indicates whether route detection is in an enabled state.
- [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](../avroutedetectormultipleroutesdetecteddidchangenotification.md): A notification the system posts when changes occur to its detected routes.
