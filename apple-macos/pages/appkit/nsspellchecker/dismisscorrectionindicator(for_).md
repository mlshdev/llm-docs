> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/dismisscorrectionindicator(for:)](https://developer.apple.com/documentation/appkit/nsspellchecker/dismisscorrectionindicator(for:))

# dismissCorrectionIndicator(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Dismisses the correction indicator for the specified view.

## Declaration

```swift
func dismissCorrectionIndicator(for view: NSView)
```

## Parameters

- `view`: The view.

## See Also

### Automatic Spelling Correction

- [correction(forWordRange:in:language:inSpellDocumentWithTag:)](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicator(of:primaryString:alternativeStrings:forStringIn:view:completionHandler:)](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [NSSpellChecker.CorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSSpellChecker.CorrectionResponse](correctionresponse.md): The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

# dismissCorrectionIndicatorForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Dismisses the correction indicator for the specified view.

## Declaration

```objectivec
- (void) dismissCorrectionIndicatorForView:(NSView *) view;
```

## Parameters

- `view`: The view.

## See Also

### Automatic Spelling Correction

- [correctionForWordRange:inString:language:inSpellDocumentWithTag:](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [NSCorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSCorrectionResponse](correctionresponse.md): The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.
