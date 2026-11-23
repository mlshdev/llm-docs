> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagegriditemconfiguration/init(conversationidentifier:unread:)

# init(conversationIdentifier:unread:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates the configuration object with a conversation identifier and Boolean value.

## Declaration

```swift
init(conversationIdentifier: String, unread: Bool)
```

## Parameters

- `conversationIdentifier`: A string you use to uniquely identify the conversation in your app. Choose a value that is unique for the conversation. For example, if you assign a [UUID](https://developer.apple.com/documentation/foundation/uuid) type to each conversation, specify that value as a string.
- `unread`: A Boolean value to set the conversation status to unread. Specify `true` if the conversation contains unread messages, or `false` if it doesn’t.

<a id="return-value"></a>

## Return Value

An initialized configuration object.

# initWithConversationIdentifier:unread: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates the configuration object with a conversation identifier and Boolean value.

## Declaration

```objectivec
- (instancetype) initWithConversationIdentifier:(NSString *) conversationIdentifier unread:(BOOL) unread;
```

## Parameters

- `conversationIdentifier`: A string you use to uniquely identify the conversation in your app. Choose a value that is unique for the conversation. For example, if you assign a [UUID](https://developer.apple.com/documentation/foundation/uuid) type to each conversation, specify that value as a string.
- `unread`: A Boolean value to set the conversation status to unread. Specify `true` if the conversation contains unread messages, or `false` if it doesn’t.

<a id="return-value"></a>

## Return Value

An initialized configuration object.
