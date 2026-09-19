> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinputdelegate/conversationcontext(_:didchange:)

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
