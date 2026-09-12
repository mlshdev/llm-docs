> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorthography](https://developer.apple.com/documentation/foundation/nsorthography)

# NSOrthography (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the linguistic content of natural language text, typically used for spelling and grammar checking.

## Declaration

```swift
class NSOrthography
```

<a id="overview"></a>

## Overview

Use [NSOrthography](nsorthography.md) objects to describe the linguistic content of a piece of text, including which scripts the text contains, a dominant language (and possibly other languages) for each script, and a dominant script and language for the text as a whole.

Scripts are uniformly described by four-letter ISO 15924 script codes, such as `"Latn"`, `"Grek"`, and `"Cyrl"`. The supertags `"Jpan"` and `"Kore"` are typically used for Japanese and Korean text, and `"Hans"` and `"Hant"` are typically used for Chinese text. The tag `"Zyyy"` is used if a specific script cannot be identified. See [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i) for more information.

Languages are uniformly described by BCP-47 tags (preferably in canonical form). The tag `"und"` is used if a specific language cannot be determined.

You typically work with orthography objects returned from methods and properties for classes like [NSLinguisticTagger](nslinguistictagger.md) and [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Subclasses must override the [dominantScript](nsorthography/dominantscript.md) and [languageMap](nsorthography/languagemap.md) properties. These properties are set using [init(dominantScript:languageMap:)](nsorthography/init%28dominantscript_languagemap_%29.md) or [orthographyWithDominantScript:languageMap:](nsorthography/orthographywithdominantscript_languagemap_.md) in Objective-C.

## Topics

### Creating Orthography Objects

- [defaultOrthography(forLanguage:)](nsorthography/defaultorthography%28forlanguage_%29.md): Creates and returns an orthography object with the default language map for the specified language.
- [init(dominantScript:languageMap:)](nsorthography/init%28dominantscript_languagemap_%29.md): Creates an orthography object with the specified dominant script and language map.

### Determining Correspondences Between Languages and Scripts

- [languageMap](nsorthography/languagemap.md): A dictionary that maps script tags to arrays of language tags.
- [dominantLanguage](nsorthography/dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantScript](nsorthography/dominantscript.md): The dominant script for the text.
- [dominantLanguage(forScript:)](nsorthography/dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languages(forScript:)](nsorthography/languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](nsorthography/allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](nsorthography/alllanguages.md): The languages appearing in values of the language map.

### Initializers

- [init(coder:)](nsorthography/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Localization

- [Locale](locale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSLocalizedString(\_:tableName:bundle:value:comment:)](nslocalizedstring%28__tablename_bundle_value_comment_%29.md): Returns a localized string from a table that Xcode generates for you when exporting localizations.
- [LocalizedStringResource](localizedstringresource.md): A reference to a localizable string, accessible from another process.
- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md): A type that provides an out-of-process localizable description.
- [URLResource](urlresource.md): A resource located at a particular file URL within a bundle.

# NSOrthography (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the linguistic content of natural language text, typically used for spelling and grammar checking.

## Declaration

```objectivec
@interface NSOrthography : NSObject
```

<a id="overview"></a>

## Overview

Use [NSOrthography](nsorthography.md) objects to describe the linguistic content of a piece of text, including which scripts the text contains, a dominant language (and possibly other languages) for each script, and a dominant script and language for the text as a whole.

Scripts are uniformly described by four-letter ISO 15924 script codes, such as `"Latn"`, `"Grek"`, and `"Cyrl"`. The supertags `"Jpan"` and `"Kore"` are typically used for Japanese and Korean text, and `"Hans"` and `"Hant"` are typically used for Chinese text. The tag `"Zyyy"` is used if a specific script cannot be identified. See [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i) for more information.

Languages are uniformly described by BCP-47 tags (preferably in canonical form). The tag `"und"` is used if a specific language cannot be determined.

You typically work with orthography objects returned from methods and properties for classes like [NSLinguisticTagger](nslinguistictagger.md) and [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Subclasses must override the [dominantScript](nsorthography/dominantscript.md) and [languageMap](nsorthography/languagemap.md) properties. These properties are set using [initWithDominantScript:languageMap:](nsorthography/init%28dominantscript_languagemap_%29.md) or [orthographyWithDominantScript:languageMap:](nsorthography/orthographywithdominantscript_languagemap_.md) in Objective-C.

## Topics

### Creating Orthography Objects

- [defaultOrthographyForLanguage:](nsorthography/defaultorthography%28forlanguage_%29.md): Creates and returns an orthography object with the default language map for the specified language.
- [initWithDominantScript:languageMap:](nsorthography/init%28dominantscript_languagemap_%29.md): Creates an orthography object with the specified dominant script and language map.
- [orthographyWithDominantScript:languageMap:](nsorthography/orthographywithdominantscript_languagemap_.md): Creates and returns an orthography object with the specified dominant script and language map.

### Determining Correspondences Between Languages and Scripts

- [languageMap](nsorthography/languagemap.md): A dictionary that maps script tags to arrays of language tags.
- [dominantLanguage](nsorthography/dominantlanguage.md): The first language in the list of languages for the dominant script.
- [dominantScript](nsorthography/dominantscript.md): The dominant script for the text.
- [dominantLanguageForScript:](nsorthography/dominantlanguage%28forscript_%29.md): Returns the dominant language for the specified script.
- [languagesForScript:](nsorthography/languages%28forscript_%29.md): Returns the list of languages for the specified script.
- [allScripts](nsorthography/allscripts.md): The scripts appearing as keys in the language map.
- [allLanguages](nsorthography/alllanguages.md): The languages appearing in values of the language map.

### Instance Methods

- [initWithCoder:](nsorthography/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Localization

- [NSLocale](nslocale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSLocalizedString](nslocalizedstring.md): Returns a localized version of a string from the default table, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTable](nslocalizedstringfromtable.md): Returns a localized version of a string from the table that you specify, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTableInBundle](nslocalizedstringfromtableinbundle.md): Returns a localized version of a string from the table and bundle that you specify, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringWithDefaultValue](nslocalizedstringwithdefaultvalue.md): Returns a localized version of a string identified by a key in the table that you specify, which Xcode autogenerates when exporting localizations.
