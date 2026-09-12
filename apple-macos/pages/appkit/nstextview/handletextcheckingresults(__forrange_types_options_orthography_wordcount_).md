> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/handletextcheckingresults(_:forrange:types:options:orthography:wordcount:)](https://developer.apple.com/documentation/appkit/nstextview/handletextcheckingresults(_:forrange:types:options:orthography:wordcount:))

# handleTextCheckingResults(\_:forRange:types:options:orthography:wordCount:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Handles the text checking results returned by the text view

## Declaration

```swift
func handleTextCheckingResults(_ results: [NSTextCheckingResult], forRange range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any] = [:], orthography: NSOrthography, wordCount: Int)
```

## Parameters

- `results`: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.
- `range`: The range of text that was checked.
- `checkingTypes`: The type of checking  performed. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: The dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `orthography`: The orthography of the checked text.
- `wordCount`: The number of words.

<a id="Discussion"></a>

## Discussion

The [NSTextViewDelegate](../nstextviewdelegate.md) offers a method, [textView(\_:didCheckTextIn:types:options:results:orthography:wordCount:)](../nstextviewdelegate/textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md) that is called after the checking is performed, allowing you to modify the results.

This method usually would not be called directly, since `NSTextView` itself will call it as needed, but it can be overridden.

## See Also

### Checking and substituting text

- [checkTextInDocument(\_:)](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection(\_:)](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkText(in:types:options:)](checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
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

# handleTextCheckingResults:forRange:types:options:orthography:wordCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Handles the text checking results returned by the text view

## Declaration

```objectivec
- (void) handleTextCheckingResults:(NSArray<NSTextCheckingResult *> *) results forRange:(NSRange) range types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options orthography:(NSOrthography *) orthography wordCount:(NSInteger) wordCount;
```

## Parameters

- `results`: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.
- `range`: The range of text that was checked.
- `checkingTypes`: The type of checking  performed. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: The dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `orthography`: The orthography of the checked text.
- `wordCount`: The number of words.

<a id="Discussion"></a>

## Discussion

The [NSTextViewDelegate](../nstextviewdelegate.md) offers a method, [textView:didCheckTextInRange:types:options:results:orthography:wordCount:](../nstextviewdelegate/textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md) that is called after the checking is performed, allowing you to modify the results.

This method usually would not be called directly, since `NSTextView` itself will call it as needed, but it can be overridden.

## See Also

### Checking and substituting text

- [checkTextInDocument:](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection:](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkTextInRange:types:options:](checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
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
