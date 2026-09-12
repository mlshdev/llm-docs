> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/textdidchangenotification](https://developer.apple.com/documentation/uikit/uitextview/textdidchangenotification)

# textDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the text in a text view changes.

## Declaration

```swift
nonisolated class let textDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [isEditable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.

# UITextViewTextDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the text in a text view changes.

## Declaration

```objectivec
extern NSNotificationName const UITextViewTextDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [editable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [UITextViewTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [UITextViewTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
