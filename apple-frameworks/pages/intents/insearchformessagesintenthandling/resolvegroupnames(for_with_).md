> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/resolvegroupnames(for:with:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/resolvegroupnames(for:with:))

# resolveGroupNames(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Resolves the user’s input when they search for messages sent to a specific group of people.

> resolveGroupNamesForSearchForMessages:withCompletion: is deprecated. Use resolveSpeakableGroupNamesForSearchForMessages:withCompletion: instead

## Declaration

```swift
optional func resolveGroupNames(for intent: INSearchForMessagesIntent, with completion: @escaping @Sendable ([INStringResolutionResult]) -> Void)
```

```swift
optional func resolveGroupNames(for intent: INSearchForMessagesIntent) async -> [INStringResolutionResult]
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object containing the details of your proposed resolution. For successful resolutions, create one or more resolution objects with the [NSString](../../foundation/nsstring.md) objects that contain the recognized group names.

<a id="Discussion"></a>

## Discussion

## See Also

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSenders(for:with:)](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributes(for:with:)](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRange(for:with:)](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNames(for:with:)](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.

# resolveGroupNamesForSearchForMessages:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Resolves the user’s input when they search for messages sent to a specific group of people.

> resolveGroupNamesForSearchForMessages:withCompletion: is deprecated. Use resolveSpeakableGroupNamesForSearchForMessages:withCompletion: instead

## Declaration

```objectivec
- (void) resolveGroupNamesForSearchForMessages:(INSearchForMessagesIntent *) intent withCompletion:(void (^)(NSArray<INStringResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object containing the details of your proposed resolution. For successful resolutions, create one or more resolution objects with the [NSString](../../foundation/nsstring.md) objects that contain the recognized group names.

<a id="Discussion"></a>

## Discussion

## See Also

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSendersForSearchForMessages:withCompletion:](resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributesForSearchForMessages:withCompletion:](resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRangeForSearchForMessages:withCompletion:](resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNamesForSearchForMessages:withCompletion:](resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
