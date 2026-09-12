> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbrailletable](https://developer.apple.com/documentation/accessibility/axbrailletable)

# AXBrailleTable (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A rule for translating print text to Braille, and back-translating Braille to print text.

## Declaration

```swift
class AXBrailleTable
```

## Topics

### Initializers

- [init(coder:)](axbrailletable/init%28coder_%29.md)
- [init(identifier:)](axbrailletable/init%28identifier_%29.md): Returns nil if there is no table with the given identifier.

### Instance Properties

- [identifier](axbrailletable/identifier.md): A unique string that identifies this table.
- [isEightDot](axbrailletable/iseightdot.md): Returns true if this table makes use of eight dots as opposed to six dots.
- [language](axbrailletable/language-3stsd.md)
- [locales](axbrailletable/locales.md): All locales this table supports.
- [localizedName](axbrailletable/localizedname.md): The localized name of this table for user display.
- [localizedProviderName](axbrailletable/localizedprovidername.md): The localized name of the provider of this table for user display.
- [providerIdentifier](axbrailletable/provideridentifier.md): The identifier of the provider of this table.

### Type Methods

- [defaultTable(for:)](axbrailletable/defaulttable%28for_%29.md): The default table that provides translations for the given locale’s language. Returns nil if there is none.
- [languageAgnosticTables()](axbrailletable/languageagnostictables%28%29.md): All tables that are not specific to any language.
- [supportedLocales()](axbrailletable/supportedlocales%28%29.md): All locales supported by existing tables.
- [tables(for:)](axbrailletable/tables%28for_%29.md): All tables that provide translations for the given locale’s language.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.

# AXBrailleTable (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A rule for translating print text to Braille, and back-translating Braille to print text.

## Declaration

```objectivec
@interface AXBrailleTable : NSObject
```

## Topics

### Instance Properties

- [identifier](axbrailletable/identifier.md): A unique string that identifies this table.
- [isEightDot](axbrailletable/iseightdot.md): Returns true if this table makes use of eight dots as opposed to six dots.
- [language](axbrailletable/language-3570f.md): The 3-character code from ISO 639-2 for the language this Braille table pertains to.
- [locales](axbrailletable/locales.md): All locales this table supports.
- [localizedName](axbrailletable/localizedname.md): The localized name of this table for user display.
- [localizedProviderName](axbrailletable/localizedprovidername.md): The localized name of the provider of this table for user display.
- [providerIdentifier](axbrailletable/provideridentifier.md): The identifier of the provider of this table.

### Instance Methods

- [initWithIdentifier:](axbrailletable/init%28identifier_%29.md): Returns nil if there is no table with the given identifier.

### Type Methods

- [defaultTableForLocale:](axbrailletable/defaulttable%28for_%29.md): The default table that provides translations for the given locale’s language. Returns nil if there is none.
- [languageAgnosticTables](axbrailletable/languageagnostictables%28%29.md): All tables that are not specific to any language.
- [supportedLocales](axbrailletable/supportedlocales%28%29.md): All locales supported by existing tables.
- [tablesForLocale:](axbrailletable/tables%28for_%29.md): All tables that provide translations for the given locale’s language.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.
