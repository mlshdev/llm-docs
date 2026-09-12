> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/keyboardselectiondidchangenotification](https://developer.apple.com/documentation/appkit/nstextinputcontext/keyboardselectiondidchangenotification)

# keyboardSelectionDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Posted after the selected text input source changes.

## Declaration

```swift
class let keyboardSelectionDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSTextInputContext.KeyboardSelectionDidChangeMessage](keyboardselectiondidchangemessage.md).

# NSTextInputContextKeyboardSelectionDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Posted after the selected text input source changes.

## Declaration

```objectivec
extern NSNotificationName NSTextInputContextKeyboardSelectionDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSTextInputContext.KeyboardSelectionDidChangeMessage](keyboardselectiondidchangemessage.md).
