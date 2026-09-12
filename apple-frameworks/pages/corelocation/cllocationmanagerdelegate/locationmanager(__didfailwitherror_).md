> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didfailwitherror:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didfailwitherror:))

# locationManager(\_:didFailWithError:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the location manager was unable to retrieve a location value.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didFailWithError error: any Error)
```

## Parameters

- `manager`: The location manager object that was unable to retrieve the location.
- `error`: The error object containing the reason the location or heading could not be retrieved.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, Core Location throws an exception when attempting to use location services.

The location manager calls this method when it encounters an error trying to get the location or heading data. If the location service is unable to retrieve a location right away, it reports a [CLError.Code.locationUnknown](../clerror-swift.struct/code/locationunknown.md) error and keeps trying. In such a situation, you can simply ignore the error and wait for a new event. If a heading could not be determined because of strong interference from nearby magnetic fields, this method returns [CLError.Code.headingFailure](../clerror-swift.struct/code/headingfailure.md).

If the user denies your app’s use of the location service, this method reports a [CLError.Code.denied](../clerror-swift.struct/code/denied.md) error. Upon receiving such an error, you should stop the location service.

## See Also

### Related Documentation

- [locationManager(\_:monitoringDidFailFor:withError:)](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.

# locationManager:didFailWithError: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the location manager was unable to retrieve a location value.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didFailWithError:(NSError *) error;
```

## Parameters

- `manager`: The location manager object that was unable to retrieve the location.
- `error`: The error object containing the reason the location or heading could not be retrieved.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, Core Location throws an exception when attempting to use location services.

The location manager calls this method when it encounters an error trying to get the location or heading data. If the location service is unable to retrieve a location right away, it reports a [kCLErrorLocationUnknown](../clerror-swift.struct/code/locationunknown.md) error and keeps trying. In such a situation, you can simply ignore the error and wait for a new event. If a heading could not be determined because of strong interference from nearby magnetic fields, this method returns [kCLErrorHeadingFailure](../clerror-swift.struct/code/headingfailure.md).

If the user denies your app’s use of the location service, this method reports a [kCLErrorDenied](../clerror-swift.struct/code/denied.md) error. Upon receiving such an error, you should stop the location service.

## See Also

### Related Documentation

- [locationManager:monitoringDidFailForRegion:withError:](locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
