> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/resolvecalltypes(for:with:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/resolvecalltypes(for:with:))

# resolveCallTypes(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the search criteria for the call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveCallTypes(for intent: INSearchCallHistoryIntent, with completion: @escaping @Sendable (INCallRecordTypeOptionsResolutionResult) -> Void)
```

```swift
optional func resolveCallTypes(for intent: INSearchCallHistoryIntent) async -> INCallRecordTypeOptionsResolutionResult
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

- [resolveCallType(for:with:)](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipient(for:with:)](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseen(for:with:)](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

# resolveCallTypesForSearchCallHistory:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the search criteria for the call type.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveCallTypesForSearchCallHistory:(INSearchCallHistoryIntent *) intent withCompletion:(void (^)(INCallRecordTypeOptionsResolutionResult *resolutionResult)) completion;
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

- [resolveCallTypeForSearchCallHistory:withCompletion:](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipientForSearchCallHistory:withCompletion:](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreatedForSearchCallHistory:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseenForSearchCallHistory:withCompletion:](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.
