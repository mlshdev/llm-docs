> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can access the car’s power level.

## Declaration

```swift
optional func confirm(intent: INGetCarPowerLevelStatusIntent, completion: @escaping @Sendable (INGetCarPowerLevelStatusIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INGetCarPowerLevelStatusIntent) async -> INGetCarPowerLevelStatusIntentResponse
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarPowerLevelStatusIntentResponse](../ingetcarpowerlevelstatusintentresponse.md) object that indicates whether your app is able to access the car’s power level status. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can access the car’s power level status given the data in the provided intent. For example, if the app needs to remotely access the car, you should validate that the car is accessible. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to access the data.

# confirmGetCarPowerLevelStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can access the car’s power level.

## Declaration

```objectivec
- (void) confirmGetCarPowerLevelStatus:(INGetCarPowerLevelStatusIntent *) intent completion:(void (^)(INGetCarPowerLevelStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarPowerLevelStatusIntentResponse](../ingetcarpowerlevelstatusintentresponse.md) object that indicates whether your app is able to access the car’s power level status. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can access the car’s power level status given the data in the provided intent. For example, if the app needs to remotely access the car, you should validate that the car is accessible. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to access the data.
