> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avroutedetector](https://developer.apple.com/documentation/avfoundation/avroutedetector)

# AVRouteDetector (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that detects available media playback routes.

## Declaration

```swift
class AVRouteDetector
```

## Mentioned In

- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

If you enable route detection, the object reports whether it detects multiple playback routes. If it does, use [AVRoutePickerView](../avkit/avroutepickerview.md) to present the UI for the user to select an appropriate route.

## Topics

### Detecting routes

- [isRouteDetectionEnabled](avroutedetector/isroutedetectionenabled.md): A Boolean value that indicates whether route detection is in an enabled state.
- [multipleRoutesDetected](avroutedetector/multipleroutesdetected.md): A Boolean value that indicates whether the object detects more than one playback route.
- [AVRouteDetectorMultipleRoutesDetectedDidChange](../foundation/nsnotification/name-swift.struct/avroutedetectormultipleroutesdetecteddidchange.md): A notification the system posts when changes occur to its detected routes.

### Deprecated

- [detectsCustomRoutes](avroutedetector/detectscustomroutes.md): Deprecated. A Boolean value that indicates whether route detection includes custom routes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVRouteDetector (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that detects available media playback routes.

## Declaration

```objectivec
@interface AVRouteDetector : NSObject
```

## Mentioned In

- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

If you enable route detection, the object reports whether it detects multiple playback routes. If it does, use [AVRoutePickerView](../avkit/avroutepickerview.md) to present the UI for the user to select an appropriate route.

## Topics

### Detecting routes

- [routeDetectionEnabled](avroutedetector/isroutedetectionenabled.md): A Boolean value that indicates whether route detection is in an enabled state.
- [multipleRoutesDetected](avroutedetector/multipleroutesdetected.md): A Boolean value that indicates whether the object detects more than one playback route.
- [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](avroutedetectormultipleroutesdetecteddidchangenotification.md): A notification the system posts when changes occur to its detected routes.

### Deprecated

- [detectsCustomRoutes](avroutedetector/detectscustomroutes.md): Deprecated. A Boolean value that indicates whether route detection includes custom routes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
