> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/checktext(in:types:options:)](https://developer.apple.com/documentation/appkit/nstextview/checktext(in:types:options:))

# checkText(in:types:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Check and replace the text in the range using the specified checking types and options.

## Declaration

```swift
func checkText(in range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any] = [:])
```

## Parameters

- `range`: The range to check.
- `checkingTypes`: The type of checking to be performed, passed by-reference. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.

<a id="Discussion"></a>

## Discussion

This method calls the delegate method [textView(\_:willCheckTextIn:options:types:)](../nstextviewdelegate/textview%28__willchecktextin_options_types_%29.md) allowing you to modify the parameters before the checking occurs.

This method usually would not be called directly, since `NSTextView` itself will call it as needed, but it can be overridden.

## See Also

### Checking and substituting text

- [checkTextInDocument(\_:)](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection(\_:)](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [handleTextCheckingResults(\_:forRange:types:options:orthography:wordCount:)](handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [enabledTextCheckingTypes](enabledtextcheckingtypes.md): The default text checking types.
- [isAutomaticDashSubstitutionEnabled](isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution(\_:)](toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [isAutomaticDataDetectionEnabled](isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection(\_:)](toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [isAutomaticSpellingCorrectionEnabled](isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection(\_:)](toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [isAutomaticTextReplacementEnabled](isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement(\_:)](toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacement(in:with:)](performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.

# checkTextInRange:types:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Check and replace the text in the range using the specified checking types and options.

## Declaration

```objectivec
- (void) checkTextInRange:(NSRange) range types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `range`: The range to check.
- `checkingTypes`: The type of checking to be performed, passed by-reference. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.

<a id="Discussion"></a>

## Discussion

This method calls the delegate method [textView:willCheckTextInRange:options:types:](../nstextviewdelegate/textview%28__willchecktextin_options_types_%29.md) allowing you to modify the parameters before the checking occurs.

This method usually would not be called directly, since `NSTextView` itself will call it as needed, but it can be overridden.

## See Also

### Checking and substituting text

- [checkTextInDocument:](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection:](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [handleTextCheckingResults:forRange:types:options:orthography:wordCount:](handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [enabledTextCheckingTypes](enabledtextcheckingtypes.md): The default text checking types.
- [automaticDashSubstitutionEnabled](isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution:](toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [automaticDataDetectionEnabled](isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection:](toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [automaticSpellingCorrectionEnabled](isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection:](toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [automaticTextReplacementEnabled](isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement:](toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacementInRange:withAttributedString:](performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.
