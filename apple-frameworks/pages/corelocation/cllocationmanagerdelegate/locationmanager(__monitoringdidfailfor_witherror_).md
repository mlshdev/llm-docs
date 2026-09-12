> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:monitoringdidfailfor:witherror:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:monitoringdidfailfor:witherror:))

# locationManager(\_:monitoringDidFailFor:withError:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that a region monitoring error occurred.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, monitoringDidFailFor region: CLRegion?, withError error: any Error)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region for which the error occurred.
- `error`: An error object containing the error code that indicates why region monitoring failed.

<a id="Discussion"></a>

## Discussion

If an error occurs while trying to monitor a given region, the location manager sends this message to its delegate. Region monitoring might fail because the region itself cannot be monitored or because there was a more general failure in configuring the region monitoring service.

Although implementation of this method is optional, it is recommended that you implement it if you use region monitoring in your application.

## See Also

### Related Documentation

- [locationManager(\_:didFailWithError:)](locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.

# locationManager:monitoringDidFailForRegion:withError: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Tells the delegate that a region monitoring error occurred.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager monitoringDidFailForRegion:(CLRegion *) region withError:(NSError *) error;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `region`: The region for which the error occurred.
- `error`: An error object containing the error code that indicates why region monitoring failed.

<a id="Discussion"></a>

## Discussion

If an error occurs while trying to monitor a given region, the location manager sends this message to its delegate. Region monitoring might fail because the region itself cannot be monitored or because there was a more general failure in configuring the region monitoring service.

Although implementation of this method is optional, it is recommended that you implement it if you use region monitoring in your application.

## See Also

### Related Documentation

- [locationManager:didFailWithError:](locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.
