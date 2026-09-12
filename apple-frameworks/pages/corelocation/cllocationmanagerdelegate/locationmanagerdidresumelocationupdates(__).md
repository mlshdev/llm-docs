> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanagerdidresumelocationupdates(_:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanagerdidresumelocationupdates(_:))

# locationManagerDidResumeLocationUpdates(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the delivery of location updates has resumed.

## Declaration

```swift
optional func locationManagerDidResumeLocationUpdates(_ manager: CLLocationManager)
```

## Parameters

- `manager`: The location manager that resumed the delivery of events.

<a id="Discussion"></a>

## Discussion

When you restart location services after an automatic pause, Core Location calls this method to notify your app that services have resumed. You are responsible for restarting location services in your app. Core Location does not resume updates automatically after it pauses them. For tips on how to restart location services when a pause occurs, see the discussion of the [locationManagerDidPauseLocationUpdates(\_:)](locationmanagerdidpauselocationupdates%28__%29.md) method.

## See Also

### Pausing location updates

- [locationManagerDidPauseLocationUpdates(\_:)](locationmanagerdidpauselocationupdates%28__%29.md): Tells the delegate that location updates were paused.

# locationManagerDidResumeLocationUpdates: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the delivery of location updates has resumed.

## Declaration

```objectivec
- (void) locationManagerDidResumeLocationUpdates:(CLLocationManager *) manager;
```

## Parameters

- `manager`: The location manager that resumed the delivery of events.

<a id="Discussion"></a>

## Discussion

When you restart location services after an automatic pause, Core Location calls this method to notify your app that services have resumed. You are responsible for restarting location services in your app. Core Location does not resume updates automatically after it pauses them. For tips on how to restart location services when a pause occurs, see the discussion of the [locationManagerDidPauseLocationUpdates:](locationmanagerdidpauselocationupdates%28__%29.md) method.

## See Also

### Pausing location updates

- [locationManagerDidPauseLocationUpdates:](locationmanagerdidpauselocationupdates%28__%29.md): Tells the delegate that location updates were paused.
