> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/optionkey/documenttitle](https://developer.apple.com/documentation/appkit/nsspellchecker/optionkey/documenttitle)

# documentTitle (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An NSString containing the title to be associated with the document.

## Declaration

```swift
static let documentTitle: NSSpellChecker.OptionKey
```

## See Also

### Spell Checker Options

- [documentAuthor](documentauthor.md): An NSString containing the name of an author to be associated with the document
- [documentURL](documenturl.md): An NSURL to be associated with the document.
- [orthography](orthography.md): An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.
- [quotes](quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [referenceDate](referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [referenceTimeZone](referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [regularExpressions](regularexpressions.md)
- [replacements](replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [selectedRange](selectedrange.md)

# NSTextCheckingDocumentTitleKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

An NSString containing the title to be associated with the document.

## Declaration

```objectivec
extern NSTextCheckingOptionKey NSTextCheckingDocumentTitleKey;
```

## See Also

### Spell Checker Options

- [NSTextCheckingDocumentAuthorKey](documentauthor.md): An NSString containing the name of an author to be associated with the document
- [NSTextCheckingDocumentURLKey](documenturl.md): An NSURL to be associated with the document.
- [NSTextCheckingOrthographyKey](orthography.md): An `NSOrthography` instance indicating an orthography to be used as a starting point for orthography checking, or as the orthography if orthography checking is not enabled.
- [NSTextCheckingQuotesKey](quotes.md): An `NSArray` containing four strings to be used with `quoteCheckingResult(range:replacementString:)` (opening double quote, closing double quote, opening single quote, and closing single quote in that order).
- [NSTextCheckingReferenceDateKey](referencedate.md): An NSDate to be associated with the document, used as a referent for relative dates; if not specified, the current date will be used.
- [NSTextCheckingReferenceTimeZoneKey](referencetimezone.md): An NSTimeZone to be associated with the document, used as a reference for dates without time zones; if not specified, the current time zone will be used.
- [NSTextCheckingRegularExpressionsKey](regularexpressions.md)
- [NSTextCheckingReplacementsKey](replacements.md): An NSDictionary containing replacements to be used with NSTextCheckingTypeReplacement; if not specified, values will be taken from user’s preferences.
- [NSTextCheckingSelectedRangeKey](selectedrange.md)
