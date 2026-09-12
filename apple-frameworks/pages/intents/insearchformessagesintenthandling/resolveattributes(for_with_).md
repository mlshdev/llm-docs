> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/resolveattributes(for:with:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/resolveattributes(for:with:))

# resolveAttributes(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages with specific attributes.

## Declaration

```swift
optional func resolveAttributes(for intent: INSearchForMessagesIntent, with completion: @escaping @Sendable (INMessageAttributeOptionsResolutionResult) -> Void)
```

```swift
optional func resolveAttributes(for intent: INSearchForMessagesIntent) async -> INMessageAttributeOptionsResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the options that you are able to search. You may specify a value different than the one originally specified in the intent.

<a id="Discussion"></a>

## Discussion

This method resolves any attributes associated with the messages. Use this method to validate whether your app can search using the specified attributes.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSenders(for:with:)](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveDateTimeRange(for:with:)](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNames(for:with:)](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNames(for:with:)](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

# resolveAttributesForSearchForMessages:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages with specific attributes.

## Declaration

```objectivec
- (void) resolveAttributesForSearchForMessages:(INSearchForMessagesIntent *) intent withCompletion:(void (^)(INMessageAttributeOptionsResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the options that you are able to search. You may specify a value different than the one originally specified in the intent.

<a id="Discussion"></a>

## Discussion

This method resolves any attributes associated with the messages. Use this method to validate whether your app can search using the specified attributes.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSendersForSearchForMessages:withCompletion:](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveDateTimeRangeForSearchForMessages:withCompletion:](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNamesForSearchForMessages:withCompletion:](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNamesForSearchForMessages:withCompletion:](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.
