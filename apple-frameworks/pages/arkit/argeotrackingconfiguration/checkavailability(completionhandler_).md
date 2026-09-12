> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration/checkavailability(completionhandler:)](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/checkavailability(completionhandler:))

# checkAvailability(completionHandler:) (Swift)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Determines if geotracking supports the user’s current location.

## Declaration

```swift
class func checkAvailability(completionHandler: @escaping (Bool, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: Code you supply that runs after the function returns. The closure takes a Boolean argument that indicates whether geotracking is available.

<a id="Discussion"></a>

## Discussion

This function returns [false](https://developer.apple.com/documentation/swift/false) under the following circumstances:

- ARKit lacks localization imagery for the user’s geographic position.
- A network connection is unavailable to download localization imagery.
- The device lacks cellular (GPS) capability.

To determine availability at a different location than the device’s current location, call [checkAvailability(at:completionHandler:)](checkavailability%28at_completionhandler_%29.md) instead.

For a list of supported areas and cities, see [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md).

## See Also

### Checking availability

- [checkAvailability(at:completionHandler:)](checkavailability%28at_completionhandler_%29.md): Determines if geotracking supports a particular location.

# checkAvailabilityWithCompletionHandler: (Objective-C)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Determines if geotracking supports the user’s current location.

## Declaration

```objectivec
+ (void) checkAvailabilityWithCompletionHandler:(void (^)(BOOL isAvailable, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: Code you supply that runs after the function returns. The closure takes a Boolean argument that indicates whether geotracking is available.

<a id="Discussion"></a>

## Discussion

This function returns [false](https://developer.apple.com/documentation/swift/false) under the following circumstances:

- ARKit lacks localization imagery for the user’s geographic position.
- A network connection is unavailable to download localization imagery.
- The device lacks cellular (GPS) capability.

To determine availability at a different location than the device’s current location, call [checkAvailabilityAtCoordinate:completionHandler:](checkavailability%28at_completionhandler_%29.md) instead.

For a list of supported areas and cities, see [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md).

## See Also

### Checking availability

- [checkAvailabilityAtCoordinate:completionHandler:](checkavailability%28at_completionhandler_%29.md): Determines if geotracking supports a particular location.
