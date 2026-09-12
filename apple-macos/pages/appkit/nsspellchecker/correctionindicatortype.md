> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/correctionindicatortype](https://developer.apple.com/documentation/appkit/nsspellchecker/correctionindicatortype)

# NSSpellChecker.CorrectionIndicatorType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that allow an app to specify the correction indicator type displayed.

## Declaration

```swift
enum CorrectionIndicatorType
```

## Topics

### Constants

- [NSSpellChecker.CorrectionIndicatorType.default](correctionindicatortype/default.md): The default indicator that shows a proposed correction.
- [NSSpellChecker.CorrectionIndicatorType.reversion](correctionindicatortype/reversion.md): Provides the option to revert to the original form after a correction has been made.
- [NSSpellChecker.CorrectionIndicatorType.guesses](correctionindicatortype/guesses.md): Shows multiple alternatives from which the user may choose the appropriate spelling.

### Initializers

- [init(rawValue:)](correctionindicatortype/init%28rawvalue_%29.md)

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
- [NSSpellChecker.CorrectionResponse](correctionresponse.md): The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

# NSCorrectionIndicatorType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that allow an app to specify the correction indicator type displayed.

## Declaration

```objectivec
enum NSCorrectionIndicatorType : NSInteger;
```

## Topics

### Constants

- [NSCorrectionIndicatorTypeDefault](correctionindicatortype/default.md): The default indicator that shows a proposed correction.
- [NSCorrectionIndicatorTypeReversion](correctionindicatortype/reversion.md): Provides the option to revert to the original form after a correction has been made.
- [NSCorrectionIndicatorTypeGuesses](correctionindicatortype/guesses.md): Shows multiple alternatives from which the user may choose the appropriate spelling.

## See Also

### Automatic Spelling Correction

- [correctionForWordRange:inString:language:inSpellDocumentWithTag:](correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicatorForView:](dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSCorrectionResponse](correctionresponse.md): The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.
