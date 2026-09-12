> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/includefaces](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/configuration-swift.class/includefaces)

# includeFaces (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.

## Declaration

```swift
var includeFaces: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the font picker only lists font families, like Times New Roman or Helvetica. Set [includeFaces](includefaces.md) to [true](https://developer.apple.com/documentation/swift/true) so the user can select a specific font face, such as Times New Roman Bold or Helvetica Light Oblique.

## See Also

### Filtering available fonts

- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicate(forFilteredLanguages:)](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.

# includeFaces (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.

## Declaration

```objectivec
@property (nonatomic) BOOL includeFaces;
```

<a id="Discussion"></a>

## Discussion

By default, the font picker only lists font families, like Times New Roman or Helvetica. Set [includeFaces](includefaces.md) to [true](https://developer.apple.com/documentation/swift/true) so the user can select a specific font face, such as Times New Roman Bold or Helvetica Light Oblique.

## See Also

### Filtering available fonts

- [filteredTraits](filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicateForFilteredLanguages:](filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.
