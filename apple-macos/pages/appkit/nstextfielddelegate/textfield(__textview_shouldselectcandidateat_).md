> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfielddelegate/textfield(_:textview:shouldselectcandidateat:)](https://developer.apple.com/documentation/appkit/nstextfielddelegate/textfield(_:textview:shouldselectcandidateat:))

# textField(\_:textView:shouldSelectCandidateAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

## Declaration

```swift
@MainActor optional func textField(_ textField: NSTextField, textView: NSTextView, shouldSelectCandidateAt index: Int) -> Bool
```

## Parameters

- `textField`: The text field that sent the message.
- `textView`: The text view that sent the message.
- `index`: The index that represents the start of the candidate text to evaluate, or `NSNotFound` if no candidate is to be selected.

## See Also

### Controlling Editing Behavior

- [textField(\_:textView:candidates:forSelectedRange:)](textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField(\_:textView:candidatesForSelectedRange:)](textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.

# textField:textView:shouldSelectCandidateAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

## Declaration

```objectivec
- (BOOL) textField:(NSTextField *) textField textView:(NSTextView *) textView shouldSelectCandidateAtIndex:(NSUInteger) index;
```

## Parameters

- `textField`: The text field that sent the message.
- `textView`: The text view that sent the message.
- `index`: The index that represents the start of the candidate text to evaluate, or `NSNotFound` if no candidate is to be selected.

## See Also

### Controlling Editing Behavior

- [textField:textView:candidates:forSelectedRange:](textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField:textView:candidatesForSelectedRange:](textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.
