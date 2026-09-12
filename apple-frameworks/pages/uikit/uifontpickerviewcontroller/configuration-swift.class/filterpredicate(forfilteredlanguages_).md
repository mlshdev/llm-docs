> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/filterpredicate(forfilteredlanguages:)](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/filterpredicate(forfilteredlanguages:))

# filterPredicate(forFilteredLanguages:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a font picker filter based on language support.

> Use [languageFilter](languagefilter.md) instead.

## Declaration

```swift
class func filterPredicate(forFilteredLanguages filteredLanguages: [String]) -> NSPredicate?
```

## Parameters

- `filteredLanguages`: Identifiers for the languages the font picker should include.

<a id="return-value"></a>

## Return Value

A predicate that is [true](https://developer.apple.com/documentation/swift/true) when at least one of the provided strings is present.

<a id="Discussion"></a>

## Discussion

Use this method to construct a predicate for [filteredLanguagesPredicate](filteredlanguagespredicate.md) that restricts the font picker’s list to only include fonts that support the filtered languages. Provide language identifiers in the same format [CFLocale](../../../corefoundation/cflocale.md) uses.

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.

# filterPredicateForFilteredLanguages: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a font picker filter based on language support.

> Use [languageFilter](languagefilter.md) instead.

## Declaration

```objectivec
+ (NSPredicate *) filterPredicateForFilteredLanguages:(NSArray<NSString *> *) filteredLanguages;
```

## Parameters

- `filteredLanguages`: Identifiers for the languages the font picker should include.

<a id="return-value"></a>

## Return Value

A predicate that is [true](https://developer.apple.com/documentation/swift/true) when at least one of the provided strings is present.

<a id="Discussion"></a>

## Discussion

Use this method to construct a predicate for [filteredLanguagesPredicate](filteredlanguagespredicate.md) that restricts the font picker’s list to only include fonts that support the filtered languages. Provide language identifiers in the same format [CFLocaleRef](../../../corefoundation/cflocale.md) uses.

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
