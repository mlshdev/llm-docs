> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintenthandling/resolverideoptionname(for:with:)](https://developer.apple.com/documentation/intents/inrequestrideintenthandling/resolverideoptionname(for:with:))

# resolveRideOptionName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s selected ride option.

## Declaration

```swift
optional func resolveRideOptionName(for intent: INRequestRideIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveRideOptionName(for intent: INRequestRideIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, specify an [NSString](../../foundation/nsstring.md) object that corresponds to the [name](../inrideoption/name.md) property of the [INRideOption](../inrideoption.md) object you use to describe one of your company’s ride options. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to identify the type of ride that the user requested. Siri places the name of the ride option in the intent parameter. That name corresponds either to a ride option name defined in your global vocabulary file or a spoken term that Siri interpreted as the preferred ride option. Use the provided information to ensure that you recognize the vehicle type and that a vehicle of that type is available. If the specified vehicle type is not available, create a resolution result containing a different ride option and ask the user to confirm the new value.

If you do not implement this method, Siri assumes that you are able to book the ride using the information provided by the user.

Maps does not call this method. The Maps interface lets the user choose a ride option explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTime(for:with:)](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocation(for:with:)](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolvePartySize(for:with:)](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.

# resolveRideOptionNameForRequestRide:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s selected ride option.

## Declaration

```objectivec
- (void) resolveRideOptionNameForRequestRide:(INRequestRideIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing information about your proposed resolution. For successful resolutions, specify an [NSString](../../foundation/nsstring.md) object that corresponds to the [name](../inrideoption/name.md) property of the [INRideOption](../inrideoption.md) object you use to describe one of your company’s ride options. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to identify the type of ride that the user requested. Siri places the name of the ride option in the intent parameter. That name corresponds either to a ride option name defined in your global vocabulary file or a spoken term that Siri interpreted as the preferred ride option. Use the provided information to ensure that you recognize the vehicle type and that a vehicle of that type is available. If the specified vehicle type is not available, create a resolution result containing a different ride option and ask the user to confirm the new value.

If you do not implement this method, Siri assumes that you are able to book the ride using the information provided by the user.

Maps does not call this method. The Maps interface lets the user choose a ride option explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocationForRequestRide:withCompletion:](resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTimeForRequestRide:withCompletion:](resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocationForRequestRide:withCompletion:](resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolvePartySizeForRequestRide:withCompletion:](resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.
