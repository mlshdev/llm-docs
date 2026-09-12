> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker](https://developer.apple.com/documentation/appkit/nsspellchecker)

# NSSpellChecker (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface to the Cocoa spell-checking service.

## Declaration

```swift
class NSSpellChecker
```

<a id="overview"></a>

## Overview

To handle all its spell checking, an app needs only one instance of [NSSpellChecker](nsspellchecker.md), known as the spell checker. Using the spell checker you manage the Spelling panel, in which the user can specify decisions about words that are suspect. The spell checker also offers the ability to provide word completions to augment the text completion system.

## Topics

### Getting the Spell Checker

- [shared](nsspellchecker/shared.md): Returns the NSSpellChecker (one per application).
- [sharedSpellCheckerExists](nsspellchecker/sharedspellcheckerexists.md): Returns whether the application’s NSSpellChecker has already been created.

### Configuring Spell Checkers Languages

- [availableLanguages](nsspellchecker/availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](nsspellchecker/userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](nsspellchecker/automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language()](nsspellchecker/language%28%29.md): Returns the current language used in spell checking.
- [setLanguage(\_:)](nsspellchecker/setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.

### Managing Panels

- [spellingPanel](nsspellchecker/spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](nsspellchecker/substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanel(withGrammarString:detail:)](nsspellchecker/updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels()](nsspellchecker/updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](nsspellchecker/accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](nsspellchecker/substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

### Checking Strings for Spelling and Grammar

- [countWords(in:language:)](nsspellchecker/countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpelling(of:startingAt:)](nsspellchecker/checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](nsspellchecker/checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](nsspellchecker/checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](nsspellchecker/check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](nsspellchecker/requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guesses(forWordRange:in:language:inSpellDocumentWithTag:)](nsspellchecker/guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

### Managing the Spell-Checking Process

- [uniqueSpellDocumentTag()](nsspellchecker/uniquespelldocumenttag%28%29.md): Returns a guaranteed unique tag to use as the spell-document tag for a document.
- [closeSpellDocument(withTag:)](nsspellchecker/closespelldocument%28withtag_%29.md): Notifies the receiver that the user has finished with the tagged document.
- [ignoreWord(\_:inSpellDocumentWithTag:)](nsspellchecker/ignoreword%28__inspelldocumentwithtag_%29.md): Instructs the spell checker to ignore all future occurrences of `wordToIgnore` in the document identified by `tag`.
- [ignoredWords(inSpellDocumentWithTag:)](nsspellchecker/ignoredwords%28inspelldocumentwithtag_%29.md): Returns the array of ignored words for a document identified by `tag`.
- [setIgnoredWords(\_:inSpellDocumentWithTag:)](nsspellchecker/setignoredwords%28__inspelldocumentwithtag_%29.md): Initializes the ignored-words document (a dictionary identified by `tag` with `someWords`), an array of words to ignore.
- [setWordFieldStringValue(\_:)](nsspellchecker/setwordfieldstringvalue%28__%29.md): Sets the string that appears in the misspelled word field, using the string object `aString`.
- [updateSpellingPanel(withMisspelledWord:)](nsspellchecker/updatespellingpanel%28withmisspelledword_%29.md): Causes the spell checker to update the Spelling panel’s misspelled-word field to reflect `word`.
- [completions(forPartialWordRange:in:language:inSpellDocumentWithTag:)](nsspellchecker/completions%28forpartialwordrange_in_language_inspelldocumentwithtag_%29.md): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.
- [hasLearnedWord(\_:)](nsspellchecker/haslearnedword%28__%29.md): Indicates whether the spell checker has learned a given word.
- [unlearnWord(\_:)](nsspellchecker/unlearnword%28__%29.md): Tells the spell checker to unlearn a given word.
- [learnWord(\_:)](nsspellchecker/learnword%28__%29.md): Adds the word to the spell checker dictionary.
- [userQuotesArray(forLanguage:)](nsspellchecker/userquotesarray%28forlanguage_%29.md): Returns the default values for quote replacement.
- [userReplacementsDictionary](nsspellchecker/userreplacementsdictionary.md): Returns the dictionary used when replacing words.

### Data Detector Interaction

- [menu(for:string:options:atLocation:in:)](nsspellchecker/menu%28for_string_options_atlocation_in_%29.md): Provides a menu containing contextual menu items suitable for certain kinds of detected results.
- [NSSpellChecker.OptionKey](nsspellchecker/optionkey.md): Constants that define options for text checking.

### Automatic Spelling Correction

- [correction(forWordRange:in:language:inSpellDocumentWithTag:)](nsspellchecker/correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicator(of:primaryString:alternativeStrings:forStringIn:view:completionHandler:)](nsspellchecker/showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](nsspellchecker/record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicator(for:)](nsspellchecker/dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSSpellChecker.CorrectionIndicatorType](nsspellchecker/correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSSpellChecker.CorrectionResponse](nsspellchecker/correctionresponse.md): The correction response passed to the[record(\_:toCorrection:forWord:language:inSpellDocumentWithTag:)](nsspellchecker/record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

### Notifications

- [didChangeAutomaticSpellingCorrectionNotification](nsspellchecker/didchangeautomaticspellingcorrectionnotification.md): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [didChangeAutomaticTextReplacementNotification](nsspellchecker/didchangeautomatictextreplacementnotification.md): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.

### Type Properties

- [didChangeAutomaticCapitalizationNotification](nsspellchecker/didchangeautomaticcapitalizationnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticCapitalizationMessage](nsspellchecker/didchangeautomaticcapitalizationmessage.md).
- [didChangeAutomaticDashSubstitutionNotification](nsspellchecker/didchangeautomaticdashsubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage](nsspellchecker/didchangeautomaticdashsubstitutionmessage.md).
- [didChangeAutomaticPeriodSubstitutionNotification](nsspellchecker/didchangeautomaticperiodsubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage](nsspellchecker/didchangeautomaticperiodsubstitutionmessage.md).
- [didChangeAutomaticQuoteSubstitutionNotification](nsspellchecker/didchangeautomaticquotesubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage](nsspellchecker/didchangeautomaticquotesubstitutionmessage.md).
- [didChangeAutomaticTextCompletionNotification](nsspellchecker/didchangeautomatictextcompletionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextCompletionMessage](nsspellchecker/didchangeautomatictextcompletionmessage.md).
- [isAutomaticCapitalizationEnabled](nsspellchecker/isautomaticcapitalizationenabled.md)
- [isAutomaticDashSubstitutionEnabled](nsspellchecker/isautomaticdashsubstitutionenabled.md)
- [isAutomaticInlinePredictionEnabled](nsspellchecker/isautomaticinlinepredictionenabled.md)
- [isAutomaticPeriodSubstitutionEnabled](nsspellchecker/isautomaticperiodsubstitutionenabled.md)
- [isAutomaticQuoteSubstitutionEnabled](nsspellchecker/isautomaticquotesubstitutionenabled.md)
- [isAutomaticSpellingCorrectionEnabled](nsspellchecker/isautomaticspellingcorrectionenabled.md)
- [isAutomaticTextCompletionEnabled](nsspellchecker/isautomatictextcompletionenabled.md)
- [isAutomaticTextReplacementEnabled](nsspellchecker/isautomatictextreplacementenabled.md)

### Instance Methods

- [deletesAutospaceBetweenString(\_:andString:language:)](nsspellchecker/deletesautospacebetweenstring%28__andstring_language_%29.md)
- [language(forWordRange:in:orthography:)](nsspellchecker/language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrection(before:language:)](nsspellchecker/preventsautocorrection%28before_language_%29.md)
- [requestCandidates(forSelectedRange:in:types:options:inSpellDocumentWithTag:completionHandler:)](nsspellchecker/requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePrediction(forCandidates:client:)](nsspellchecker/showinlineprediction%28forcandidates_client_%29.md)
- [ignoreGrammarRange(\_:inSentence:inSpellDocumentWithTag:)](nsspellchecker/ignoregrammarrange%28__insentence_inspelldocumentwithtag_%29.md)

### Structures

- [NSSpellChecker.DidChangeAutomaticCapitalizationMessage](nsspellchecker/didchangeautomaticcapitalizationmessage.md)
- [NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage](nsspellchecker/didchangeautomaticdashsubstitutionmessage.md)
- [NSSpellChecker.DidChangeAutomaticInlinePredictionMessage](nsspellchecker/didchangeautomaticinlinepredictionmessage.md)
- [NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage](nsspellchecker/didchangeautomaticperiodsubstitutionmessage.md)
- [NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage](nsspellchecker/didchangeautomaticquotesubstitutionmessage.md)
- [NSSpellChecker.DidChangeAutomaticSpellingCorrectionMessage](nsspellchecker/didchangeautomaticspellingcorrectionmessage.md)
- [NSSpellChecker.DidChangeAutomaticTextCompletionMessage](nsspellchecker/didchangeautomatictextcompletionmessage.md)
- [NSSpellChecker.DidChangeAutomaticTextReplacementMessage](nsspellchecker/didchangeautomatictextreplacementmessage.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Spell-checking

- [NSChangeSpelling](nschangespelling.md): A protocol that responder objects can implement to correct a misspelled word.
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md): A protocol that enables the Ignore button in the Spelling panel to function properly.

# NSSpellChecker (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface to the Cocoa spell-checking service.

## Declaration

```objectivec
@interface NSSpellChecker : NSObject
```

<a id="overview"></a>

## Overview

To handle all its spell checking, an app needs only one instance of [NSSpellChecker](nsspellchecker.md), known as the spell checker. Using the spell checker you manage the Spelling panel, in which the user can specify decisions about words that are suspect. The spell checker also offers the ability to provide word completions to augment the text completion system.

## Topics

### Getting the Spell Checker

- [sharedSpellChecker](nsspellchecker/shared.md): Returns the NSSpellChecker (one per application).
- [sharedSpellCheckerExists](nsspellchecker/sharedspellcheckerexists.md): Returns whether the application’s NSSpellChecker has already been created.

### Configuring Spell Checkers Languages

- [availableLanguages](nsspellchecker/availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](nsspellchecker/userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](nsspellchecker/automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language](nsspellchecker/language%28%29.md): Returns the current language used in spell checking.
- [setLanguage:](nsspellchecker/setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.

### Managing Panels

- [spellingPanel](nsspellchecker/spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](nsspellchecker/substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanelWithGrammarString:detail:](nsspellchecker/updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels](nsspellchecker/updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](nsspellchecker/accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](nsspellchecker/substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

### Checking Strings for Spelling and Grammar

- [countWordsInString:language:](nsspellchecker/countwords%28in_language_%29.md): Returns the number of words in the specified string.
- [checkSpellingOfString:startingAt:](nsspellchecker/checkspelling%28of_startingat_%29.md): Starts the search for a misspelled word in `stringToCheck` starting at `startingOffset` within the string object.
- [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](nsspellchecker/checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md): Starts the search for a misspelled word in a string starting at specified offset within the string.
- [guessesForWord:](nsspellchecker/guessesforword_.md): Deprecated. Returns an array of suggested spellings for the misspelled word.
- [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](nsspellchecker/checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md): Initiates a grammatical analysis of a given string.
- [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](nsspellchecker/check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md): Requests unified text checking for the given range of the given string.
- [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](nsspellchecker/requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md): Requests that the string be checked in the background.
- [guessesForWordRange:inString:language:inSpellDocumentWithTag:](nsspellchecker/guesses%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns an array of possible substitutions for the specified string.

### Managing the Spell-Checking Process

- [uniqueSpellDocumentTag](nsspellchecker/uniquespelldocumenttag%28%29.md): Returns a guaranteed unique tag to use as the spell-document tag for a document.
- [closeSpellDocumentWithTag:](nsspellchecker/closespelldocument%28withtag_%29.md): Notifies the receiver that the user has finished with the tagged document.
- [ignoreWord:inSpellDocumentWithTag:](nsspellchecker/ignoreword%28__inspelldocumentwithtag_%29.md): Instructs the spell checker to ignore all future occurrences of `wordToIgnore` in the document identified by `tag`.
- [ignoredWordsInSpellDocumentWithTag:](nsspellchecker/ignoredwords%28inspelldocumentwithtag_%29.md): Returns the array of ignored words for a document identified by `tag`.
- [setIgnoredWords:inSpellDocumentWithTag:](nsspellchecker/setignoredwords%28__inspelldocumentwithtag_%29.md): Initializes the ignored-words document (a dictionary identified by `tag` with `someWords`), an array of words to ignore.
- [setWordFieldStringValue:](nsspellchecker/setwordfieldstringvalue%28__%29.md): Sets the string that appears in the misspelled word field, using the string object `aString`.
- [updateSpellingPanelWithMisspelledWord:](nsspellchecker/updatespellingpanel%28withmisspelledword_%29.md): Causes the spell checker to update the Spelling panel’s misspelled-word field to reflect `word`.
- [completionsForPartialWordRange:inString:language:inSpellDocumentWithTag:](nsspellchecker/completions%28forpartialwordrange_in_language_inspelldocumentwithtag_%29.md): Provides a list of complete words that the user might be trying to type based on a partial word in a given string.
- [hasLearnedWord:](nsspellchecker/haslearnedword%28__%29.md): Indicates whether the spell checker has learned a given word.
- [unlearnWord:](nsspellchecker/unlearnword%28__%29.md): Tells the spell checker to unlearn a given word.
- [forgetWord:](nsspellchecker/forgetword_.md): Deprecated. Remove this word from the spelling dictionary.
- [learnWord:](nsspellchecker/learnword%28__%29.md): Adds the word to the spell checker dictionary.
- [userQuotesArrayForLanguage:](nsspellchecker/userquotesarray%28forlanguage_%29.md): Returns the default values for quote replacement.
- [userReplacementsDictionary](nsspellchecker/userreplacementsdictionary.md): Returns the dictionary used when replacing words.

### Data Detector Interaction

- [menuForResult:string:options:atLocation:inView:](nsspellchecker/menu%28for_string_options_atlocation_in_%29.md): Provides a menu containing contextual menu items suitable for certain kinds of detected results.
- [NSTextCheckingOptionKey](nsspellchecker/optionkey.md): Constants that define options for text checking.

### Automatic Spelling Correction

- [correctionForWordRange:inString:language:inSpellDocumentWithTag:](nsspellchecker/correction%28forwordrange_in_language_inspelldocumentwithtag_%29.md): Returns a single proposed correction if a word is mis-spelled.
- [showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:](nsspellchecker/showcorrectionindicator%28of_primarystring_alternativestrings_forstringin_view_completionhandler_%29.md): Display a suitable user interface to indicate a correction may need to be made.
- [recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](nsspellchecker/record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md): Records the user response to the correction indicator being displayed.
- [dismissCorrectionIndicatorForView:](nsspellchecker/dismisscorrectionindicator%28for_%29.md): Dismisses the correction indicator for the specified view.
- [NSCorrectionIndicatorType](nsspellchecker/correctionindicatortype.md): Constants that allow an app to specify the correction indicator type displayed.
- [NSCorrectionResponse](nsspellchecker/correctionresponse.md): The correction response passed to the[recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:](nsspellchecker/record%28__tocorrection_forword_language_inspelldocumentwithtag_%29.md) method.

### Notifications

- [NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification](nsspellchecker/didchangeautomaticspellingcorrectionnotification.md): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [NSSpellCheckerDidChangeAutomaticTextReplacementNotification](nsspellchecker/didchangeautomatictextreplacementnotification.md): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.
- [NSSpellCheckerDidChangeAutomaticInlinePredictionNotification](nsspellcheckerdidchangeautomaticinlinepredictionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticInlinePredictionMessage](nsspellchecker/didchangeautomaticinlinepredictionmessage.md).

### Type Properties

- [NSSpellCheckerDidChangeAutomaticCapitalizationNotification](nsspellchecker/didchangeautomaticcapitalizationnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticCapitalizationMessage](nsspellchecker/didchangeautomaticcapitalizationmessage.md).
- [NSSpellCheckerDidChangeAutomaticDashSubstitutionNotification](nsspellchecker/didchangeautomaticdashsubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage](nsspellchecker/didchangeautomaticdashsubstitutionmessage.md).
- [NSSpellCheckerDidChangeAutomaticPeriodSubstitutionNotification](nsspellchecker/didchangeautomaticperiodsubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage](nsspellchecker/didchangeautomaticperiodsubstitutionmessage.md).
- [NSSpellCheckerDidChangeAutomaticQuoteSubstitutionNotification](nsspellchecker/didchangeautomaticquotesubstitutionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage](nsspellchecker/didchangeautomaticquotesubstitutionmessage.md).
- [NSSpellCheckerDidChangeAutomaticTextCompletionNotification](nsspellchecker/didchangeautomatictextcompletionnotification.md): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextCompletionMessage](nsspellchecker/didchangeautomatictextcompletionmessage.md).
- [automaticCapitalizationEnabled](nsspellchecker/isautomaticcapitalizationenabled.md)
- [automaticDashSubstitutionEnabled](nsspellchecker/isautomaticdashsubstitutionenabled.md)
- [automaticInlinePredictionEnabled](nsspellchecker/isautomaticinlinepredictionenabled.md)
- [automaticPeriodSubstitutionEnabled](nsspellchecker/isautomaticperiodsubstitutionenabled.md)
- [automaticQuoteSubstitutionEnabled](nsspellchecker/isautomaticquotesubstitutionenabled.md)
- [automaticSpellingCorrectionEnabled](nsspellchecker/isautomaticspellingcorrectionenabled.md)
- [automaticTextCompletionEnabled](nsspellchecker/isautomatictextcompletionenabled.md)
- [automaticTextReplacementEnabled](nsspellchecker/isautomatictextreplacementenabled.md)

### Instance Methods

- [deletesAutospaceBetweenString:andString:language:](nsspellchecker/deletesautospacebetweenstring%28__andstring_language_%29.md)
- [languageForWordRange:inString:orthography:](nsspellchecker/language%28forwordrange_in_orthography_%29.md)
- [preventsAutocorrectionBeforeString:language:](nsspellchecker/preventsautocorrection%28before_language_%29.md)
- [requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler:](nsspellchecker/requestcandidates%28forselectedrange_in_types_options_inspelldocumentwithtag_completionhandler_%29.md)
- [showInlinePredictionForCandidates:client:](nsspellchecker/showinlineprediction%28forcandidates_client_%29.md)
- [ignoreGrammarRange:inSentence:inSpellDocumentWithTag:](nsspellchecker/ignoregrammarrange%28__insentence_inspelldocumentwithtag_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Spell-checking

- [NSChangeSpelling](nschangespelling.md): A protocol that responder objects can implement to correct a misspelled word.
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md): A protocol that enables the Ignore button in the Spelling panel to function properly.
