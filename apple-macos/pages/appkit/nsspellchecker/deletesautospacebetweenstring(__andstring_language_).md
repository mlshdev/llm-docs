> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/deletesautospacebetweenstring(_:andstring:language:)](https://developer.apple.com/documentation/appkit/nsspellchecker/deletesautospacebetweenstring(_:andstring:language:))

# deletesAutospaceBetweenString(\_:andString:language:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```swift
func deletesAutospaceBetweenString(_ precedingString: String, andString followingString: String, language: String?) -> Bool
```

## See Also

### Instance Methods

- [language(forWordRange:in:orthography:)](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrection(before:language:)](preventsautocorrection%28before_language_%29.md)
- [requestCandidates(forSelectedRange:in:types:options:inSpellDocumentWithTag:completionHandler:)](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePrediction(forCandidates:client:)](showinlineprediction%28forcandidates_client_%29.md)

# deletesAutospaceBetweenString:andString:language: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```objectivec
- (BOOL) deletesAutospaceBetweenString:(NSString *) precedingString andString:(NSString *) followingString language:(NSString *) language;
```

## See Also

### Instance Methods

- [languageForWordRange:inString:orthography:](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrectionBeforeString:language:](preventsautocorrection%28before_language_%29.md)
- [requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler:](requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePredictionForCandidates:client:](showinlineprediction%28forcandidates_client_%29.md)
