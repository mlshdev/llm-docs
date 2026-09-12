> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the climate control settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INSetClimateSettingsInCarIntent, completion: @escaping @Sendable (INSetClimateSettingsInCarIntentResponse) -> Void)
```

```swift
func handle(intent: INSetClimateSettingsInCarIntent) async -> INSetClimateSettingsInCarIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetClimateSettingsInCarIntentResponse](../insetclimatesettingsincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should communicate with the vehicle and update the vehicle’s climate settings using the information in the `intent` object. When done, execute the provided block with a response object indicating whether or not the operation was successful.

# handleSetClimateSettingsInCar:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Handles changing the climate control settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleSetClimateSettingsInCar:(INSetClimateSettingsInCarIntent *) intent completion:(void (^)(INSetClimateSettingsInCarIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSetClimateSettingsInCarIntentResponse](../insetclimatesettingsincarintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should communicate with the vehicle and update the vehicle’s climate settings using the information in the `intent` object. When done, execute the provided block with a response object indicating whether or not the operation was successful.
