> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchforphotosintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles searching the photos and returning the number of results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSearchForPhotosIntent, completion: @escaping @Sendable (INSearchForPhotosIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchForPhotosIntent) async -> INSearchForPhotosIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForPhotosIntentResponse](../insearchforphotosintentresponse.md) object you create to report the status of the request. You also use this object to specify the number of photos that matched the search parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search and return the number of matching photos in the response. If you aren’t to perform the search, return a response object whose result code indicates the reason for the failure. Upon returning a successful response, Siri launches your display the photos.

# handleSearchForPhotos:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles searching the photos and returning the number of results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSearchForPhotos:(INSearchForPhotosIntent *) intent completion:(void (^)(INSearchForPhotosIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForPhotosIntentResponse](../insearchforphotosintentresponse.md) object you create to report the status of the request. You also use this object to specify the number of photos that matched the search parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search and return the number of matching photos in the response. If you aren’t to perform the search, return a response object whose result code indicates the reason for the failure. Upon returning a successful response, Siri launches your display the photos.
