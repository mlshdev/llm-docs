> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/optionkey](https://developer.apple.com/documentation/appkit/nsspellchecker/optionkey)

# NSSpellChecker.OptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that define options for text checking.

## Declaration

```swift
struct OptionKey
```

<a id="overview"></a>

## Overview

The constants are optional keys that can be used in the options dictionary parameter of the [check(\_:range:types:options:inSpellDocumentWithTag:orthography:wordCount:)](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md), [requestChecking(of:range:types:options:inSpellDocumentWithTag:completionHandler:)](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md), and [menu(for:string:options:atLocation:in:)](menu%28for_string_options_atlocation_in_%29.md) methods.

## Topics

### Spell Checker Options

- [documentAuthor](optionkey/documentauthor.md): An NSString containing the name of an author to be associated with the document
- [documentTitle](optionkey/documenttitle.md): An NSString containing the title to be associated with the document.
- [documentURL](optionkey/documenturl.md): An NSURL to be associated with the document.
- [orthography](optionkey/orthography.md): An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.
- [quotes](optionkey/quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [referenceDate](optionkey/referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [referenceTimeZone](optionkey/referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [regularExpressions](optionkey/regularexpressions.md)
- [replacements](optionkey/replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [selectedRange](optionkey/selectedrange.md)

### Initializers

- [init(rawValue:)](optionkey/init%28rawvalue_%29.md)

### Getting additional option values

- [generateInlinePredictionsKey](optionkey/generateinlinepredictionskey.md)
- [automaticCapitalizationEnabledKey](optionkey/automaticcapitalizationenabledkey.md)
- [waitForAllGrammarCheckingResultsKey](optionkey/waitforallgrammarcheckingresultskey.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Detector Interaction

- [menu(for:string:options:atLocation:in:)](menu%28for_string_options_atlocation_in_%29.md): Provides a menu containing contextual menu items suitable for certain kinds of detected results.

# NSTextCheckingOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that define options for text checking.

## Declaration

```objectivec
typedef NSString * NSTextCheckingOptionKey;
```

<a id="overview"></a>

## Overview

The constants are optional keys that can be used in the options dictionary parameter of the [checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:](check%28__range_types_options_inspelldocumentwithtag_orthography_wordcount_%29.md), [requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:](requestchecking%28of_range_types_options_inspelldocumentwithtag_completionhandler_%29.md), and [menuForResult:string:options:atLocation:inView:](menu%28for_string_options_atlocation_in_%29.md) methods.

## Topics

### Spell Checker Options

- [NSTextCheckingDocumentAuthorKey](optionkey/documentauthor.md): An NSString containing the name of an author to be associated with the document
- [NSTextCheckingDocumentTitleKey](optionkey/documenttitle.md): An NSString containing the title to be associated with the document.
- [NSTextCheckingDocumentURLKey](optionkey/documenturl.md): An NSURL to be associated with the document.
- [NSTextCheckingOrthographyKey](optionkey/orthography.md): An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.
- [NSTextCheckingQuotesKey](optionkey/quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [NSTextCheckingReferenceDateKey](optionkey/referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [NSTextCheckingReferenceTimeZoneKey](optionkey/referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [NSTextCheckingRegularExpressionsKey](optionkey/regularexpressions.md)
- [NSTextCheckingReplacementsKey](optionkey/replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [NSTextCheckingSelectedRangeKey](optionkey/selectedrange.md)

### Getting additional option values

- [NSTextCheckingGenerateInlinePredictionsKey](optionkey/generateinlinepredictionskey.md)
- [NSTextCheckingAutomaticCapitalizationEnabledKey](optionkey/automaticcapitalizationenabledkey.md)
- [NSTextCheckingWaitForAllGrammarCheckingResultsKey](optionkey/waitforallgrammarcheckingresultskey.md)

## See Also

### Data Detector Interaction

- [menuForResult:string:options:atLocation:inView:](menu%28for_string_options_atlocation_in_%29.md): Provides a menu containing contextual menu items suitable for certain kinds of detected results.
