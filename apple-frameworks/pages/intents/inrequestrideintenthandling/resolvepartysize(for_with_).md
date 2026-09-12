> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintenthandling/resolvepartysize(for:with:)](https://developer.apple.com/documentation/intents/inrequestrideintenthandling/resolvepartysize(for:with:))

# resolvePartySize(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the number of passengers for the ride.

## Declaration

```swift
optional func resolvePartySize(for intent: INRequestRideIntent, with completion: @escaping @Sendable (INIntegerResolutionResult) -> Void)
```

```swift
optional func resolvePartySize(for intent: INRequestRideIntent) async -> INIntegerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, specify an integer value containing the number of people that the proposed ride can accommodate. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that the chosen vehicle type can accommodate the specified number of passengers. If the user’s party is too big to fit in the same vehicle, return a response indicating the number of passengers that you can accommodate.

If you do not implement this method, Siri assumes that you are able to book the ride using the information provided by the user.

Maps does not call this method. The Maps interface lets the user specify the party size explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTime(for:with:)](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocation(for:with:)](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionName(for:with:)](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.

# resolvePartySizeForRequestRide:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the number of passengers for the ride.

## Declaration

```objectivec
- (void) resolvePartySizeForRequestRide:(INRequestRideIntent *) intent withCompletion:(void (^)(INIntegerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, specify an integer value containing the number of people that the proposed ride can accommodate. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that the chosen vehicle type can accommodate the specified number of passengers. If the user’s party is too big to fit in the same vehicle, return a response indicating the number of passengers that you can accommodate.

If you do not implement this method, Siri assumes that you are able to book the ride using the information provided by the user.

Maps does not call this method. The Maps interface lets the user specify the party size explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocationForRequestRide:withCompletion:](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTimeForRequestRide:withCompletion:](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocationForRequestRide:withCompletion:](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionNameForRequestRide:withCompletion:](resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
