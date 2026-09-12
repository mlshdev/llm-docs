> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsectionorthogonalscrollingbehavior](https://developer.apple.com/documentation/appkit/nscollectionlayoutsectionorthogonalscrollingbehavior)

# NSCollectionLayoutSectionOrthogonalScrollingBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The scrolling behavior of the layout’s sections in relation to the main layout axis.

## Declaration

```swift
enum NSCollectionLayoutSectionOrthogonalScrollingBehavior
```

<a id="overview"></a>

## Overview

By default, each section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](nscollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. You can change this behavior for a particular section by setting its [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md) property to a different value than its default [NSCollectionLayoutSectionOrthogonalScrollingBehavior.none](nscollectionlayoutsectionorthogonalscrollingbehavior/none.md). Setting any other value for this property makes the section lay out its content orthogonally to the main layout axis.

## Topics

### Enumeration Cases

- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.none](nscollectionlayoutsectionorthogonalscrollingbehavior/none.md): The section does not allow users to scroll its content orthogonally.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.continuous](nscollectionlayoutsectionorthogonalscrollingbehavior/continuous.md): The section allows users to scroll its content orthogonally with continuous scrolling.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.continuousGroupLeadingBoundary](nscollectionlayoutsectionorthogonalscrollingbehavior/continuousgroupleadingboundary.md): The section allows users to scroll its content orthogonally, coming to a natural stop at the leading boundary of the visible group.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.paging](nscollectionlayoutsectionorthogonalscrollingbehavior/paging.md): The section allows users to page its content orthogonally.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.groupPaging](nscollectionlayoutsectionorthogonalscrollingbehavior/grouppaging.md): The section allows users to page its content orthogonally one group at a time.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior.groupPagingCentered](nscollectionlayoutsectionorthogonalscrollingbehavior/grouppagingcentered.md): The section allows users to page its content orthogonally one group at a time, centering each group.

### Initializers

- [init(rawValue:)](nscollectionlayoutsectionorthogonalscrollingbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.

# NSCollectionLayoutSectionOrthogonalScrollingBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The scrolling behavior of the layout’s sections in relation to the main layout axis.

## Declaration

```objectivec
enum NSCollectionLayoutSectionOrthogonalScrollingBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

By default, each section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](nscollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. You can change this behavior for a particular section by setting its [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md) property to a different value than its default [NSCollectionLayoutSectionOrthogonalScrollingBehaviorNone](nscollectionlayoutsectionorthogonalscrollingbehavior/none.md). Setting any other value for this property makes the section lay out its content orthogonally to the main layout axis.

## Topics

### Enumeration Cases

- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorNone](nscollectionlayoutsectionorthogonalscrollingbehavior/none.md): The section does not allow users to scroll its content orthogonally.
- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorContinuous](nscollectionlayoutsectionorthogonalscrollingbehavior/continuous.md): The section allows users to scroll its content orthogonally with continuous scrolling.
- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorContinuousGroupLeadingBoundary](nscollectionlayoutsectionorthogonalscrollingbehavior/continuousgroupleadingboundary.md): The section allows users to scroll its content orthogonally, coming to a natural stop at the leading boundary of the visible group.
- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorPaging](nscollectionlayoutsectionorthogonalscrollingbehavior/paging.md): The section allows users to page its content orthogonally.
- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorGroupPaging](nscollectionlayoutsectionorthogonalscrollingbehavior/grouppaging.md): The section allows users to page its content orthogonally one group at a time.
- [NSCollectionLayoutSectionOrthogonalScrollingBehaviorGroupPagingCentered](nscollectionlayoutsectionorthogonalscrollingbehavior/grouppagingcentered.md): The section allows users to page its content orthogonally one group at a time, centering each group.

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
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
