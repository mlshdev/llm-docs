> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/action/replaceselection](https://developer.apple.com/documentation/uikit/uitextdropproposal/action/replaceselection)

# UITextDropProposal.Action.replaceSelection (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.

## Declaration

```swift
case replaceSelection
```

<a id="Discussion"></a>

## Discussion

If the text view does not contain a selection, dropped text is inserted at the provided location, without altering the surrounding text.

## See Also

### Text drop actions

- [UITextDropProposal.Action.insert](insert.md): A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.
- [UITextDropProposal.Action.replaceAll](replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.

# UITextDropActionReplaceSelection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.

## Declaration

```objectivec
UITextDropActionReplaceSelection
```

<a id="Discussion"></a>

## Discussion

If the text view does not contain a selection, dropped text is inserted at the provided location, without altering the surrounding text.

## See Also

### Text drop actions

- [UITextDropActionInsert](insert.md): A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.
- [UITextDropActionReplaceAll](replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.
