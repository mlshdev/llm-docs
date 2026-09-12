> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/resolveunseen(for:with:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/resolveunseen(for:with:))

# resolveUnseen(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves whether you can search for calls that the user hasn’t yet seen.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveUnseen(for intent: INSearchCallHistoryIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveUnseen(for intent: INSearchCallHistoryIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result that contains whether you can search for calls that are currently unseen by the user.

<a id="Discussion"></a>

## Discussion

Implement this method to let SiriKit know whether you can search for unseen calls. Disambiguation and prompting the user for more information isn’t supported. Your implementation should provide a successful resolution with the requested value.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypes(for:with:)](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallType(for:with:)](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipient(for:with:)](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.

# resolveUnseenForSearchCallHistory:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves whether you can search for calls that the user hasn’t yet seen.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveUnseenForSearchCallHistory:(INSearchCallHistoryIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result that contains whether you can search for calls that are currently unseen by the user.

<a id="Discussion"></a>

## Discussion

Implement this method to let SiriKit know whether you can search for unseen calls. Disambiguation and prompting the user for more information isn’t supported. Your implementation should provide a successful resolution with the requested value.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypesForSearchCallHistory:withCompletion:](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallTypeForSearchCallHistory:withCompletion:](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipientForSearchCallHistory:withCompletion:](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreatedForSearchCallHistory:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
