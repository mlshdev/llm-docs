> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/init(displayscale:)](https://developer.apple.com/documentation/uikit/uitraitcollection/init(displayscale:))

# init(displayScale:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a trait collection that contains only a specified display scale.

## Declaration

```swift
init(displayScale scale: CGFloat)
```

## Parameters

- `scale`: The display scale for the new trait collection. Use `1.0` to specify a non-Retina display scale, and a value of `2.0` or greater to specify a Retina display scale.

<a id="return-value"></a>

## Return Value

A new trait collection containing only a specified display scale trait.

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
- [init(displayGamut:)](init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [init(layoutDirection:)](init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [init(preferredContentSizeCategory:)](init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [init(activeAppearance:)](init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [init(toolbarItemPresentationSize:)](init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.
- [init(hdrHeadroomUsageLimit:)](init%28hdrheadroomusagelimit_%29-5zqph.md)

# traitCollectionWithDisplayScale: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a trait collection that contains only a specified display scale.

## Declaration

```objectivec
+ (UITraitCollection *) traitCollectionWithDisplayScale:(CGFloat) scale;
```

## Parameters

- `scale`: The display scale for the new trait collection. Use `1.0` to specify a non-Retina display scale, and a value of `2.0` or greater to specify a Retina display scale.

<a id="return-value"></a>

## Return Value

A new trait collection containing only a specified display scale trait.

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
- [traitCollectionWithDisplayGamut:](init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [traitCollectionWithLayoutDirection:](init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [traitCollectionWithPreferredContentSizeCategory:](init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [traitCollectionWithActiveAppearance:](init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [traitCollectionWithToolbarItemPresentationSize:](init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.
- [traitCollectionWithHDRHeadroomUsageLimit:](init%28hdrheadroomusagelimit_%29-5zqph.md)
