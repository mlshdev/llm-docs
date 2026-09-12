> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/allowseditingtextattributes](https://developer.apple.com/documentation/uikit/uitextview/allowseditingtextattributes)

# allowsEditingTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the text view allows the user to edit style information.

## Declaration

```swift
var allowsEditingTextAttributes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the text view allows the user to change the basic styling of the currently selected text. The available style options are listed in the edit menu and only apply to the selection.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [isEditable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [textDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [textDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.

# allowsEditingTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the text view allows the user to edit style information.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsEditingTextAttributes;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the text view allows the user to change the basic styling of the currently selected text. The available style options are listed in the edit menu and only apply to the selection.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the editing behavior

- [editable](iseditable.md): A Boolean value that indicates whether the text view is editable.
- [UITextViewTextDidBeginEditingNotification](textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [UITextViewTextDidChangeNotification](textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [UITextViewTextDidEndEditingNotification](textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
