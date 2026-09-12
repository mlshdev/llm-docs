> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/ingetcarlockstatusintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can access the status of the car’s locks.

## Declaration

```swift
optional func confirm(intent: INGetCarLockStatusIntent, completion: @escaping @Sendable (INGetCarLockStatusIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INGetCarLockStatusIntent) async -> INGetCarLockStatusIntentResponse
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarLockStatusIntentResponse](../ingetcarlockstatusintentresponse.md) object that indicates whether your app is able to access the status of the car’s locks. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can access the status of the car’s locks given the data in the provided intent. For example, if the app needs to remotely access the car, you should validate that the car is accessible. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to access the data.

# confirmGetCarLockStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms that you can access the status of the car’s locks.

## Declaration

```objectivec
- (void) confirmGetCarLockStatus:(INGetCarLockStatusIntent *) intent completion:(void (^)(INGetCarLockStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarLockStatusIntentResponse](../ingetcarlockstatusintentresponse.md) object that indicates whether your app is able to access the status of the car’s locks. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can access the status of the car’s locks given the data in the provided intent. For example, if the app needs to remotely access the car, you should validate that the car is accessible. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to access the data.
