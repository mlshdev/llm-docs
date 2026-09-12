> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextcursordroppositionanimator/init(textcursorview:textinput:)](https://developer.apple.com/documentation/uikit/uitextcursordroppositionanimator/init(textcursorview:textinput:))

# init(textCursorView:textInput:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Creates an animator for the given text cursor view implementation, and the document object that implements the UITextInput protocol.

## Declaration

```swift
init!(textCursorView cursorView: (any UIView & UITextCursorView)!, textInput: (any UIView & UITextInput)!)
```

# initWithTextCursorView:textInput: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Creates an animator for the given text cursor view implementation, and the document object that implements the UITextInput protocol.

## Declaration

```objectivec
- (instancetype) initWithTextCursorView:(UIView<UITextCursorView> *) cursorView textInput:(UIView<UITextInput> *) textInput;
```
