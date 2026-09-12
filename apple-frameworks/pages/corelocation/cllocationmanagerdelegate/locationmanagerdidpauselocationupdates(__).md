> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanagerdidpauselocationupdates(_:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanagerdidpauselocationupdates(_:))

# locationManagerDidPauseLocationUpdates(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that location updates were paused.

## Declaration

```swift
optional func locationManagerDidPauseLocationUpdates(_ manager: CLLocationManager)
```

## Parameters

- `manager`: The location manager object that paused the delivery of events.

<a id="Discussion"></a>

## Discussion

When the location manager detects that the device’s location is not changing, it can pause the delivery of updates in order to shut down the appropriate hardware and save power. When it does this, it calls this method to let your app know that this has happened.

After a pause occurs, it is your responsibility to restart location services again at an appropriate time. You might use your implementation of this method to start region monitoring at the user’s current location or enable the visits location service to determine when the user starts moving again. Another alternative is to restart location services immediately with a reduced accuracy (which can save power) and then return to a greater accuracy only after the user starts moving again.

## See Also

### Pausing location updates

- [locationManagerDidResumeLocationUpdates(\_:)](locationmanagerdidresumelocationupdates%28__%29.md): Tells the delegate that the delivery of location updates has resumed.

# locationManagerDidPauseLocationUpdates: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that location updates were paused.

## Declaration

```objectivec
- (void) locationManagerDidPauseLocationUpdates:(CLLocationManager *) manager;
```

## Parameters

- `manager`: The location manager object that paused the delivery of events.

<a id="Discussion"></a>

## Discussion

When the location manager detects that the device’s location is not changing, it can pause the delivery of updates in order to shut down the appropriate hardware and save power. When it does this, it calls this method to let your app know that this has happened.

After a pause occurs, it is your responsibility to restart location services again at an appropriate time. You might use your implementation of this method to start region monitoring at the user’s current location or enable the visits location service to determine when the user starts moving again. Another alternative is to restart location services immediately with a reduced accuracy (which can save power) and then return to a greater accuracy only after the user starts moving again.

## See Also

### Pausing location updates

- [locationManagerDidResumeLocationUpdates:](locationmanagerdidresumelocationupdates%28__%29.md): Tells the delegate that the delivery of location updates has resumed.
