> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:insertinputsuggestion:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:insertinputsuggestion:))

# textField(\_:insertInputSuggestion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Tells the delegate when the keyboard delivers an input suggestion.

## Declaration

```swift
optional func textField(_ textField: UITextField, insertInputSuggestion inputSuggestion: UIInputSuggestion)
```

## Parameters

- `textField`: The text field that is currently the first responder.
- `inputSuggestion`: The input suggestion that the user or system selected.

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)

# textField:insertInputSuggestion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Tells the delegate when the keyboard delivers an input suggestion.

## Declaration

```objectivec
- (void) textField:(UITextField *) textField insertInputSuggestion:(UIInputSuggestion *) inputSuggestion;
```

## Parameters

- `textField`: The text field that is currently the first responder.
- `inputSuggestion`: The input suggestion that the user or system selected.

## Mentioned In

- [Adopting Smart Reply in your messaging or email app](../adopting-smart-reply-in-your-messaging-or-email-app.md)
