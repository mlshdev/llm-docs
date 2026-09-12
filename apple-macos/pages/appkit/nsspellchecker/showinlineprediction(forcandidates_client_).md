> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/showinlineprediction(forcandidates:client:)](https://developer.apple.com/documentation/appkit/nsspellchecker/showinlineprediction(forcandidates:client:))

# showInlinePrediction(forCandidates:client:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func showInlinePrediction(forCandidates candidates: [NSTextCheckingResult], client: any NSTextInputClient)
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString(\_:andString:language:)](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [language(forWordRange:in:orthography:)](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrection(before:language:)](preventsautocorrection%28before_language_%29.md)
- [requestCandidates(forSelectedRange:in:types:options:inSpellDocumentWithTag:completionHandler:)](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)

# showInlinePredictionForCandidates:client: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) showInlinePredictionForCandidates:(NSArray<NSTextCheckingResult *> *) candidates client:(id<NSTextInputClient>) client;
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString:andString:language:](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [languageForWordRange:inString:orthography:](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrectionBeforeString:language:](preventsautocorrection%28before_language_%29.md)
- [requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler:](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
