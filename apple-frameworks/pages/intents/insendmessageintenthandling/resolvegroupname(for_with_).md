> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling/resolvegroupname(for:with:)](https://developer.apple.com/documentation/intents/insendmessageintenthandling/resolvegroupname(for:with:))

# resolveGroupName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Resolves the name of the group receiving the message.

> Use [resolveSpeakableGroupName(for:with:)](resolvespeakablegroupname%28for_with_%29.md) instead.

## Declaration

```swift
optional func resolveGroupName(for intent: INSendMessageIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveGroupName(for intent: INSendMessageIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the name of the group recognized by your app.

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the sending messages to named groups. A group may be specified instead of, or in addition to, individual recipients.

## See Also

### Deprecated Methods

- [resolveRecipients(for:with:)](resolverecipients%28for_with_%29-2yejx.md): Deprecated. Resolves the recipients of the message.

# resolveGroupNameForSendMessage:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Resolves the name of the group receiving the message.

> Use [resolveSpeakableGroupNameForSendMessage:withCompletion:](resolvespeakablegroupname%28for_with_%29.md) instead.

## Declaration

```objectivec
- (void) resolveGroupNameForSendMessage:(INSendMessageIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the [NSString](../../foundation/nsstring.md) object that contains the name of the group recognized by your app.

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the sending messages to named groups. A group may be specified instead of, or in addition to, individual recipients.

## See Also

### Deprecated Methods

- [resolveRecipientsForSendMessage:withCompletion:](resolverecipients%28for_with_%29-2yejx.md): Deprecated. Resolves the recipients of the message.
