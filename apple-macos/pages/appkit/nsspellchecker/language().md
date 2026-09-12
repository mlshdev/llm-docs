> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/language()](https://developer.apple.com/documentation/appkit/nsspellchecker/language())

# language() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the current language used in spell checking.

## Declaration

```swift
func language() -> String
```

<a id="return-value"></a>

## Return Value

The current spell checking language, as a string.

<a id="Discussion"></a>

## Discussion

The result string specifies the language using the language and regional designations described in [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [setLanguage(\_:)](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.

# language (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the current language used in spell checking.

## Declaration

```objectivec
- (NSString *) language;
```

<a id="return-value"></a>

## Return Value

The current spell checking language, as a string.

<a id="Discussion"></a>

## Discussion

The result string specifies the language using the language and regional designations described in [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [setLanguage:](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.
