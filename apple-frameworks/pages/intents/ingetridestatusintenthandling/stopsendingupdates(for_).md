> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintenthandling/stopsendingupdates(for:)](https://developer.apple.com/documentation/intents/ingetridestatusintenthandling/stopsendingupdates(for:))

# stopSendingUpdates(for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Stops the delivery of status updates for the specified ride.

## Declaration

```swift
func stopSendingUpdates(for intent: INGetRideStatusIntent)
```

## Parameters

- `intent`: The intent object for which to return updates. Use the [identifier](../inintent/identifier.md) property of the intent to distinguish this request from others.

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

SiriKit asks you to stop delivering updates when the user no longer has any active rides. You define when a ride becomes inactive by setting the [rideStatus](../ingetridestatusintentresponse/ridestatus.md) property of your response object to `nil` when crafting your response. You can clear this property after ride completion or wait until after you have received payment and handled any feedback from the user. Until you do, continue to provide observer updates at regular intervals.

Your implementation of this method should remove any references to the previously registered observer object and cancel any timers or repeating tasks that you used to generate updates.

## See Also

### Providing Ride Status Updates

- [startSendingUpdates(for:to:)](startsendingupdates%28for_to_%29.md): Start delivering regular updates about the specified ride.

# stopSendingUpdatesForGetRideStatus: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Stops the delivery of status updates for the specified ride.

## Declaration

```objectivec
- (void) stopSendingUpdatesForGetRideStatus:(INGetRideStatusIntent *) intent;
```

## Parameters

- `intent`: The intent object for which to return updates. Use the [identifier](../inintent/identifier.md) property of the intent to distinguish this request from others.

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

SiriKit asks you to stop delivering updates when the user no longer has any active rides. You define when a ride becomes inactive by setting the [rideStatus](../ingetridestatusintentresponse/ridestatus.md) property of your response object to `nil` when crafting your response. You can clear this property after ride completion or wait until after you have received payment and handled any feedback from the user. Until you do, continue to provide observer updates at regular intervals.

Your implementation of this method should remove any references to the previously registered observer object and cancel any timers or repeating tasks that you used to generate updates.

## See Also

### Providing Ride Status Updates

- [startSendingUpdatesForGetRideStatus:toObserver:](startsendingupdates%28for_to_%29.md): Start delivering regular updates about the specified ride.
