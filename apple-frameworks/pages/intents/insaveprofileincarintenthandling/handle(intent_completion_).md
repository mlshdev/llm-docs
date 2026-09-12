> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insaveprofileincarintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles saving any settings to the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSaveProfileInCarIntent, completion: @escaping @Sendable (INSaveProfileInCarIntentResponse) -> Void)
```

```swift
func handle(intent: INSaveProfileInCarIntent) async -> INSaveProfileInCarIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSaveProfileInCarIntentResponse](../insaveprofileincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement implementation of this method should communicate with the vehicle and save the settings under the specified profile name or index number. You’re responsible for choosing which settings to save. When done, execute the provided block with a response object indicating whether or not the operation was successful.

# handleSaveProfileInCar:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles saving any settings to the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSaveProfileInCar:(INSaveProfileInCarIntent *) intent completion:(void (^)(INSaveProfileInCarIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSaveProfileInCarIntentResponse](../insaveprofileincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement implementation of this method should communicate with the vehicle and save the settings under the specified profile name or index number. You’re responsible for choosing which settings to save. When done, execute the provided block with a response object indicating whether or not the operation was successful.
