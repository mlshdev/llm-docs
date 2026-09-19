> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextview/textdidendeditingnotification

# textDidEndEditingNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the editing session ends for a text view.

## Declaration

```swift
nonisolated class let textDidEndEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [isEditable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.

# UITextViewTextDidEndEditingNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that alerts observers when the editing session ends for a text view.

## Declaration

```objectivec
extern NSNotificationName const UITextViewTextDidEndEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The affected view is stored in the `object` parameter of the notification. The `userInfo` dictionary is not used.

## See Also

### Managing the editing behavior

- [editable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [UITextViewTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [UITextViewTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
