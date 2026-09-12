> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/instartvideocallintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Provides information to hand off the call to your app.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
func handle(intent: INStartVideoCallIntent, completion: @escaping @Sendable (INStartVideoCallIntentResponse) -> Void)
```

```swift
func handle(intent: INStartVideoCallIntent) async -> INStartVideoCallIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The user has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartVideoCallIntentResponse](../instartvideocallintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to turn control of the call over to your app. Perform any final checks and create a response object with the information needed to initiate the call in your app. Don’t try to initiate the call directly from this method. When your response object contains the [INStartAudioCallIntentResponseCode.continueInApp](../instartaudiocallintentresponsecode/continueinapp.md) code, Siri automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.

# handleStartVideoCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Provides information to hand off the call to your app.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
- (void) handleStartVideoCall:(INStartVideoCallIntent *) intent completion:(void (^)(INStartVideoCallIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The user has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartVideoCallIntentResponse](../instartvideocallintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to turn control of the call over to your app. Perform any final checks and create a response object with the information needed to initiate the call in your app. Don’t try to initiate the call directly from this method. When your response object contains the [INStartAudioCallIntentResponseCodeContinueInApp](../instartaudiocallintentresponsecode/continueinapp.md) code, Siri automatically launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response object.
