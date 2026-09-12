> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/resolvedatetimerange(for:with:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/resolvedatetimerange(for:with:))

# resolveDateTimeRange(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages sent in a specific time period.

## Declaration

```swift
optional func resolveDateTimeRange(for intent: INSearchForMessagesIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveDateTimeRange(for intent: INSearchForMessagesIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you are able to search. You may specify a value different than the one originally specified in the intent.

<a id="Discussion"></a>

## Discussion

This method resolves the dates used to search for messages.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSenders(for:with:)](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributes(for:with:)](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveSpeakableGroupNames(for:with:)](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNames(for:with:)](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

# resolveDateTimeRangeForSearchForMessages:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s input when they search for messages sent in a specific time period.

## Declaration

```objectivec
- (void) resolveDateTimeRangeForSearchForMessages:(INSearchForMessagesIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you are able to search. You may specify a value different than the one originally specified in the intent.

<a id="Discussion"></a>

## Discussion

This method resolves the dates used to search for messages.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSendersForSearchForMessages:withCompletion:](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributesForSearchForMessages:withCompletion:](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveSpeakableGroupNamesForSearchForMessages:withCompletion:](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNamesForSearchForMessages:withCompletion:](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.
