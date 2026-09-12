> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/iseditable](https://developer.apple.com/documentation/uikit/uitextview/iseditable)

# isEditable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the text view is editable.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the editing behavior

- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.

# editable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the text view is editable.

## Declaration

```objectivec
@property (nonatomic, getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the editing behavior

- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that indicates whether the text view allows the user to edit style information.
- [UITextViewTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [UITextViewTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [UITextViewTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
