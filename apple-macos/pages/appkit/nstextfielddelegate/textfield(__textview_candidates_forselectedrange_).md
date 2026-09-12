> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfielddelegate/textfield(_:textview:candidates:forselectedrange:)](https://developer.apple.com/documentation/appkit/nstextfielddelegate/textfield(_:textview:candidates:forselectedrange:))

# textField(\_:textView:candidates:forSelectedRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.

## Declaration

```swift
@MainActor optional func textField(_ textField: NSTextField, textView: NSTextView, candidates: [NSTextCheckingResult], forSelectedRange selectedRange: NSRange) -> [NSTextCheckingResult]
```

## See Also

### Controlling Editing Behavior

- [textField(\_:textView:candidatesForSelectedRange:)](textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.
- [textField(\_:textView:shouldSelectCandidateAt:)](textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

# textField:textView:candidates:forSelectedRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.

## Declaration

```objectivec
- (NSArray<NSTextCheckingResult *> *) textField:(NSTextField *) textField textView:(NSTextView *) textView candidates:(NSArray<NSTextCheckingResult *> *) candidates forSelectedRange:(NSRange) selectedRange;
```

## See Also

### Controlling Editing Behavior

- [textField:textView:candidatesForSelectedRange:](textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.
- [textField:textView:shouldSelectCandidateAtIndex:](textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.
