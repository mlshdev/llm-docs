> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/filteredlanguagespredicate](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/filteredlanguagespredicate)

# filteredLanguagesPredicate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A predicate to filter fonts based on the languages they support.

> Use [languageFilter](languagefilter.md) instead.

## Declaration

```swift
@NSCopying var filteredLanguagesPredicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the font picker shows all available fonts, regardless of the languages they support. You may prefer to offer only fonts that support certain languages. To restrict the list, set this property to an [NSPredicate](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_206) defining the logic the font picker should apply to the fonts’ supported languages metadata.

Use language specifiers in the same format [CFLocale](../../../corefoundation/cflocale.md) uses to specify languages in a filter predicate. You can use [filterPredicate(forFilteredLanguages:)](filterpredicate%28forfilteredlanguages_%29.md) to construct a simple predicate that excludes fonts which don’t support any of a collection of languages you specify.

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filterPredicate(forFilteredLanguages:)](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.

# filteredLanguagesPredicate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A predicate to filter fonts based on the languages they support.

> Use [languageFilter](languagefilter.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * filteredLanguagesPredicate;
```

<a id="Discussion"></a>

## Discussion

By default, the font picker shows all available fonts, regardless of the languages they support. You may prefer to offer only fonts that support certain languages. To restrict the list, set this property to an [NSPredicate](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_206) defining the logic the font picker should apply to the fonts’ supported languages metadata.

Use language specifiers in the same format [CFLocaleRef](../../../corefoundation/cflocale.md) uses to specify languages in a filter predicate. You can use [filterPredicateForFilteredLanguages:](filterpredicate%28forfilteredlanguages_%29.md) to construct a simple predicate that excludes fonts which don’t support any of a collection of languages you specify.

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filterPredicateForFilteredLanguages:](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.
