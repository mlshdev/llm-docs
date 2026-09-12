> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/resolvedatecreated(for:with:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/resolvedatecreated(for:with:))

# resolveDateCreated(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the range of dates for the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveDateCreated(for intent: INSearchCallHistoryIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveDateCreated(for intent: INSearchCallHistoryIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you’re able to search.

<a id="Discussion"></a>

## Discussion

When resolving the set of dates, always strive toward a successful resolution, but feel free to return a different result where appropriate. For example, if you don’t support searching for records that are more than one year old, you could return an unsupported resolution if the user specifies a date that’s more than one year in the past.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypes(for:with:)](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallType(for:with:)](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipient(for:with:)](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveUnseen(for:with:)](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

# resolveDateCreatedForSearchCallHistory:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the range of dates for the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveDateCreatedForSearchCallHistory:(INSearchCallHistoryIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you’re able to search.

<a id="Discussion"></a>

## Discussion

When resolving the set of dates, always strive toward a successful resolution, but feel free to return a different result where appropriate. For example, if you don’t support searching for records that are more than one year old, you could return an unsupported resolution if the user specifies a date that’s more than one year in the past.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypesForSearchCallHistory:withCompletion:](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallTypeForSearchCallHistory:withCompletion:](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipientForSearchCallHistory:withCompletion:](resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveUnseenForSearchCallHistory:withCompletion:](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.
