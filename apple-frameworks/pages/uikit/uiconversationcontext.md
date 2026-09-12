> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext](https://developer.apple.com/documentation/uikit/uiconversationcontext)

# UIConversationContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A base class that represents a conversation between participants, such as in an email or messaging app.

## Declaration

```swift
class UIConversationContext
```

## Topics

### Identifying the conversation

- [threadIdentifier](uiconversationcontext/threadidentifier.md): A string that uniquely identifies a conversation. This identifier is persistent for the life of the conversation.

### Getting messages from the conversation

- [entries](uiconversationcontext/entries.md): An array of messages in the conversation.

### Getting conversation participants

- [selfIdentifiers](uiconversationcontext/selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [responsePrimaryRecipientIdentifiers](uiconversationcontext/responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.
- [participantNameByIdentifier](uiconversationcontext/participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMailConversationContext](uimailconversationcontext.md)
- [UIMessageConversationContext](uimessageconversationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext.Entry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationContext.MailEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationContext.MessageEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.

# UIConversationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A base class that represents a conversation between participants, such as in an email or messaging app.

## Declaration

```objectivec
@interface UIConversationContext : NSObject
```

## Topics

### Identifying the conversation

- [threadIdentifier](uiconversationcontext/threadidentifier.md): A string that uniquely identifies a conversation. This identifier is persistent for the life of the conversation.

### Getting messages from the conversation

- [entries](uiconversationcontext/entries.md): An array of messages in the conversation.

### Getting conversation participants

- [selfIdentifiers](uiconversationcontext/selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [responsePrimaryRecipientIdentifiers](uiconversationcontext/responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.
- [participantNameByIdentifier](uiconversationcontext/participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMailConversationContext](uimailconversationcontext.md)
- [UIMessageConversationContext](uimessageconversationcontext.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationEntry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.
