> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/rowsdidchangenotification](https://developer.apple.com/documentation/appkit/nsruleeditor/rowsdidchangenotification)

# rowsDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

This notification is posted to the default notification center whenever the view’s rows change.

## Declaration

```swift
class let rowsDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object is the rule editor; there is no `userInfo` object.

To observe this notification using Swift concurrency, use [NSRuleEditor.RowsDidChangeMessage](rowsdidchangemessage.md).

# NSRuleEditorRowsDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

This notification is posted to the default notification center whenever the view’s rows change.

## Declaration

```objectivec
extern NSNotificationName const NSRuleEditorRowsDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The object is the rule editor; there is no `userInfo` object.

To observe this notification using Swift concurrency, use [NSRuleEditor.RowsDidChangeMessage](rowsdidchangemessage.md).
