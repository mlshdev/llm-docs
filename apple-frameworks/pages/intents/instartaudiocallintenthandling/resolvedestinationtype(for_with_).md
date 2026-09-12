> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintenthandling/resolvedestinationtype(for:with:)](https://developer.apple.com/documentation/intents/instartaudiocallintenthandling/resolvedestinationtype(for:with:))

# resolveDestinationType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Resolves the destination of the call.

## Declaration

```swift
optional func resolveDestinationType(for intent: INStartAudioCallIntent, with completion: @escaping @Sendable (INCallDestinationTypeResolutionResult) -> Void)
```

```swift
optional func resolveDestinationType(for intent: INStartAudioCallIntent) async -> INCallDestinationTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result with the requested destination type.

<a id="Discussion"></a>

## Discussion

Use this method to verify that you can initiate the specified type of call. Return a successful resolution if you can place the specified type of call. If you don’t support the specified call type, return a not required or successful resolution and report the failure in your [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method.

## See Also

### Resolving the Intent Parameters

- [resolveContacts(for:with:)](resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.

# resolveDestinationTypeForStartAudioCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Resolves the destination of the call.

## Declaration

```objectivec
- (void) resolveDestinationTypeForStartAudioCall:(INStartAudioCallIntent *) intent withCompletion:(void (^)(INCallDestinationTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result with the requested destination type.

<a id="Discussion"></a>

## Discussion

Use this method to verify that you can initiate the specified type of call. Return a successful resolution if you can place the specified type of call. If you don’t support the specified call type, return a not required or successful resolution and report the failure in your [confirmStartAudioCall:completion:](confirm%28intent_completion_%29.md) method.

## See Also

### Resolving the Intent Parameters

- [resolveContactsForStartAudioCall:withCompletion:](resolvecontacts%28for_with_%29.md): Deprecated. Resolves the recipients of the call.
