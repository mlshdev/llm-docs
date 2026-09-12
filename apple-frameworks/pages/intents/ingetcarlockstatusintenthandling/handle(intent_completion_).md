> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/ingetcarlockstatusintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Accesses and returns the current status of the car’s locks.

## Declaration

```swift
func handle(intent: INGetCarLockStatusIntent, completion: @escaping @Sendable (INGetCarLockStatusIntentResponse) -> Void)
```

```swift
func handle(intent: INGetCarLockStatusIntent) async -> INGetCarLockStatusIntentResponse
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarLockStatusIntentResponse](../ingetcarlockstatusintentresponse.md) object you create to report the current status of the car’s locks. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must access and return the current status of the car’s locks. If you are unable to access the data, return a response object whose result code indicates the reason for the failure.

# handleGetCarLockStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Accesses and returns the current status of the car’s locks.

## Declaration

```objectivec
- (void) handleGetCarLockStatus:(INGetCarLockStatusIntent *) intent completion:(void (^)(INGetCarLockStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: An intent object that contains the full details of the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: An [INGetCarLockStatusIntentResponse](../ingetcarlockstatusintentresponse.md) object you create to report the current status of the car’s locks. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must access and return the current status of the car’s locks. If you are unable to access the data, return a response object whose result code indicates the reason for the failure.
