> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insetprofileincarintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Confirms whether you can restore the settings from the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INSetProfileInCarIntent, completion: @escaping @Sendable (INSetProfileInCarIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INSetProfileInCarIntent) async -> INSetProfileInCarIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetProfileInCarIntentResponse](../insetprofileincarintentresponse.md) object containing the status of whether your app is able to restore settings from the specified profile. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can restore settings from the specified profile. For example, you might use this method to verify that you have an active connection to the vehicle and that the specified profile is valid. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to make the change.

# confirmSetProfileInCar:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Confirms whether you can restore the settings from the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmSetProfileInCar:(INSetProfileInCarIntent *) intent completion:(void (^)(INSetProfileInCarIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetProfileInCarIntentResponse](../insetprofileincarintentresponse.md) object containing the status of whether your app is able to restore settings from the specified profile. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can restore settings from the specified profile. For example, you might use this method to verify that you have an active connection to the vehicle and that the specified profile is valid. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to make the change.
