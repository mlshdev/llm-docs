> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext/entry](https://developer.apple.com/documentation/uikit/uiconversationcontext/entry)

# UIConversationContext.Entry (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A base class that represents a message in a conversation.

## Declaration

```swift
class Entry
```

## Topics

### Identifying the entry

- [entryIdentifier](entry/entryidentifier.md): A string that uniquely identifies this specific entry in the conversation.
- [replyThreadIdentifier](entry/replythreadidentifier.md): An optional string that identifies another message in a conversation, when this entry is a reply to that message.

### Getting entry details

- [text](entry/text.md): A string that contains the message’s text.
- [sentDate](entry/sentdate.md): A date that notes when the sender added the message to the conversation.

### Identifying entry participants

- [senderIdentifier](entry/senderidentifier.md): A string that identifies the message’s sender.
- [primaryRecipientIdentifiers](entry/primaryrecipientidentifiers.md): A set of strings that identifies the primary recipients of the message.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMailConversationContext.MailEntry](../uimailconversationcontext/mailentry.md)
- [UIMessageConversationContext.MessageEntry](../uimessageconversationcontext/messageentry.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](../uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIMailConversationContext](../uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationContext.MailEntry](../uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](../uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationContext.MessageEntry](../uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](../uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](../uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](../uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.

# UIConversationEntry (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A base class that represents a message in a conversation.

## Declaration

```objectivec
@interface UIConversationEntry : NSObject
```

## Topics

### Identifying the entry

- [entryIdentifier](entry/entryidentifier.md): A string that uniquely identifies this specific entry in the conversation.
- [replyThreadIdentifier](entry/replythreadidentifier.md): An optional string that identifies another message in a conversation, when this entry is a reply to that message.

### Getting entry details

- [text](entry/text.md): A string that contains the message’s text.
- [sentDate](entry/sentdate.md): A date that notes when the sender added the message to the conversation.

### Identifying entry participants

- [senderIdentifier](entry/senderidentifier.md): A string that identifies the message’s sender.
- [primaryRecipientIdentifiers](entry/primaryrecipientidentifiers.md): A set of strings that identifies the primary recipients of the message.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMailConversationEntry](../uimailconversationcontext/mailentry.md)
- [UIMessageConversationEntry](../uimessageconversationcontext/messageentry.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](../uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIMailConversationContext](../uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationEntry](../uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](../uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationEntry](../uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](../uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](../uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](../uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.
