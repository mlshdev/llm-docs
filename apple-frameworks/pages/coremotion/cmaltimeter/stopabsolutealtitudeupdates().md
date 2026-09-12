> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/stopabsolutealtitudeupdates()](https://developer.apple.com/documentation/coremotion/cmaltimeter/stopabsolutealtitudeupdates())

# stopAbsoluteAltitudeUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Stops the delivery of absolute altitude data for this altimeter object.

## Declaration

```swift
func stopAbsoluteAltitudeUpdates()
```

<a id="Discussion"></a>

## Discussion

Calling this method ends the delivery of absolute altitude events and releases the references to the operation queue and block that you specified in the [startAbsoluteAltitudeUpdates(to:withHandler:)](startabsolutealtitudeupdates%28to_withhandler_%29.md) method. If you haven’t started delivering data, or if you’ve already called `stopAbsoluteAltitudeUpdates()`, this method does nothing.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdates(to:withHandler:)](startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdates(to:withHandler:)](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates()](stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.

# stopAbsoluteAltitudeUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Stops the delivery of absolute altitude data for this altimeter object.

## Declaration

```objectivec
- (void) stopAbsoluteAltitudeUpdates;
```

<a id="Discussion"></a>

## Discussion

Calling this method ends the delivery of absolute altitude events and releases the references to the operation queue and block that you specified in the [startAbsoluteAltitudeUpdatesToQueue:withHandler:](startabsolutealtitudeupdates%28to_withhandler_%29.md) method. If you haven’t started delivering data, or if you’ve already called `stopAbsoluteAltitudeUpdates()`, this method does nothing.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdatesToQueue:withHandler:](startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [stopRelativeAltitudeUpdates](stoprelativealtitudeupdates%28%29.md): Stops the delivery of relative altitude data for the altimeter object.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.
