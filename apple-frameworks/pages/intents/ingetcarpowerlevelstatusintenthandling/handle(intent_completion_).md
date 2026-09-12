> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Accesses and returns the car’s current power level status.

## Declaration

```swift
func handle(intent: INGetCarPowerLevelStatusIntent, completion: @escaping @Sendable (INGetCarPowerLevelStatusIntentResponse) -> Void)
```

```swift
func handle(intent: INGetCarPowerLevelStatusIntent) async -> INGetCarPowerLevelStatusIntentResponse
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarPowerLevelStatusIntentResponse](../ingetcarpowerlevelstatusintentresponse.md) object you create to report the car’s current power level status. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must access and return the current power status data from the car. If you are unable to access the data, return a response object whose result code indicates the reason for the failure.

# handleGetCarPowerLevelStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Accesses and returns the car’s current power level status.

## Declaration

```objectivec
- (void) handleGetCarPowerLevelStatus:(INGetCarPowerLevelStatusIntent *) intent completion:(void (^)(INGetCarPowerLevelStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarPowerLevelStatusIntentResponse](../ingetcarpowerlevelstatusintentresponse.md) object you create to report the car’s current power level status. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must access and return the current power status data from the car. If you are unable to access the data, return a response object whose result code indicates the reason for the failure.
