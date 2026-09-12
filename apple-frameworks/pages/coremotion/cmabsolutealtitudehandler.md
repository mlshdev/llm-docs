> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmabsolutealtitudehandler](https://developer.apple.com/documentation/coremotion/cmabsolutealtitudehandler)

# CMAbsoluteAltitudeHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A block for receiving absolute altitude data.

## Declaration

```swift
typealias CMAbsoluteAltitudeHandler = (CMAbsoluteAltitudeData?, (any Error)?) -> Void
```

## Parameters

- `altitudeData`: The current altitude for the device. If there’s an error generating the data, this parameter is `nil`.
- `error`: The error object. Returns `nil` if the altimeter successfully delivers the altitude data. When an error occurs, you can use the information in the provided object to recover the data or to alert the user.

<a id="Discussion"></a>

## Discussion

You pass a block of this type to the altimeter object’s [startAbsoluteAltitudeUpdates(to:withHandler:)](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md) method when starting the delivery of altitude data.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdates(to:withHandler:)](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates()](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [startRelativeAltitudeUpdates(to:withHandler:)](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates()](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](cmaltitudehandler.md): A block for receiving relative altitude data.

# CMAbsoluteAltitudeHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A block for receiving absolute altitude data.

## Declaration

```objectivec
typedef void (^)(CMAbsoluteAltitudeData *, NSError *) CMAbsoluteAltitudeHandler;
```

## Parameters

- `altitudeData`: The current altitude for the device. If there’s an error generating the data, this parameter is `nil`.
- `error`: The error object. Returns `nil` if the altimeter successfully delivers the altitude data. When an error occurs, you can use the information in the provided object to recover the data or to alert the user.

<a id="Discussion"></a>

## Discussion

You pass a block of this type to the altimeter object’s [startAbsoluteAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md) method when starting the delivery of altitude data.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](cmaltitudehandler.md): A block for receiving relative altitude data.
