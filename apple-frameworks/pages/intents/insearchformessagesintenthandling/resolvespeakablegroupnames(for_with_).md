> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/resolvespeakablegroupnames(for:with:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/resolvespeakablegroupnames(for:with:))

# resolveSpeakableGroupNames(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the user’s input when they search for messages sent to a specific group of people.

## Declaration

```swift
optional func resolveSpeakableGroupNames(for intent: INSearchForMessagesIntent, with completion: @escaping @Sendable ([INSpeakableStringResolutionResult]) -> Void)
```

```swift
optional func resolveSpeakableGroupNames(for intent: INSearchForMessagesIntent) async -> [INSpeakableStringResolutionResult]
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object that contains the details of your proposed resolution. For successful resolutions, create one or more resolution objects with the [NSString](../../foundation/nsstring.md) objects that contain the recognized group names.

<a id="Discussion"></a>

## Discussion

This method resolves the names of any groups that were recipients of the messages.

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSenders(for:with:)](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributes(for:with:)](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRange(for:with:)](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveGroupNames(for:with:)](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

# resolveSpeakableGroupNamesForSearchForMessages:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the user’s input when they search for messages sent to a specific group of people.

## Declaration

```objectivec
- (void) resolveSpeakableGroupNamesForSearchForMessages:(INSearchForMessagesIntent *) intent withCompletion:(void (^)(NSArray<INSpeakableStringResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object that contains the details of your proposed resolution. For successful resolutions, create one or more resolution objects with the [NSString](../../foundation/nsstring.md) objects that contain the recognized group names.

<a id="Discussion"></a>

## Discussion

This method resolves the names of any groups that were recipients of the messages.

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSendersForSearchForMessages:withCompletion:](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributesForSearchForMessages:withCompletion:](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRangeForSearchForMessages:withCompletion:](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveGroupNamesForSearchForMessages:withCompletion:](resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.
