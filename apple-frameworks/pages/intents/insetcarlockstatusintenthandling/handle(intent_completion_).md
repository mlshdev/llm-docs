> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insetcarlockstatusintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles locking or unlocking the car.

## Declaration

```swift
func handle(intent: INSetCarLockStatusIntent, completion: @escaping @Sendable (INSetCarLockStatusIntentResponse) -> Void)
```

```swift
func handle(intent: INSetCarLockStatusIntent) async -> INSetCarLockStatusIntentResponse
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INSetCarLockStatusIntentResponse](../insetcarlockstatusintentresponse.md) object you create, containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must lock or unlock the user’s car. If you are unable to lock or unlock the car, return a response object whose result code indicates the reason for the failure.

# handleSetCarLockStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles locking or unlocking the car.

## Declaration

```objectivec
- (void) handleSetCarLockStatus:(INSetCarLockStatusIntent *) intent completion:(void (^)(INSetCarLockStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INSetCarLockStatusIntentResponse](../insetcarlockstatusintentresponse.md) object you create, containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must lock or unlock the user’s car. If you are unable to lock or unlock the car, return a response object whose result code indicates the reason for the failure.
