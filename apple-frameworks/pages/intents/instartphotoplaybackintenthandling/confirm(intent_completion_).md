> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/instartphotoplaybackintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Confirms whether you can perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INStartPhotoPlaybackIntent, completion: @escaping @Sendable (INStartPhotoPlaybackIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INStartPhotoPlaybackIntent) async -> INStartPhotoPlaybackIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler objects has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartPhotoPlaybackIntentResponse](../instartphotoplaybackintentresponse.md) object containing the status of whether your app is able to perform the search. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can perform the search using the given parameters. If the search involves contacting a remote server, you should also validate that the server is available. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to perform the search.

# confirmStartPhotoPlayback:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Confirms whether you can perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmStartPhotoPlayback:(INStartPhotoPlaybackIntent *) intent completion:(void (^)(INStartPhotoPlaybackIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler objects has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INStartPhotoPlaybackIntentResponse](../instartphotoplaybackintentresponse.md) object containing the status of whether your app is able to perform the search. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can perform the search using the given parameters. If the search involves contacting a remote server, you should also validate that the server is available. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to perform the search.
