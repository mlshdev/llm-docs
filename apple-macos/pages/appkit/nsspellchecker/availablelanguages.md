> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/availablelanguages](https://developer.apple.com/documentation/appkit/nsspellchecker/availablelanguages)

# availableLanguages (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Provides a list of all available languages.

## Declaration

```swift
var availableLanguages: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array containing all the available spell checking languages. The languages are ordered in the user’s preferred order as set in the system preferences.

<a id="Discussion"></a>

## Discussion

If [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md) is [true](https://developer.apple.com/documentation/swift/true), then text checking will automatically use this method as appropriate; otherwise, it will use the language set by [setLanguage(\_:)](setlanguage%28__%29.md).

The older [checkSpelling(of:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:)](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md) and [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md). methods will use the language set by [setLanguage(\_:)](setlanguage%28__%29.md), if they are called with a `nil` language argument.

## See Also

### Configuring Spell Checkers Languages

- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language()](language%28%29.md): Returns the current language used in spell checking.
- [setLanguage(\_:)](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.

# availableLanguages (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Provides a list of all available languages.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableLanguages;
```

<a id="return-value"></a>

## Return Value

An array containing all the available spell checking languages. The languages are ordered in the user’s preferred order as set in the system preferences.

<a id="Discussion"></a>

## Discussion

If [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md) is [true](https://developer.apple.com/documentation/swift/true), then text checking will automatically use this method as appropriate; otherwise, it will use the language set by [setLanguage:](setlanguage%28__%29.md).

The older [checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:](checkspelling%28of_startingat_language_wrap_inspelldocumentwithtag_wordcount_%29.md) and [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md). methods will use the language set by [setLanguage:](setlanguage%28__%29.md), if they are called with a `nil` language argument.

## See Also

### Configuring Spell Checkers Languages

- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language](language%28%29.md): Returns the current language used in spell checking.
- [setLanguage:](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.
