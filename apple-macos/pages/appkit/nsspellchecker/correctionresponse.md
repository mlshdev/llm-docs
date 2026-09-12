> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/correctionresponse](https://developer.apple.com/documentation/appkit/nsspellchecker/correctionresponse)

# NSSpellChecker.CorrectionResponse (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

## Declaration

```swift
enum CorrectionResponse
```

## Topics

### Enumeration Cases

- [NSSpellChecker.CorrectionResponse.accepted](correctionresponse/accepted.md): The user accepted the correction.
- [NSSpellChecker.CorrectionResponse.edited](correctionresponse/edited.md): After the correction was accepted, the user edited the corrected word (to something other than its original form.
- [NSSpellChecker.CorrectionResponse.ignored](correctionresponse/ignored.md): The user continued in such a way as to ignore the correction.
- [NSSpellChecker.CorrectionResponse.none](correctionresponse/none.md): No response was received from the user.
- [NSSpellChecker.CorrectionResponse.rejected](correctionresponse/rejected.md): The user rejected the correction by dismissing the correction indicator.
- [NSSpellChecker.CorrectionResponse.reverted](correctionresponse/reverted.md): After the correction was accepted, the user reverted the correction back to the original word.

### Initializers

- [init(rawValue:)](correctionresponse/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Automatic Spelling Correction

- [correction(forWordRange:in:language:inSpellDocumentWithTag:)](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicator(of:primaryString:alternativeStrings:forStringIn:view:completionHandler:)](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicator(for:)](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSSpellChecker.CorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.

# NSCorrectionResponse (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

## Declaration

```objectivec
enum NSCorrectionResponse : NSInteger;
```

## Topics

### Enumeration Cases

- [NSCorrectionResponseAccepted](correctionresponse/accepted.md): The user accepted the correction.
- [NSCorrectionResponseEdited](correctionresponse/edited.md): After the correction was accepted, the user edited the corrected word (to something other than its original form.
- [NSCorrectionResponseIgnored](correctionresponse/ignored.md): The user continued in such a way as to ignore the correction.
- [NSCorrectionResponseNone](correctionresponse/none.md): No response was received from the user.
- [NSCorrectionResponseRejected](correctionresponse/rejected.md): The user rejected the correction by dismissing the correction indicator.
- [NSCorrectionResponseReverted](correctionresponse/reverted.md): After the correction was accepted, the user reverted the correction back to the original word.

## See Also

### Automatic Spelling Correction

- [correctionForWordRange:inString:language:inSpellDocumentWithTag:](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicatorForView:](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSCorrectionIndicatorType](correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
