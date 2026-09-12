> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/resolvesenders(for:with:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/resolvesenders(for:with:))

# resolveSenders(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages sent by specific people.

## Declaration

```swift
optional func resolveSenders(for intent: INSearchForMessagesIntent, with completion: @escaping @Sendable ([INPersonResolutionResult]) -> Void)
```

```swift
optional func resolveSenders(for intent: INSearchForMessagesIntent) async -> [INPersonResolutionResult]
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object that contains the details of your proposed resolution. For successful resolutions, create one or more resolution objects that include the [INPerson](../inperson.md) objects representing the message senders to use during the search.

<a id="Discussion"></a>

## Discussion

This method resolves the `sender` search parameter. Use the information in the `intent` object to identify the corresponding users in your app. Always strive toward a successful resolution of the specified users, but ask for confirmation for one or more users if there is some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveAttributes(for:with:)](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRange(for:with:)](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNames(for:with:)](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNames(for:with:)](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

# resolveSendersForSearchForMessages:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages sent by specific people.

## Declaration

```objectivec
- (void) resolveSendersForSearchForMessages:(INSearchForMessagesIntent *) intent withCompletion:(void (^)(NSArray<INPersonResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object that contains the details of your proposed resolution. For successful resolutions, create one or more resolution objects that include the [INPerson](../inperson.md) objects representing the message senders to use during the search.

<a id="Discussion"></a>

## Discussion

This method resolves the `sender` search parameter. Use the information in the `intent` object to identify the corresponding users in your app. Always strive toward a successful resolution of the specified users, but ask for confirmation for one or more users if there is some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveAttributesForSearchForMessages:withCompletion:](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRangeForSearchForMessages:withCompletion:](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNamesForSearchForMessages:withCompletion:](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNamesForSearchForMessages:withCompletion:](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.
