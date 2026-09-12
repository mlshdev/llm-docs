> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/startabsolutealtitudeupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmaltimeter/startabsolutealtitudeupdates(to:withhandler:))

# startAbsoluteAltitudeUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Starts the delivery of absolute altitude data to the specified handler.

## Declaration

```swift
func startAbsoluteAltitudeUpdates(to queue: OperationQueue, withHandler handler: @escaping CMAbsoluteAltitudeHandler)
```

## Parameters

- `queue`: The operation queue on which to execute your handler block. The altimeter object stores a strong reference to this object. This parameter must not be `nil`.
- `handler`: The handler block to execute when new altitude data is available. This parameter must not be `nil`. For information about the format of this block, see [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md).

<a id="Discussion"></a>

## Discussion

Call [isAbsoluteAltitudeAvailable()](isabsolutealtitudeavailable%28%29.md) to verify that the current device supports absolute altitude updates before calling the `startAbsoluteAltitudeUpdates(to:withHandler:)` method.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [stopAbsoluteAltitudeUpdates()](stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdates(to:withHandler:)](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates()](stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.

# startAbsoluteAltitudeUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Starts the delivery of absolute altitude data to the specified handler.

## Declaration

```objectivec
- (void) startAbsoluteAltitudeUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMAbsoluteAltitudeHandler) handler;
```

## Parameters

- `queue`: The operation queue on which to execute your handler block. The altimeter object stores a strong reference to this object. This parameter must not be `nil`.
- `handler`: The handler block to execute when new altitude data is available. This parameter must not be `nil`. For information about the format of this block, see [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md).

<a id="Discussion"></a>

## Discussion

Call [isAbsoluteAltitudeAvailable](isabsolutealtitudeavailable%28%29.md) to verify that the current device supports absolute altitude updates before calling the `startAbsoluteAltitudeUpdates(to:withHandler:)` method.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [stopAbsoluteAltitudeUpdates](stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates](stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.
