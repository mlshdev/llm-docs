> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/requestlocation()](https://developer.apple.com/documentation/corelocation/cllocationmanager/requestlocation())

# requestLocation() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Requests the one-time delivery of the user’s current location.

## Declaration

```swift
func requestLocation()
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

This method returns immediately. Calling it causes the location manager to obtain a location fix (which may take several seconds) and call the delegate’s [locationManager(\_:didUpdateLocations:)](../cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) method with the result. The location fix is obtained at the accuracy level indicated by the [desiredAccuracy](desiredaccuracy.md) property. Only one location fix is reported to the delegate, after which location services are stopped. If a location fix cannot be determined in a timely manner, the location manager calls the delegate’s [locationManager(\_:didFailWithError:)](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) method instead and reports a [CLError.Code.locationUnknown](../clerror-swift.struct/code/locationunknown.md) error.

Use this method when you want the user’s current location but do not need to leave location services running. This method starts location services long enough to return a result or report an error and then stops them again. Calling the [startUpdatingLocation()](startupdatinglocation%28%29.md) or  [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md) method cancels any pending request made using this method. Calling this method while location services are already running does nothing. To cancel a pending request, call the [stopUpdatingLocation()](stopupdatinglocation%28%29.md) method.

If obtaining the desired accuracy would take too long, the location manager delivers a less accurate location value rather than reporting an error.

When using this method, the associated delegate must implement the [locationManager(\_:didUpdateLocations:)](../cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) and [locationManager(\_:didFailWithError:)](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) methods. Failure to do so is a programmer error.

## See Also

### Running the standard location service

- [startUpdatingLocation()](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation()](stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.

# requestLocation (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Requests the one-time delivery of the user’s current location.

## Declaration

```objectivec
- (void) requestLocation;
```

## Mentioned In

- [Getting the current location of a device](../getting-the-current-location-of-a-device.md)

<a id="Discussion"></a>

## Discussion

This method returns immediately. Calling it causes the location manager to obtain a location fix (which may take several seconds) and call the delegate’s [locationManager:didUpdateLocations:](../cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) method with the result. The location fix is obtained at the accuracy level indicated by the [desiredAccuracy](desiredaccuracy.md) property. Only one location fix is reported to the delegate, after which location services are stopped. If a location fix cannot be determined in a timely manner, the location manager calls the delegate’s [locationManager:didFailWithError:](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) method instead and reports a [kCLErrorLocationUnknown](../clerror-swift.struct/code/locationunknown.md) error.

Use this method when you want the user’s current location but do not need to leave location services running. This method starts location services long enough to return a result or report an error and then stops them again. Calling the [startUpdatingLocation](startupdatinglocation%28%29.md) or  [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md) method cancels any pending request made using this method. Calling this method while location services are already running does nothing. To cancel a pending request, call the [stopUpdatingLocation](stopupdatinglocation%28%29.md) method.

If obtaining the desired accuracy would take too long, the location manager delivers a less accurate location value rather than reporting an error.

When using this method, the associated delegate must implement the [locationManager:didUpdateLocations:](../cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) and [locationManager:didFailWithError:](../cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md) methods. Failure to do so is a programmer error.

## See Also

### Running the standard location service

- [startUpdatingLocation](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation](stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.
