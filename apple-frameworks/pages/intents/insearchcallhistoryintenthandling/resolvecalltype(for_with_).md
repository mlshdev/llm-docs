> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/resolvecalltype(for:with:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/resolvecalltype(for:with:))

# resolveCallType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the search criteria for the call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveCallType(for intent: INSearchCallHistoryIntent, with completion: @escaping @Sendable (INCallRecordTypeResolutionResult) -> Void)
```

```swift
optional func resolveCallType(for intent: INSearchCallHistoryIntent) async -> INCallRecordTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result that contains the types of calls you’re able to search.

<a id="Discussion"></a>

## Discussion

Implement this method to let SiriKit know which types of calls you can search. Your implementation should provide a successful resolution for the call types you support and an unsupported resolution for any call types you don’t support.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypes(for:with:)](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipient(for:with:)](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseen(for:with:)](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

# resolveCallTypeForSearchCallHistory:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the search criteria for the call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveCallTypeForSearchCallHistory:(INSearchCallHistoryIntent *) intent withCompletion:(void (^)(INCallRecordTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result that contains the types of calls you’re able to search.

<a id="Discussion"></a>

## Discussion

Implement this method to let SiriKit know which types of calls you can search. Your implementation should provide a successful resolution for the call types you support and an unsupported resolution for any call types you don’t support.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypesForSearchCallHistory:withCompletion:](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipientForSearchCallHistory:withCompletion:](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreatedForSearchCallHistory:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseenForSearchCallHistory:withCompletion:](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.
