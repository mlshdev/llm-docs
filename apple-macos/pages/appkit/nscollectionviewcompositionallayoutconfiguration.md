> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewcompositionallayoutconfiguration](https://developer.apple.com/documentation/appkit/nscollectionviewcompositionallayoutconfiguration)

# NSCollectionViewCompositionalLayoutConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that defines scroll direction, section spacing, and headers or footers for the layout.

## Declaration

```swift
@MainActor class NSCollectionViewCompositionalLayoutConfiguration
```

<a id="overview"></a>

## Overview

You use a layout configuration to modify a collection view layout’s default scroll direction, add extra spacing between each section of the layout, and add headers or footers to the entire layout.

You can pass in this configuration when creating an [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md), or you can set the [configuration](nscollectionviewcompositionallayout/configuration.md) property on an existing layout. If you modify the configuration on an existing layout, the system invalidates the layout so that it will be updated with the new configuration.

```swift
let headerFooterSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                             heightDimension: .estimated(44))

let header = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "header",
                                                          alignment: .top)
let footer = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "footer",
                                                          alignment: .bottom)

let config = NSCollectionViewCompositionalLayoutConfiguration()
config.interSectionSpacing = 20
config.scrollDirection = .horizontal
config.boundarySupplementaryItems = [header, footer]
```

## Topics

### Specifying Scroll Direction

- [scrollDirection](nscollectionviewcompositionallayoutconfiguration/scrolldirection.md): The axis that the content in the collection view layout scrolls along.

### Configuring Spacing

- [interSectionSpacing](nscollectionviewcompositionallayoutconfiguration/intersectionspacing.md): The amount of space between the sections in the layout.

### Configuring Additional Views

- [boundarySupplementaryItems](nscollectionviewcompositionallayoutconfiguration/boundarysupplementaryitems.md): An array of the supplementary items that are associated with the boundary edges of the entire layout, such as global headers and footers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewCompositionalLayoutConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object that defines scroll direction, section spacing, and headers or footers for the layout.

## Declaration

```objectivec
@interface NSCollectionViewCompositionalLayoutConfiguration : NSObject
```

<a id="overview"></a>

## Overview

You use a layout configuration to modify a collection view layout’s default scroll direction, add extra spacing between each section of the layout, and add headers or footers to the entire layout.

You can pass in this configuration when creating an [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md), or you can set the [configuration](nscollectionviewcompositionallayout/configuration.md) property on an existing layout. If you modify the configuration on an existing layout, the system invalidates the layout so that it will be updated with the new configuration.

```swift
let headerFooterSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                             heightDimension: .estimated(44))

let header = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "header",
                                                          alignment: .top)
let footer = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "footer",
                                                          alignment: .bottom)

let config = NSCollectionViewCompositionalLayoutConfiguration()
config.interSectionSpacing = 20
config.scrollDirection = .horizontal
config.boundarySupplementaryItems = [header, footer]
```

## Topics

### Specifying Scroll Direction

- [scrollDirection](nscollectionviewcompositionallayoutconfiguration/scrolldirection.md): The axis that the content in the collection view layout scrolls along.

### Configuring Spacing

- [interSectionSpacing](nscollectionviewcompositionallayoutconfiguration/intersectionspacing.md): The amount of space between the sections in the layout.

### Configuring Additional Views

- [boundarySupplementaryItems](nscollectionviewcompositionallayoutconfiguration/boundarysupplementaryitems.md): An array of the supplementary items that are associated with the boundary edges of the entire layout, such as global headers and footers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
