> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/filteredtraits

# filteredTraits (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to filter fonts based on their traits, like bold, italic, or monospace.

## Declaration

```swift
var filteredTraits: UIFontDescriptor.SymbolicTraits { get set }
```

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicate(forFilteredLanguages:)](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.

# filteredTraits (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to filter fonts based on their traits, like bold, italic, or monospace.

## Declaration

```objectivec
@property (nonatomic) UIFontDescriptorSymbolicTraits filteredTraits;
```

## See Also

### Filtering available fonts

- [includeFaces](includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicateForFilteredLanguages:](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.
