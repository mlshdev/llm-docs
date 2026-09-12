> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputsuggestion](https://developer.apple.com/documentation/uikit/uiinputsuggestion)

# UIInputSuggestion (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A base class you use to handle suggestions from the keyboard or system.

## Declaration

```swift
class UIInputSuggestion
```

<a id="Discussion"></a>

## Discussion

To handle photo search suggestions from Smart Actions, use [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md), which provides the filter metadata you need to present a pre-populated photo picker or build a custom photo search. To handle Smart Reply suggestions, use [UISmartReplySuggestion](uismartreplysuggestion.md), which provides the reply text the person selected to guide a long-form response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md)
- [UISmartReplySuggestion](uismartreplysuggestion.md)

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
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationContext.Entry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationContext.MailEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationContext.MessageEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.

# UIInputSuggestion (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A base class you use to handle suggestions from the keyboard or system.

## Declaration

```objectivec
@interface UIInputSuggestion : NSObject
```

<a id="Discussion"></a>

## Discussion

To handle photo search suggestions from Smart Actions, use [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md), which provides the filter metadata you need to present a pre-populated photo picker or build a custom photo search. To handle Smart Reply suggestions, use [UISmartReplySuggestion](uismartreplysuggestion.md), which provides the reply text the person selected to guide a long-form response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md)
- [UISmartReplySuggestion](uismartreplysuggestion.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationEntry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIPhotoSearchSuggestion](uiphotosearchsuggestion.md): An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.
