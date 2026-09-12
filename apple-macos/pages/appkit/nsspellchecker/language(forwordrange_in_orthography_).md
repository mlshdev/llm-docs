> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/language(forwordrange:in:orthography:)](https://developer.apple.com/documentation/appkit/nsspellchecker/language(forwordrange:in:orthography:))

# language(forWordRange:in:orthography:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```swift
func language(forWordRange range: NSRange, in string: String, orthography: NSOrthography?) -> String?
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString(\_:andString:language:)](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [preventsAutocorrection(before:language:)](preventsautocorrection%28before_language_%29.md)
- [requestCandidates(forSelectedRange:in:types:options:inSpellDocumentWithTag:completionHandler:)](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePrediction(forCandidates:client:)](showinlineprediction%28forcandidates_client_%29.md)

# languageForWordRange:inString:orthography: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```objectivec
- (NSString *) languageForWordRange:(NSRange) range inString:(NSString *) string orthography:(NSOrthography *) orthography;
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString:andString:language:](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [preventsAutocorrectionBeforeString:language:](preventsautocorrection%28before_language_%29.md)
- [requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler:](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePredictionForCandidates:client:](showinlineprediction%28forcandidates_client_%29.md)
