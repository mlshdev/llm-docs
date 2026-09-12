> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/ingetvisualcodeintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Confirms whether you can provide the requested visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INGetVisualCodeIntent, completion: @escaping @Sendable (INGetVisualCodeIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INGetVisualCodeIntent) async -> INGetVisualCodeIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the properties of this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INGetVisualCodeIntentResponse](../ingetvisualcodeintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you’re able to produce the requested visual code. You might use this method to verify the user’s account credentials and verify that their account can handle the specified type of transaction.

At some point in your implementation, execute the provided handler block with a response object containing the status of whether you can provide the code. For more information about creating the response object, see [INGetVisualCodeIntentResponse](../ingetvisualcodeintentresponse.md).

# confirmGetVisualCode:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Confirms whether you can provide the requested visual code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmGetVisualCode:(INGetVisualCodeIntent *) intent completion:(void (^)(INGetVisualCodeIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the properties of this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INGetVisualCodeIntentResponse](../ingetvisualcodeintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you’re able to produce the requested visual code. You might use this method to verify the user’s account credentials and verify that their account can handle the specified type of transaction.

At some point in your implementation, execute the provided handler block with a response object containing the status of whether you can provide the code. For more information about creating the response object, see [INGetVisualCodeIntentResponse](../ingetvisualcodeintentresponse.md).
