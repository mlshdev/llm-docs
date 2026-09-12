> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insetradiostationintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSetRadioStationIntent, completion: @escaping @Sendable (INSetRadioStationIntentResponse) -> Void)
```

```swift
func handle(intent: INSetRadioStationIntent) async -> INSetRadioStationIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetRadioStationIntentResponse](../insetradiostationintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should change the radio station, which means communicating with the vehicle’s built-in entertainment system. When done, execute the provided block with a response object indicating whether or not the operation was successful.

# handleSetRadioStation:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSetRadioStation:(INSetRadioStationIntent *) intent completion:(void (^)(INSetRadioStationIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetRadioStationIntentResponse](../insetradiostationintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should change the radio station, which means communicating with the vehicle’s built-in entertainment system. When done, execute the provided block with a response object indicating whether or not the operation was successful.
