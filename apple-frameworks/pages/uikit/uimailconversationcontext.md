> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimailconversationcontext](https://developer.apple.com/documentation/uikit/uimailconversationcontext)

# UIMailConversationContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A class that represents an email conversation.

## Declaration

```swift
class UIMailConversationContext
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md)

## Topics

### Getting message details

- [responseSubject](uimailconversationcontext/responsesubject.md): A string that contains the subject line of an intended response.
- [responseHasCustomSignature](uimailconversationcontext/responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.
- [responseSecondaryRecipientIdentifiers](uimailconversationcontext/responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

## Relationships

### Inherits From

- [UIConversationContext](uiconversationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationContext.Entry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext.MailEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationContext.MessageEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.

# UIMailConversationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A class that represents an email conversation.

## Declaration

```objectivec
@interface UIMailConversationContext : UIConversationContext
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md)

## Topics

### Getting message details

- [responseSubject](uimailconversationcontext/responsesubject.md): A string that contains the subject line of an intended response.
- [responseHasCustomSignature](uimailconversationcontext/responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.
- [responseSecondaryRecipientIdentifiers](uimailconversationcontext/responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

## Relationships

### Inherits From

- [UIConversationContext](uiconversationcontext.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationEntry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.
