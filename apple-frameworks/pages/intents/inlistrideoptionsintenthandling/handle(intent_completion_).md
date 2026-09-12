> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inlistrideoptionsintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles providing the list of ride options.

## Declaration

```swift
func handle(intent: INListRideOptionsIntent, completion: @escaping @Sendable (INListRideOptionsIntentResponse) -> Void)
```

```swift
func handle(intent: INListRideOptionsIntent) async -> INListRideOptionsIntentResponse
```

## Parameters

- `intent`: The intent object containing details of the request. Use the information in this object to identify available ride options for the user.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INListRideOptionsIntentResponse](../inlistrideoptionsintentresponse.md) object containing the ride options available to the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, compile a list of available ride options and create [INRideOption](../inrideoption.md) objects for each one. Ride option names must be unique so that you can correctly identify the selected option later. Put the ride options into your response object and call the provided `completion` block with the results.

For more information about configuring ride options, see [INRideOption](../inrideoption.md).

# handleListRideOptions:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles providing the list of ride options.

## Declaration

```objectivec
- (void) handleListRideOptions:(INListRideOptionsIntent *) intent completion:(void (^)(INListRideOptionsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details of the request. Use the information in this object to identify available ride options for the user.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INListRideOptionsIntentResponse](../inlistrideoptionsintentresponse.md) object containing the ride options available to the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, compile a list of available ride options and create [INRideOption](../inrideoption.md) objects for each one. Ride option names must be unique so that you can correctly identify the selected option later. Put the ride options into your response object and call the provided `completion` block with the results.

For more information about configuring ride options, see [INRideOption](../inrideoption.md).
