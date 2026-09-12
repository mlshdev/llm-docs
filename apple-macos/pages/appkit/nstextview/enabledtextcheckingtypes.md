> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/enabledtextcheckingtypes](https://developer.apple.com/documentation/appkit/nstextview/enabledtextcheckingtypes)

# enabledTextCheckingTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The default text checking types.

## Declaration

```swift
var enabledTextCheckingTypes: NSTextCheckingTypes { get set }
```

## See Also

### Checking and substituting text

- [checkTextInDocument(\_:)](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection(\_:)](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkText(in:types:options:)](checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
- [handleTextCheckingResults(\_:forRange:types:options:orthography:wordCount:)](handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [isAutomaticDashSubstitutionEnabled](isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution(\_:)](toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [isAutomaticDataDetectionEnabled](isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection(\_:)](toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [isAutomaticSpellingCorrectionEnabled](isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection(\_:)](toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [isAutomaticTextReplacementEnabled](isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement(\_:)](toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacement(in:with:)](performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.

# enabledTextCheckingTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The default text checking types.

## Declaration

```objectivec
@property NSTextCheckingTypes enabledTextCheckingTypes;
```

## See Also

### Checking and substituting text

- [checkTextInDocument:](checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection:](checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkTextInRange:types:options:](checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
- [handleTextCheckingResults:forRange:types:options:orthography:wordCount:](handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [automaticDashSubstitutionEnabled](isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution:](toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [automaticDataDetectionEnabled](isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection:](toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [automaticSpellingCorrectionEnabled](isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection:](toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [automaticTextReplacementEnabled](isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement:](toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacementInRange:withAttributedString:](performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.
