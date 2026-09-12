> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter](https://developer.apple.com/documentation/coremotion/cmaltimeter)

# CMAltimeter (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

An object that initiates the delivery of altitude-related changes.

## Declaration

```swift
class CMAltimeter
```

<a id="overview"></a>

## Overview

Altitude events report changes in both the relative and absolute altitude. For example, a hiking app could use this object to track the user’s elevation change over the course of a hike, or to report their current absolute altitude during the hike.

Because altitude events may not be available on all devices, always call the [isRelativeAltitudeAvailable()](cmaltimeter/isrelativealtitudeavailable%28%29.md) method before starting relative altitude updates, and call [isAbsoluteAltitudeAvailable()](cmaltimeter/isabsolutealtitudeavailable%28%29.md) before starting absolute altitude updates.

After checking the availability of altitude data, call the [startRelativeAltitudeUpdates(to:withHandler:)](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md) method to start receiving relative altitude data, or call the [startAbsoluteAltitudeUpdates(to:withHandler:)](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md) method for absolute altitude data.

Core Motion generates events at regular intervals (regardless of whether the data has changed) and delivers them to the block you specified. When you no longer need the event data, call the [stopRelativeAltitudeUpdates()](cmaltimeter/stoprelativealtitudeupdates%28%29.md) or [stopAbsoluteAltitudeUpdates()](cmaltimeter/stopabsolutealtitudeupdates%28%29.md) methods respectively.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable()](cmaltimeter/isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable()](cmaltimeter/isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus()](cmaltimeter/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdates(to:withHandler:)](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates()](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdates(to:withHandler:)](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates()](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](cmaltitudehandler.md): A block for receiving relative altitude data.

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

## See Also

### Altitude data

- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md): Data that records a change in absolute altitude.
- [CMAltitudeData](cmaltitudedata.md): Data for a recorded change in altitude.

# CMAltimeter (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

An object that initiates the delivery of altitude-related changes.

## Declaration

```objectivec
@interface CMAltimeter : NSObject
```

<a id="overview"></a>

## Overview

Altitude events report changes in both the relative and absolute altitude. For example, a hiking app could use this object to track the user’s elevation change over the course of a hike, or to report their current absolute altitude during the hike.

Because altitude events may not be available on all devices, always call the [isRelativeAltitudeAvailable](cmaltimeter/isrelativealtitudeavailable%28%29.md) method before starting relative altitude updates, and call [isAbsoluteAltitudeAvailable](cmaltimeter/isabsolutealtitudeavailable%28%29.md) before starting absolute altitude updates.

After checking the availability of altitude data, call the [startRelativeAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md) method to start receiving relative altitude data, or call the [startAbsoluteAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md) method for absolute altitude data.

Core Motion generates events at regular intervals (regardless of whether the data has changed) and delivers them to the block you specified. When you no longer need the event data, call the [stopRelativeAltitudeUpdates](cmaltimeter/stoprelativealtitudeupdates%28%29.md) or [stopAbsoluteAltitudeUpdates](cmaltimeter/stopabsolutealtitudeupdates%28%29.md) methods respectively.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable](cmaltimeter/isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable](cmaltimeter/isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus](cmaltimeter/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](cmaltitudehandler.md): A block for receiving relative altitude data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Altitude data

- [CMAbsoluteAltitudeData](cmabsolutealtitudedata.md): Data that records a change in absolute altitude.
- [CMAltitudeData](cmaltitudedata.md): Data for a recorded change in altitude.
