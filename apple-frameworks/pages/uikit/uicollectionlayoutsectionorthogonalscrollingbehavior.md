> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutsectionorthogonalscrollingbehavior](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingbehavior)

# UICollectionLayoutSectionOrthogonalScrollingBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The scrolling behavior of the layout’s sections in relation to the main layout axis.

## Declaration

```swift
enum UICollectionLayoutSectionOrthogonalScrollingBehavior
```

<a id="overview"></a>

## Overview

By default, each section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](uicollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. You can change this behavior for a particular section by setting its [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md) property to a different value than its default [UICollectionLayoutSectionOrthogonalScrollingBehavior.none](uicollectionlayoutsectionorthogonalscrollingbehavior/none.md). Setting any other value for this property makes the section lay out its content orthogonally to the main layout axis.

![Diagram of a collection view layout with multiple sections. The collection view sections are laid out vertically, so the collection view scrolls on the vertical axis to reveal more content. The content in the top section of the collection view scrolls on the horizontal axis, orthogonally to the main layout axis of the collection view’s layout.](https://developer.apple.com/images/com.apple.uikit/media-3570451@2x.png)

## Topics

### Constants

- [UICollectionLayoutSectionOrthogonalScrollingBehavior.none](uicollectionlayoutsectionorthogonalscrollingbehavior/none.md): The section does not allow users to scroll its content orthogonally.
- [UICollectionLayoutSectionOrthogonalScrollingBehavior.continuous](uicollectionlayoutsectionorthogonalscrollingbehavior/continuous.md): The section allows users to scroll its content orthogonally with continuous scrolling.
- [UICollectionLayoutSectionOrthogonalScrollingBehavior.continuousGroupLeadingBoundary](uicollectionlayoutsectionorthogonalscrollingbehavior/continuousgroupleadingboundary.md): The section allows users to scroll its content orthogonally, coming to a natural stop at the leading boundary of the visible group.
- [UICollectionLayoutSectionOrthogonalScrollingBehavior.paging](uicollectionlayoutsectionorthogonalscrollingbehavior/paging.md): The section allows users to page its content orthogonally.
- [UICollectionLayoutSectionOrthogonalScrollingBehavior.groupPaging](uicollectionlayoutsectionorthogonalscrollingbehavior/grouppaging.md): The section allows users to page its content orthogonally one group at a time.
- [UICollectionLayoutSectionOrthogonalScrollingBehavior.groupPagingCentered](uicollectionlayoutsectionorthogonalscrollingbehavior/grouppagingcentered.md): The section allows users to page its content orthogonally one group at a time, centering each group.

### Initializers

- [init(rawValue:)](uicollectionlayoutsectionorthogonalscrollingbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UICollectionLayoutSectionOrthogonalScrollingBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The scrolling behavior of the layout’s sections in relation to the main layout axis.

## Declaration

```objectivec
enum UICollectionLayoutSectionOrthogonalScrollingBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

By default, each section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](uicollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. You can change this behavior for a particular section by setting its [orthogonalScrollingBehavior](nscollectionlayoutsection/orthogonalscrollingbehavior.md) property to a different value than its default [UICollectionLayoutSectionOrthogonalScrollingBehaviorNone](uicollectionlayoutsectionorthogonalscrollingbehavior/none.md). Setting any other value for this property makes the section lay out its content orthogonally to the main layout axis.

![Diagram of a collection view layout with multiple sections. The collection view sections are laid out vertically, so the collection view scrolls on the vertical axis to reveal more content. The content in the top section of the collection view scrolls on the horizontal axis, orthogonally to the main layout axis of the collection view’s layout.](https://developer.apple.com/images/com.apple.uikit/media-3570451@2x.png)

## Topics

### Constants

- [UICollectionLayoutSectionOrthogonalScrollingBehaviorNone](uicollectionlayoutsectionorthogonalscrollingbehavior/none.md): The section does not allow users to scroll its content orthogonally.
- [UICollectionLayoutSectionOrthogonalScrollingBehaviorContinuous](uicollectionlayoutsectionorthogonalscrollingbehavior/continuous.md): The section allows users to scroll its content orthogonally with continuous scrolling.
- [UICollectionLayoutSectionOrthogonalScrollingBehaviorContinuousGroupLeadingBoundary](uicollectionlayoutsectionorthogonalscrollingbehavior/continuousgroupleadingboundary.md): The section allows users to scroll its content orthogonally, coming to a natural stop at the leading boundary of the visible group.
- [UICollectionLayoutSectionOrthogonalScrollingBehaviorPaging](uicollectionlayoutsectionorthogonalscrollingbehavior/paging.md): The section allows users to page its content orthogonally.
- [UICollectionLayoutSectionOrthogonalScrollingBehaviorGroupPaging](uicollectionlayoutsectionorthogonalscrollingbehavior/grouppaging.md): The section allows users to page its content orthogonally one group at a time.
- [UICollectionLayoutSectionOrthogonalScrollingBehaviorGroupPagingCentered](uicollectionlayoutsectionorthogonalscrollingbehavior/grouppagingcentered.md): The section allows users to page its content orthogonally one group at a time, centering each group.
