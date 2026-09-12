> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfielddelegate/textfield(_:textview:candidatesforselectedrange:)](https://developer.apple.com/documentation/appkit/nstextfielddelegate/textfield(_:textview:candidatesforselectedrange:))

# textField(\_:textView:candidatesForSelectedRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.

## Declaration

```swift
@MainActor optional func textField(_ textField: NSTextField, textView: NSTextView, candidatesForSelectedRange selectedRange: NSRange) -> [Any]?
```

<a id="discussion"></a>

## Discussion

Invoked from `updateCandidates`. `NSTextView` uses the candidates returned from this method and suppress its built-in candidate generation. Returning `nil` from this delegate method allows `NSTextView` to query candidates from `NSSpellChecker`.

## See Also

### Controlling Editing Behavior

- [textField(\_:textView:candidates:forSelectedRange:)](textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField(\_:textView:shouldSelectCandidateAt:)](textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

# textField:textView:candidatesForSelectedRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.

## Declaration

```objectivec
- (NSArray *) textField:(NSTextField *) textField textView:(NSTextView *) textView candidatesForSelectedRange:(NSRange) selectedRange;
```

<a id="discussion"></a>

## Discussion

Invoked from `updateCandidates`. `NSTextView` uses the candidates returned from this method and suppress its built-in candidate generation. Returning `nil` from this delegate method allows `NSTextView` to query candidates from `NSSpellChecker`.

## See Also

### Controlling Editing Behavior

- [textField:textView:candidates:forSelectedRange:](textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField:textView:shouldSelectCandidateAtIndex:](textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.
