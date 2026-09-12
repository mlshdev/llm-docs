> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/optionkey/orthography](https://developer.apple.com/documentation/appkit/nsspellchecker/optionkey/orthography)

# orthography (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.

## Declaration

```swift
static let orthography: NSSpellChecker.OptionKey
```

## See Also

### Spell Checker Options

- [documentAuthor](documentauthor.md): An NSString containing the name of an author to be associated with the document
- [documentTitle](documenttitle.md): An NSString containing the title to be associated with the document.
- [documentURL](documenturl.md): An NSURL to be associated with the document.
- [quotes](quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [referenceDate](referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [referenceTimeZone](referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [regularExpressions](regularexpressions.md)
- [replacements](replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [selectedRange](selectedrange.md)

# NSTextCheckingOrthographyKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.

## Declaration

```objectivec
extern NSTextCheckingOptionKey NSTextCheckingOrthographyKey;
```

## See Also

### Spell Checker Options

- [NSTextCheckingDocumentAuthorKey](documentauthor.md): An NSString containing the name of an author to be associated with the document
- [NSTextCheckingDocumentTitleKey](documenttitle.md): An NSString containing the title to be associated with the document.
- [NSTextCheckingDocumentURLKey](documenturl.md): An NSURL to be associated with the document.
- [NSTextCheckingQuotesKey](quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [NSTextCheckingReferenceDateKey](referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [NSTextCheckingReferenceTimeZoneKey](referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [NSTextCheckingRegularExpressionsKey](regularexpressions.md)
- [NSTextCheckingReplacementsKey](replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [NSTextCheckingSelectedRangeKey](selectedrange.md)
