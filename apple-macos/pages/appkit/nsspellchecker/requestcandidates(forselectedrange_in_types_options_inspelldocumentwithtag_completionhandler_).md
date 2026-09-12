> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/requestcandidates(forselectedrange:in:types:options:inspelldocumentwithtag:completionhandler:)](https://developer.apple.com/documentation/appkit/nsspellchecker/requestcandidates(forselectedrange:in:types:options:inspelldocumentwithtag:completionhandler:))

# requestCandidates(forSelectedRange:in:types:options:inSpellDocumentWithTag:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```swift
func requestCandidates(forSelectedRange selectedRange: NSRange, in stringToCheck: String, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any]? = nil, inSpellDocumentWithTag tag: Int, completionHandler: ((Int, [NSTextCheckingResult]) -> Void)? = nil) -> Int
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString(\_:andString:language:)](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [language(forWordRange:in:orthography:)](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrection(before:language:)](preventsautocorrection%28before_language_%29.md)
- [showInlinePrediction(forCandidates:client:)](showinlineprediction%28forcandidates_client_%29.md)

# requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```objectivec
- (NSInteger) requestCandidatesForSelectedRange:(NSRange) selectedRange inString:(NSString *) stringToCheck types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options inSpellDocumentWithTag:(NSInteger) tag completionHandler:(void (^)(NSInteger sequenceNumber, NSArray<NSTextCheckingResult *> *candidates)) completionHandler;
```

## See Also

### Instance Methods

- [deletesAutospaceBetweenString:andString:language:](deletesautospacebetweenstring%28__andstring_language_%29.md)
- [languageForWordRange:inString:orthography:](language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrectionBeforeString:language:](preventsautocorrection%28before_language_%29.md)
- [showInlinePredictionForCandidates:client:](showinlineprediction%28forcandidates_client_%29.md)
