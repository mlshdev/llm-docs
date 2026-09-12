> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/ingetridestatusintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles providing the current status of the user’s ride.

## Declaration

```swift
func handle(intent: INGetRideStatusIntent, completion: @escaping @Sendable (INGetRideStatusIntentResponse) -> Void)
```

```swift
func handle(intent: INGetRideStatusIntent) async -> INGetRideStatusIntentResponse
```

## Parameters

- `intent`: The intent object for the user’s request. This object contains no additional information.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetRideStatusIntentResponse](../ingetridestatusintentresponse.md) object containing the current status of the user’s ride. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, retrieve the status of the user’s current ride, put that information into a response object, and call the provided `completion` block with the results.

When configuring your response object, specify the details of an active ride using an [INRideStatus](../inridestatus.md) object. Specify as much information about the ride as you can. A ride status object includes information about the vehicle and driver that are picking up the user’s party, the pickup and drop off locations, the price of the ride, and the current status of the ride. If the user does not have an active ride, specify `nil` in the [rideStatus](../ingetridestatusintentresponse/ridestatus.md) property of the response object. For more information about configuring the ride status object, see [INRideStatus](../inridestatus.md).

Maps may call this method multiple times after the user books a ride using your service to ensure that it is displaying the latest information in its interface. Your implementation should show the status of any current rides, including those booked from your parent app.

# handleGetRideStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles providing the current status of the user’s ride.

## Declaration

```objectivec
- (void) handleGetRideStatus:(INGetRideStatusIntent *) intent completion:(void (^)(INGetRideStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object for the user’s request. This object contains no additional information.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetRideStatusIntentResponse](../ingetridestatusintentresponse.md) object containing the current status of the user’s ride. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, retrieve the status of the user’s current ride, put that information into a response object, and call the provided `completion` block with the results.

When configuring your response object, specify the details of an active ride using an [INRideStatus](../inridestatus.md) object. Specify as much information about the ride as you can. A ride status object includes information about the vehicle and driver that are picking up the user’s party, the pickup and drop off locations, the price of the ride, and the current status of the ride. If the user does not have an active ride, specify `nil` in the [rideStatus](../ingetridestatusintentresponse/ridestatus.md) property of the response object. For more information about configuring the ride status object, see [INRideStatus](../inridestatus.md).

Maps may call this method multiple times after the user books a ride using your service to ensure that it is displaying the latest information in its interface. Your implementation should show the status of any current rides, including those booked from your parent app.
