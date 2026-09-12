> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/instartcallintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Confirms whether your app is able to initiate the call.

## Declaration

```swift
optional func confirm(intent: INStartCallIntent, completion: @escaping @Sendable (INStartCallIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INStartCallIntent) async -> INStartCallIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartAudioCallIntentResponse](../instartaudiocallintentresponse.md) object that contains the status of whether your app is able to make the call. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to initiate the call to the specified users. For example, checking the availability of your calling network, verifying that the current user is able to place the call, or performing other tasks specific to your app.

# confirmStartCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Confirms whether your app is able to initiate the call.

## Declaration

```objectivec
- (void) confirmStartCall:(INStartCallIntent *) intent completion:(void (^)(INStartCallIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by the user.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartAudioCallIntentResponse](../instartaudiocallintentresponse.md) object that contains the status of whether your app is able to make the call. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method validates that your app is able to initiate the call to the specified users. For example, checking the availability of your calling network, verifying that the current user is able to place the call, or performing other tasks specific to your app.
