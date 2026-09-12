> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcheckingcontroller/checktext(in:types:options:)](https://developer.apple.com/documentation/appkit/nstextcheckingcontroller/checktext(in:types:options:))

# checkText(in:types:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```swift
func checkText(in range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any] = [:])
```

## See Also

### Instance Methods

- [changeSpelling(\_:)](changespelling%28__%29.md)
- [checkSpelling(\_:)](checkspelling%28__%29.md)
- [checkTextInDocument(\_:)](checktextindocument%28__%29.md)
- [checkTextInSelection(\_:)](checktextinselection%28__%29.md)
- [considerTextChecking(for:)](considertextchecking%28for_%29.md)
- [didChangeSelectedRange()](didchangeselectedrange%28%29.md)
- [didChangeText(in:)](didchangetext%28in_%29.md)
- [ignoreSpelling(\_:)](ignorespelling%28__%29.md)
- [insertedText(in:)](insertedtext%28in_%29.md)
- [invalidate()](invalidate%28%29.md)
- [menu(at:clickedOnSelection:effectiveRange:)](menu%28at_clickedonselection_effectiverange_%29.md)
- [orderFrontSubstitutionsPanel(\_:)](orderfrontsubstitutionspanel%28__%29.md)
- [showGuessPanel(\_:)](showguesspanel%28__%29.md)
- [updateCandidates()](updatecandidates%28%29.md)
- [validAnnotations()](validannotations%28%29.md)

# checkTextInRange:types:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
- (void) checkTextInRange:(NSRange) range types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options;
```

## See Also

### Instance Methods

- [changeSpelling:](changespelling%28__%29.md)
- [checkSpelling:](checkspelling%28__%29.md)
- [checkTextInDocument:](checktextindocument%28__%29.md)
- [checkTextInSelection:](checktextinselection%28__%29.md)
- [considerTextCheckingForRange:](considertextchecking%28for_%29.md)
- [didChangeSelectedRange](didchangeselectedrange%28%29.md)
- [didChangeTextInRange:](didchangetext%28in_%29.md)
- [ignoreSpelling:](ignorespelling%28__%29.md)
- [insertedTextInRange:](insertedtext%28in_%29.md)
- [invalidate](invalidate%28%29.md)
- [menuAtIndex:clickedOnSelection:effectiveRange:](menu%28at_clickedonselection_effectiverange_%29.md)
- [orderFrontSubstitutionsPanel:](orderfrontsubstitutionspanel%28__%29.md)
- [showGuessPanel:](showguesspanel%28__%29.md)
- [updateCandidates](updatecandidates%28%29.md)
- [validAnnotations](validannotations%28%29.md)
