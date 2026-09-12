> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/stoprelativealtitudeupdates()](https://developer.apple.com/documentation/coremotion/cmaltimeter/stoprelativealtitudeupdates())

# stopRelativeAltitudeUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the delivery of relative altitude data for the altimeter object.

## Declaration

```swift
func stopRelativeAltitudeUpdates()
```

<a id="Discussion"></a>

## Discussion

Calling this method ends the delivery of relative altitude events and releases the references to the operation queue and block that you specified in the [startRelativeAltitudeUpdates(to:withHandler:)](startrelativealtitudeupdates%28to_withhandler_%29.md) method. If you haven’t started delivering data, or if you’ve already called [stopRelativeAltitudeUpdates()](stoprelativealtitudeupdates%28%29.md), this method does nothing.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdates(to:withHandler:)](startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates()](stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdates(to:withHandler:)](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.

# stopRelativeAltitudeUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the delivery of relative altitude data for the altimeter object.

## Declaration

```objectivec
- (void) stopRelativeAltitudeUpdates;
```

<a id="Discussion"></a>

## Discussion

Calling this method ends the delivery of relative altitude events and releases the references to the operation queue and block that you specified in the [startRelativeAltitudeUpdatesToQueue:withHandler:](startrelativealtitudeupdates%28to_withhandler_%29.md) method. If you haven’t started delivering data, or if you’ve already called [stopRelativeAltitudeUpdates](stoprelativealtitudeupdates%28%29.md), this method does nothing.

## See Also

### Starting and Stopping Altitude Updates

- [startAbsoluteAltitudeUpdatesToQueue:withHandler:](startabsolutealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of absolute altitude data to the specified handler.
- [stopAbsoluteAltitudeUpdates](stopabsolutealtitudeupdates%28%29.md): Stops the delivery of absolute altitude data for this altimeter object.
- [CMAbsoluteAltitudeHandler](../cmabsolutealtitudehandler.md): A block for receiving absolute altitude data.
- [startRelativeAltitudeUpdatesToQueue:withHandler:](startrelativealtitudeupdates%28to_withhandler_%29.md): Starts the delivery of relative altitude data to the specified handler.
- [CMAltitudeHandler](../cmaltitudehandler.md): A block for receiving relative altitude data.
