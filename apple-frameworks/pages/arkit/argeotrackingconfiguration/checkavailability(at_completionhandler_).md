> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration/checkavailability(at:completionhandler:)](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/checkavailability(at:completionhandler:))

# checkAvailability(at:completionHandler:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Determines if geotracking supports a particular location.

## Declaration

```swift
class func checkAvailability(at coordinate: CLLocationCoordinate2D, completionHandler: @escaping (Bool, (any Error)?) -> Void)
```

## Parameters

- `coordinate`: The GPS location that the framework checks for availability.
- `completionHandler`: Code you supply that runs after the function returns. The closure takes a  Boolean argument that indicates whether geotracking is available.

<a id="Discussion"></a>

## Discussion

This function returns [false](https://developer.apple.com/documentation/swift/false) under the following circumstances:

- ARKit lacks localization imagery for the argument GPS coordinate.
- A network connection is unavailable to download localization imagery.
- The device lacks cellular (GPS) capability.

To determine availability at the user’s GPS coordinate, use [checkAvailability(completionHandler:)](checkavailability%28completionhandler_%29.md) instead.

For a list of supported areas and cities, see [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md).

## See Also

### Checking availability

- [checkAvailability(completionHandler:)](checkavailability%28completionhandler_%29.md): Determines if geotracking supports the user’s current location.

# checkAvailabilityAtCoordinate:completionHandler: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Determines if geotracking supports a particular location.

## Declaration

```objectivec
+ (void) checkAvailabilityAtCoordinate:(CLLocationCoordinate2D) coordinate completionHandler:(void (^)(BOOL isAvailable, NSError *error)) completionHandler;
```

## Parameters

- `coordinate`: The GPS location that the framework checks for availability.
- `completionHandler`: Code you supply that runs after the function returns. The closure takes a  Boolean argument that indicates whether geotracking is available.

<a id="Discussion"></a>

## Discussion

This function returns [false](https://developer.apple.com/documentation/swift/false) under the following circumstances:

- ARKit lacks localization imagery for the argument GPS coordinate.
- A network connection is unavailable to download localization imagery.
- The device lacks cellular (GPS) capability.

To determine availability at the user’s GPS coordinate, use [checkAvailabilityWithCompletionHandler:](checkavailability%28completionhandler_%29.md) instead.

For a list of supported areas and cities, see [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md).

## See Also

### Checking availability

- [checkAvailabilityWithCompletionHandler:](checkavailability%28completionhandler_%29.md): Determines if geotracking supports the user’s current location.
