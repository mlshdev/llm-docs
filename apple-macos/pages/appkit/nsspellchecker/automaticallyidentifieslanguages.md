> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/automaticallyidentifieslanguages](https://developer.apple.com/documentation/appkit/nsspellchecker/automaticallyidentifieslanguages)

# automaticallyIdentifiesLanguages (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Sets whether the spell checker will automatically identify languages.

## Declaration

```swift
var automaticallyIdentifiesLanguages: Bool { get set }
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if languages should be automatically identified, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [language()](language%28%29.md): Returns the current language used in spell checking.
- [setLanguage(\_:)](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.

# automaticallyIdentifiesLanguages (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Sets whether the spell checker will automatically identify languages.

## Declaration

```objectivec
@property BOOL automaticallyIdentifiesLanguages;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if languages should be automatically identified, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Spell Checkers Languages

- [availableLanguages](availablelanguages.md): Provides a list of all available languages.
- [userPreferredLanguages](userpreferredlanguages.md): Provides a subset of the available languages to be used for spell checking.
- [language](language%28%29.md): Returns the current language used in spell checking.
- [setLanguage:](setlanguage%28__%29.md): Returns whether the specified language is in the Spelling pop-up list.
