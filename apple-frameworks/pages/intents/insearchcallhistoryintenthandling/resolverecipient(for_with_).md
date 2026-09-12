> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling/resolverecipient(for:with:)](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling/resolverecipient(for:with:))

# resolveRecipient(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the search criteria for the recipients.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveRecipient(for intent: INSearchCallHistoryIntent, with completion: @escaping @Sendable (INPersonResolutionResult) -> Void)
```

```swift
optional func resolveRecipient(for intent: INSearchCallHistoryIntent) async -> INPersonResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution that includes the [INPerson](../inperson.md) object that you can use to identify the user later.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the identity of any intended contacts in the search parameters. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypes(for:with:)](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallType(for:with:)](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseen(for:with:)](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

# resolveRecipientForSearchCallHistory:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the search criteria for the recipients.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveRecipientForSearchCallHistory:(INSearchCallHistoryIntent *) intent withCompletion:(void (^)(INPersonResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution that includes the [INPerson](../inperson.md) object that you can use to identify the user later.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the identity of any intended contacts in the search parameters. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveCallTypesForSearchCallHistory:withCompletion:](resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallTypeForSearchCallHistory:withCompletion:](resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveDateCreatedForSearchCallHistory:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseenForSearchCallHistory:withCompletion:](resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.
