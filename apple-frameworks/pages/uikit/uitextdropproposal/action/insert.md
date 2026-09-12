> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/action/insert](https://developer.apple.com/documentation/uikit/uitextdropproposal/action/insert)

# UITextDropProposal.Action.insert (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.

## Declaration

```swift
case insert
```

<a id="Discussion"></a>

## Discussion

The action ignores any selection present in the target text view.

## See Also

### Text drop actions

- [UITextDropProposal.Action.replaceAll](replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.
- [UITextDropProposal.Action.replaceSelection](replaceselection.md): A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.

# UITextDropActionInsert (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.

## Declaration

```objectivec
UITextDropActionInsert
```

<a id="Discussion"></a>

## Discussion

The action ignores any selection present in the target text view.

## See Also

### Text drop actions

- [UITextDropActionReplaceAll](replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.
- [UITextDropActionReplaceSelection](replaceselection.md): A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.
