> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insaveprofileincarintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Confirms whether you can save the settings to the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INSaveProfileInCarIntent, completion: @escaping @Sendable (INSaveProfileInCarIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INSaveProfileInCarIntent) async -> INSaveProfileInCarIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSaveProfileInCarIntentResponse](../insaveprofileincarintentresponse.md) object containing the status of whether your app is able to save settings to a profile. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can save settings to a profile. For example, you might use this method to verify that you’ve an active connection to the vehicle or that you can use the specified profile name when saving the settings. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to make the change.

# confirmSaveProfileInCar:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Confirms whether you can save the settings to the designated profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmSaveProfileInCar:(INSaveProfileInCarIntent *) intent completion:(void (^)(INSaveProfileInCarIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSaveProfileInCarIntentResponse](../insaveprofileincarintentresponse.md) object containing the status of whether your app is able to save settings to a profile. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can save settings to a profile. For example, you might use this method to verify that you’ve an active connection to the vehicle or that you can use the specified profile name when saving the settings. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to make the change.
