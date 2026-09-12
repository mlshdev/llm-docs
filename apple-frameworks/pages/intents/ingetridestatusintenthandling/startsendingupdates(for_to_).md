> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintenthandling/startsendingupdates(for:to:)](https://developer.apple.com/documentation/intents/ingetridestatusintenthandling/startsendingupdates(for:to:))

# startSendingUpdates(for:to:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Start delivering regular updates about the specified ride.

## Declaration

```swift
func startSendingUpdates(for intent: INGetRideStatusIntent, to observer: any INGetRideStatusIntentResponseObserver)
```

## Parameters

- `intent`: The intent object indicating the ride for which to return updates. Use the [identifier](../inintent/identifier.md) property of the intent to distinguish this request from others.
- `observer`: The observer object to notify with the results. Store a reference to this object and call its methods when you have a status update to deliver. For more information about the methods to call, see [INGetRideStatusIntentResponseObserver](../ingetridestatusintentresponseobserver.md).

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it wants you to provide periodic status updates on a previously booked ride. Your implementation should store a reference to the provided observer object and schedule a repeating task to send updates to that observer. SiriKit expects you to send updates fairly frequently, with a minimum update rate of once every 10 seconds. You should continue delivering updates until the system calls the [stopSendingUpdates(for:)](stopsendingupdates%28for_%29.md) method.

This method gets called on an arbitrary thread of your Intents extension. If you generate updates using a timer, set up your timer on your extension’s main thread rather than on the current thread.

## See Also

### Providing Ride Status Updates

- [stopSendingUpdates(for:)](stopsendingupdates%28for_%29.md): Stops the delivery of status updates for the specified ride.

# startSendingUpdatesForGetRideStatus:toObserver: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Start delivering regular updates about the specified ride.

## Declaration

```objectivec
- (void) startSendingUpdatesForGetRideStatus:(INGetRideStatusIntent *) intent toObserver:(id<INGetRideStatusIntentResponseObserver>) observer;
```

## Parameters

- `intent`: The intent object indicating the ride for which to return updates. Use the [identifier](../inintent/identifier.md) property of the intent to distinguish this request from others.
- `observer`: The observer object to notify with the results. Store a reference to this object and call its methods when you have a status update to deliver. For more information about the methods to call, see [INGetRideStatusIntentResponseObserver](../ingetridestatusintentresponseobserver.md).

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it wants you to provide periodic status updates on a previously booked ride. Your implementation should store a reference to the provided observer object and schedule a repeating task to send updates to that observer. SiriKit expects you to send updates fairly frequently, with a minimum update rate of once every 10 seconds. You should continue delivering updates until the system calls the [stopSendingUpdatesForGetRideStatus:](stopsendingupdates%28for_%29.md) method.

This method gets called on an arbitrary thread of your Intents extension. If you generate updates using a timer, set up your timer on your extension’s main thread rather than on the current thread.

## See Also

### Providing Ride Status Updates

- [stopSendingUpdatesForGetRideStatus:](stopsendingupdates%28for_%29.md): Stops the delivery of status updates for the specified ride.
