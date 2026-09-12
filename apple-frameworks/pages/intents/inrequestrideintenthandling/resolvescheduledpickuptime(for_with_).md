> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintenthandling/resolvescheduledpickuptime(for:with:)](https://developer.apple.com/documentation/intents/inrequestrideintenthandling/resolvescheduledpickuptime(for:with:))

# resolveScheduledPickupTime(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the pickup time for the ride.

## Declaration

```swift
optional func resolveScheduledPickupTime(for intent: INRequestRideIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveScheduledPickupTime(for intent: INRequestRideIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, create a resolution object whose value contains the date and time when you plan to pick up the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can pick up the user at the requested time. You may specify a pickup time that does not precisely match the requested time. If the pickup time is close to the requested time, return a successful resolution. If the pickup time is earlier than the requested time or significantly later than the requested time, ask the user for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveDropOffLocation(for:with:)](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionName(for:with:)](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySize(for:with:)](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.

# resolveScheduledPickupTimeForRequestRide:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the pickup time for the ride.

## Declaration

```objectivec
- (void) resolveScheduledPickupTimeForRequestRide:(INRequestRideIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, create a resolution object whose value contains the date and time when you plan to pick up the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can pick up the user at the requested time. You may specify a pickup time that does not precisely match the requested time. If the pickup time is close to the requested time, return a successful resolution. If the pickup time is earlier than the requested time or significantly later than the requested time, ask the user for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocationForRequestRide:withCompletion:](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveDropOffLocationForRequestRide:withCompletion:](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionNameForRequestRide:withCompletion:](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySizeForRequestRide:withCompletion:](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.
