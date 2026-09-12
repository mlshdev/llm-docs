> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insetseatsettingsincarintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the seat settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSetSeatSettingsInCarIntent, completion: @escaping @Sendable (INSetSeatSettingsInCarIntentResponse) -> Void)
```

```swift
func handle(intent: INSetSeatSettingsInCarIntent) async -> INSetSeatSettingsInCarIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetSeatSettingsInCarIntentResponse](../insetseatsettingsincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should communicate the seat setting changes to the vehicle. When done, execute the provided block with a response object indicating whether or not the operation was successful.

# handleSetSeatSettingsInCar:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the seat settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSetSeatSettingsInCar:(INSetSeatSettingsInCarIntent *) intent completion:(void (^)(INSetSeatSettingsInCarIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetSeatSettingsInCarIntentResponse](../insetseatsettingsincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should communicate the seat setting changes to the vehicle. When done, execute the provided block with a response object indicating whether or not the operation was successful.
