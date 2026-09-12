> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltitudehandler](https://developer.apple.com/documentation/coremotion/cmaltitudehandler)

# CMAltitudeHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block for receiving relative altitude data.

## Declaration

```swift
typealias CMAltitudeHandler = (CMAltitudeData?, (any Error)?) -> Void
```

## Parameters

- `altitudeData`: The relative change in altitude data. If there’s an error generating the data, this parameter is `nil`.
- `error`: The error object. Returns `nil` if the altimeter successfully delivers the altitude data. When an error occurs, you can use the information in the provided object to recover the data or to alert the user.

<a id="Discussion"></a>

## Discussion

You pass a block of this type to the altimeter object’s [startRelativeAltitudeUpdates(to:withHandler:)](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md) method when starting the delivery of altitude data.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdates(to:withHandler:)](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates()](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdates(to:withHandler:)](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates()](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.

# CMAltitudeHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block for receiving relative altitude data.

## Declaration

```objectivec
typedef void (^)(CMAltitudeData *, NSError *) CMAltitudeHandler;
```

## Parameters

- `altitudeData`: The relative change in altitude data. If there’s an error generating the data, this parameter is `nil`.
- `error`: The error object. Returns `nil` if the altimeter successfully delivers the altitude data. When an error occurs, you can use the information in the provided object to recover the data or to alert the user.

<a id="Discussion"></a>

## Discussion

You pass a block of this type to the altimeter object’s [startRelativeAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md) method when starting the delivery of altitude data.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates](cmaltimeter/stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](cmaltimeter/startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates](cmaltimeter/stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
