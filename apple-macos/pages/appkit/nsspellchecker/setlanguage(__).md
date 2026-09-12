> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/setlanguage(_:)](https://developer.apple.com/documentation/appkit/nsspellchecker/setlanguage(_:))

# setLanguage(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified language is in the Spelling pop-up list.

## Declaration

```swift
func setLanguage(_ language: String) -> Bool
```

## Parameters

- `language`: The requested language.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the language is available in the pop-up list, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The code listing below shows how languages can be specified in language. If the language specified is listed in the user’s list of preferred languages, the spell checker uses that language to accomplish its task.

Listing 1. Specifying the spell checker language

```objc
NSSpellChecker* spell_checker = [NSSpellChecker sharedSpellChecker];
 
// Sets language to French. The language method returns "fr".
[spell_checker setLanguage:@"fr"];
 
// Sets language to the one spoken in Netherlands (English). The language method returns "en".
[spell_checker setLanguage:@"NL"];
 
// Sets language to British English. The language method returns "en_GB".
[spell_checker setLanguage:@"en_GB"]
 
 // Sets language to German. The language method returns "de".
[spell_checker setLanguage:@"German"];
```

For information about the strings you can use to specify a language, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language()](language%28%29.md): Returns the current language used in spell checking.

# setLanguage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified language is in the Spelling pop-up list.

## Declaration

```objectivec
- (BOOL) setLanguage:(NSString *) language;
```

## Parameters

- `language`: The requested language.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the language is available in the pop-up list, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The code listing below shows how languages can be specified in language. If the language specified is listed in the user’s list of preferred languages, the spell checker uses that language to accomplish its task.

Listing 1. Specifying the spell checker language

```objc
NSSpellChecker* spell_checker = [NSSpellChecker sharedSpellChecker];
 
// Sets language to French. The language method returns "fr".
[spell_checker setLanguage:@"fr"];
 
// Sets language to the one spoken in Netherlands (English). The language method returns "en".
[spell_checker setLanguage:@"NL"];
 
// Sets language to British English. The language method returns "en_GB".
[spell_checker setLanguage:@"en_GB"]
 
 // Sets language to German. The language method returns "de".
[spell_checker setLanguage:@"German"];
```

For information about the strings you can use to specify a language, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [automaticallyIdentifiesLanguages](automaticallyidentifieslanguages.md): Sets whether the spell checker will automatically identify languages.
- [language](language%28%29.md): Returns the current language used in spell checking.
