> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/init(traitsfrom:)](https://developer.apple.com/documentation/uikit/uitraitcollection/init(traitsfrom:))

# init(traitsFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a trait collection that consists of traits merged from a specified array of trait collections.

> Use [init(mutations:)](init%28mutations_%29.md) or [modifyingTraits(\_:)](modifyingtraits%28__%29.md) instead.

## Declaration

```swift
init(traitsFrom traitCollections: [UITraitCollection])
```

## Parameters

- `traitCollections`: An array of [UITraitCollection](../uitraitcollection.md) objects.

<a id="return-value"></a>

## Return Value

A new trait collection consisting of traits merged from a specified `traitCollections` array.

<a id="Discussion"></a>

## Discussion

This method takes an array of one or more trait collections and merges them to create a new trait collection. If the array contains more than one element, the highest-indexed element that contains a given trait is used for that trait. For example, the following code snippet creates a trait collection with a *compact* horizontal size class, because the second element in the array overrides the first for that trait:

```objc
UITraitCollection *newHorizontalSizeClass1 = [UITraitCollection traitCollectionWithHorizontalSizeClass: UIUserInterfaceSizeClassRegular];
UITraitCollection *newHorizontalSizeClass2 = [UITraitCollection traitCollectionWithHorizontalSizeClass: UIUserInterfaceSizeClassCompact];
NSArray *traitArray = [NSArray arrayWithObjects: newHorizontalSizeClass1, newHorizontalSizeClass2, nil];
UITraitCollection *combinedTraits = [UITraitCollection traitCollectionWithTraitsFromCollections: traitArray];
```

## See Also

### Creating a trait collection

- [init()](init%28%29.md): Creates a trait collection whose traits are set to their default (unspecified) values.
- [init(userInterfaceIdiom:)](init%28userinterfaceidiom_%29.md): Creates a trait collection that contains only a specified interface idiom.
- [init(horizontalSizeClass:)](init%28horizontalsizeclass_%29.md): Creates a trait collection that contains only a specified horizontal size class.
- [init(verticalSizeClass:)](init%28verticalsizeclass_%29.md): Creates a trait collection that contains only a specified vertical size class.
- [init(userInterfaceStyle:)](init%28userinterfacestyle_%29.md): Creates a trait collection that contains only the specified user interface style trait.
- [init(accessibilityContrast:)](init%28accessibilitycontrast_%29.md): Creates a trait collection that contains only the specified accessibility contrast trait.
- [init(userInterfaceLevel:)](init%28userinterfacelevel_%29.md): Creates a trait collection that contains only the specified user interface level trait.
- [init(legibilityWeight:)](init%28legibilityweight_%29.md): Creates a trait collection that contains only the specified legibility weight trait.
- [init(forceTouchCapability:)](init%28forcetouchcapability_%29.md): Creates a trait collection that contains only a specified force touch capability trait.
- [init(displayScale:)](init%28displayscale_%29.md): Creates a trait collection that contains only a specified display scale.
- [init(displayGamut:)](init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [init(layoutDirection:)](init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [init(preferredContentSizeCategory:)](init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [init(activeAppearance:)](init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [init(toolbarItemPresentationSize:)](init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.

# traitCollectionWithTraitsFromCollections: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a trait collection that consists of traits merged from a specified array of trait collections.

> Use [init(mutations:)](init%28mutations_%29.md) or [modifyingTraits(\_:)](modifyingtraits%28__%29.md) instead.

## Declaration

```objectivec
+ (UITraitCollection *) traitCollectionWithTraitsFromCollections:(NSArray<UITraitCollection *> *) traitCollections;
```

## Parameters

- `traitCollections`: An array of [UITraitCollection](../uitraitcollection.md) objects.

<a id="return-value"></a>

## Return Value

A new trait collection consisting of traits merged from a specified `traitCollections` array.

<a id="Discussion"></a>

## Discussion

This method takes an array of one or more trait collections and merges them to create a new trait collection. If the array contains more than one element, the highest-indexed element that contains a given trait is used for that trait. For example, the following code snippet creates a trait collection with a *compact* horizontal size class, because the second element in the array overrides the first for that trait:

```objc
UITraitCollection *newHorizontalSizeClass1 = [UITraitCollection traitCollectionWithHorizontalSizeClass: UIUserInterfaceSizeClassRegular];
UITraitCollection *newHorizontalSizeClass2 = [UITraitCollection traitCollectionWithHorizontalSizeClass: UIUserInterfaceSizeClassCompact];
NSArray *traitArray = [NSArray arrayWithObjects: newHorizontalSizeClass1, newHorizontalSizeClass2, nil];
UITraitCollection *combinedTraits = [UITraitCollection traitCollectionWithTraitsFromCollections: traitArray];
```

## See Also

### Creating a trait collection

- [init](init%28%29.md): Creates a trait collection whose traits are set to their default (unspecified) values.
- [traitCollectionWithUserInterfaceIdiom:](init%28userinterfaceidiom_%29.md): Creates a trait collection that contains only a specified interface idiom.
- [traitCollectionWithHorizontalSizeClass:](init%28horizontalsizeclass_%29.md): Creates a trait collection that contains only a specified horizontal size class.
- [traitCollectionWithVerticalSizeClass:](init%28verticalsizeclass_%29.md): Creates a trait collection that contains only a specified vertical size class.
- [traitCollectionWithUserInterfaceStyle:](init%28userinterfacestyle_%29.md): Creates a trait collection that contains only the specified user interface style trait.
- [traitCollectionWithAccessibilityContrast:](init%28accessibilitycontrast_%29.md): Creates a trait collection that contains only the specified accessibility contrast trait.
- [traitCollectionWithUserInterfaceLevel:](init%28userinterfacelevel_%29.md): Creates a trait collection that contains only the specified user interface level trait.
- [traitCollectionWithLegibilityWeight:](init%28legibilityweight_%29.md): Creates a trait collection that contains only the specified legibility weight trait.
- [traitCollectionWithForceTouchCapability:](init%28forcetouchcapability_%29.md): Creates a trait collection that contains only a specified force touch capability trait.
- [traitCollectionWithDisplayScale:](init%28displayscale_%29.md): Creates a trait collection that contains only a specified display scale.
- [traitCollectionWithDisplayGamut:](init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [traitCollectionWithLayoutDirection:](init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [traitCollectionWithPreferredContentSizeCategory:](init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [traitCollectionWithActiveAppearance:](init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [traitCollectionWithToolbarItemPresentationSize:](init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.
