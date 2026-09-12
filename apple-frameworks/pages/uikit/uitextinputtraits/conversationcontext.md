> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/conversationcontext](https://developer.apple.com/documentation/uikit/uitextinputtraits/conversationcontext)

# conversationContext (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A reference to a conversation, such as a mail or messaging thread.

## Declaration

```swift
optional var conversationContext: UIConversationContext? { get set }
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)

<a id="discussion"></a>

## Discussion

Set this conversation context before the keyboard appears; the keyboard uses this context to initialize its conversation context value. When updates occur in the conversation, call [conversationContext(\_:didChange:)](../uitextinputdelegate/conversationcontext%28__didchange_%29.md) on the `inputDelegate` property for [UITextInput](../uitextinput.md) objects, such as UITextView/inputDelegate`or`UITextField/inputDelegate\`\`.

# conversationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A reference to a conversation, such as a mail or messaging thread.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIConversationContext * conversationContext;
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)

<a id="discussion"></a>

## Discussion

Set this conversation context before the keyboard appears; the keyboard uses this context to initialize its conversation context value. When updates occur in the conversation, call [conversationContext:didChange:](../uitextinputdelegate/conversationcontext%28__didchange_%29.md) on the `inputDelegate` property for [UITextInput](../uitextinput.md) objects, such as UITextView/inputDelegate`or`UITextField/inputDelegate\`\`.
