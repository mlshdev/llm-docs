> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagegriditemconfiguration/init(conversationidentifier:unread:)](https://developer.apple.com/documentation/carplay/cpmessagegriditemconfiguration/init(conversationidentifier:unread:))

# init(conversationIdentifier:unread:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a @c CPMessageGridItemConfiguration for use in a @c CPListTemplate.

## Declaration

```swift
init(conversationIdentifier: String, unread: Bool)
```

## Parameters

- `conversationIdentifier`: A value meaningful to your app to identify this conversation. This identifier is not directly displayed to the user; rather, when the user selects this grid item, SiriKit will pass this identifier back to your app for your own use.
- `unread`: A Boolean value indicating whether the item shows an unread indicator. The default value of this property is @c NO.

# initWithConversationIdentifier:unread: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a @c CPMessageGridItemConfiguration for use in a @c CPListTemplate.

## Declaration

```objectivec
- (instancetype) initWithConversationIdentifier:(NSString *) conversationIdentifier unread:(BOOL) unread;
```

## Parameters

- `conversationIdentifier`: A value meaningful to your app to identify this conversation. This identifier is not directly displayed to the user; rather, when the user selects this grid item, SiriKit will pass this identifier back to your app for your own use.
- `unread`: A Boolean value indicating whether the item shows an unread indicator. The default value of this property is @c NO.
