> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/textdidbegineditingnotification](https://developer.apple.com/documentation/uikit/uitextview/textdidbegineditingnotification)

# textDidBeginEditingNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when an editing session begins in a text view.

## Declaration

```swift
nonisolated class let textDidBeginEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [isEditable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.

# UITextViewTextDidBeginEditingNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when an editing session begins in a text view.

## Declaration

```objectivec
extern NSNotificationName const UITextViewTextDidBeginEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [editable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [UITextViewTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [UITextViewTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
