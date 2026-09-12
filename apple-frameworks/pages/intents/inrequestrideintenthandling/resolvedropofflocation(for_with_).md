> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintenthandling/resolvedropofflocation(for:with:)](https://developer.apple.com/documentation/intents/inrequestrideintenthandling/resolvedropofflocation(for:with:))

# resolveDropOffLocation(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the drop-off location for the ride.

## Declaration

```swift
optional func resolveDropOffLocation(for intent: INRequestRideIntent, with completion: @escaping @Sendable (INPlacemarkResolutionResult) -> Void)
```

```swift
optional func resolveDropOffLocation(for intent: INRequestRideIntent) async -> INPlacemarkResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, create a resolution object whose value contains the [CLPlacemark](../../corelocation/clplacemark.md) object you plan to use for the drop-off location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can drop off the user at the specified location. You may specify a drop-off location that is different than the one requested by the user. For example, you might specify a dedicated drop-off spot or an easy to spot point of interest that is near the user’s requested drop-off location. If you do not implement this method, SiriKit assumes that you are able to end the ride at the specified location.

If the drop-off location is outside of your service area, return a successful resolution from this method and then create an appropriate response object with the [INRequestRideIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](../inrequestrideintentresponsecode/failurerequiringapplaunchnoserviceinarea.md) code in your [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method.

Maps does not call this method. The Maps interface lets the user specify the drop-off location explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTime(for:with:)](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveRideOptionName(for:with:)](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySize(for:with:)](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.

# resolveDropOffLocationForRequestRide:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the drop-off location for the ride.

## Declaration

```objectivec
- (void) resolveDropOffLocationForRequestRide:(INRequestRideIntent *) intent withCompletion:(void (^)(INPlacemarkResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, create a resolution object whose value contains the [CLPlacemark](../../corelocation/clplacemark.md) object you plan to use for the drop-off location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can drop off the user at the specified location. You may specify a drop-off location that is different than the one requested by the user. For example, you might specify a dedicated drop-off spot or an easy to spot point of interest that is near the user’s requested drop-off location. If you do not implement this method, SiriKit assumes that you are able to end the ride at the specified location.

If the drop-off location is outside of your service area, return a successful resolution from this method and then create an appropriate response object with the [INRequestRideIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](../inrequestrideintentresponsecode/failurerequiringapplaunchnoserviceinarea.md) code in your [confirmRequestRide:completion:](confirm%28intent_completion_%29.md) method.

Maps does not call this method. The Maps interface lets the user specify the drop-off location explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocationForRequestRide:withCompletion:](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTimeForRequestRide:withCompletion:](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveRideOptionNameForRequestRide:withCompletion:](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySizeForRequestRide:withCompletion:](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.
