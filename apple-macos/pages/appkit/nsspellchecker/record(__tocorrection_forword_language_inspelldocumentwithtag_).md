> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/record(_:tocorrection:forword:language:inspelldocumentwithtag:)](https://developer.apple.com/documentation/appkit/nsspellchecker/record(_:tocorrection:forword:language:inspelldocumentwithtag:))

# record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Records the user response to the correction indicator being displayed.

## Declaration

```swift
func record(_ response: NSSpellChecker.CorrectionResponse, toCorrection correction: String, forWord word: String, language: String?, inSpellDocumentWithTag tag: Int)
```

## Parameters

- `response`: The user’s response. The possible values are shown in [NSSpellChecker.CorrectionResponse](correctionresponse.md).
- `correction`: The corrected word.  This should match the original correction.
- `word`: The original word.  This should match the original correction.
- `language`: The language being edited. This should match the original correction.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="Discussion"></a>

## Discussion

When a correction is automatically proposed, the user may respond in one of several ways.  Clients may report this to the spell checker so that it can learn from the user’s response and adjust future correction behavior accordingly.

> **Note**

>  Use of this method implies that the client stored the original word and original correction at least from the point at which the user accepts it until the user edits or reverts it.

## See Also

### Automatic Spelling Correction

- [correction(forWordRange:in:language:inSpellDocumentWithTag:)](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicator(of:primaryString:alternativeStrings:forStringIn:view:completionHandler:)](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [dismissCorrectionIndicator(for:)](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSSpellChecker.CorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSSpellChecker.CorrectionResponse](correctionresponse.md): The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

# recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Records the user response to the correction indicator being displayed.

## Declaration

```objectivec
- (void) recordResponse:(NSCorrectionResponse) response toCorrection:(NSString *) correction forWord:(NSString *) word language:(NSString *) language inSpellDocumentWithTag:(NSInteger) tag;
```

## Parameters

- `response`: The user’s response. The possible values are shown in [NSCorrectionResponse](correctionresponse.md).
- `correction`: The corrected word.  This should match the original correction.
- `word`: The original word.  This should match the original correction.
- `language`: The language being edited. This should match the original correction.
- `tag`: An identifier unique within the application used to inform the spell checker which document that text is associated, potentially for many purposes, not necessarily just for ignored words. A value of 0 can be passed in for text not associated with a particular document.

<a id="Discussion"></a>

## Discussion

When a correction is automatically proposed, the user may respond in one of several ways.  Clients may report this to the spell checker so that it can learn from the user’s response and adjust future correction behavior accordingly.

> **Note**

>  Use of this method implies that the client stored the original word and original correction at least from the point at which the user accepts it until the user edits or reverts it.

## See Also

### Automatic Spelling Correction

- [correctionForWordRange:inString:language:inSpellDocumentWithTag:](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [dismissCorrectionIndicatorForView:](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSCorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSCorrectionResponse](correctionresponse.md): The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.
