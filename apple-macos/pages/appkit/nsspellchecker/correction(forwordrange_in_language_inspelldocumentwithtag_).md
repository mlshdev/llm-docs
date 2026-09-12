> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/correction(forwordrange:in:language:inspelldocumentwithtag:)](https://developer.apple.com/documentation/appkit/nsspellchecker/correction(forwordrange:in:language:inspelldocumentwithtag:))

# correction(forWordRange:in:language:inSpellDocumentWithTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a single proposed correction if a word is mis-spelled.

## Declaration

```swift
func correction(forWordRange range: NSRange, in string: String, language: String, inSpellDocumentWithTag tag: Int) -> String?
```

## Parameters

- `range`: The range of the word to be corrected.
- `string`: The string containing the proposed correction.
- `language`: The language.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="return-value"></a>

## Return Value

The proposed correct string.

<a id="Discussion"></a>

## Discussion

While correction functionality is available starting in OS X v10.6 as part of unified text checking, for convenience this method makes it available separately starting in OS X v10.7.

## See Also

### Automatic Spelling Correction

- [showCorrectionIndicator(of:primaryString:alternativeStrings:forStringIn:view:completionHandler:)](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicator(for:)](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSSpellChecker.CorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSSpellChecker.CorrectionResponse](correctionresponse.md): The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

# correctionForWordRange:inString:language:inSpellDocumentWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a single proposed correction if a word is mis-spelled.

## Declaration

```objectivec
- (NSString *) correctionForWordRange:(NSRange) range inString:(NSString *) string language:(NSString *) language inSpellDocumentWithTag:(NSInteger) tag;
```

## Parameters

- `range`: The range of the word to be corrected.
- `string`: The string containing the proposed correction.
- `language`: The language.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="return-value"></a>

## Return Value

The proposed correct string.

<a id="Discussion"></a>

## Discussion

While correction functionality is available starting in OS X v10.6 as part of unified text checking, for convenience this method makes it available separately starting in OS X v10.7.

## See Also

### Automatic Spelling Correction

- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicatorForView:](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSCorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSCorrectionResponse](correctionresponse.md): The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.
