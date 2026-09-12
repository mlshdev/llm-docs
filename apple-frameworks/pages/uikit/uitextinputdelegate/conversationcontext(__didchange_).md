> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputdelegate/conversationcontext(_:didchange:)](https://developer.apple.com/documentation/uikit/uitextinputdelegate/conversationcontext(_:didchange:))

# conversationContext(\_:didChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Tells the input delegate when text has changed in the input object for a conversation.

## Declaration

```swift
func conversationContext(_ context: UIConversationContext?, didChange textInput: (any UITextInput)?)
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)

# conversationContext:didChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Tells the input delegate when text has changed in the input object for a conversation.

## Declaration

```objectivec
- (void) conversationContext:(UIConversationContext *) context didChange:(id<UITextInput>) textInput;
```

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)
