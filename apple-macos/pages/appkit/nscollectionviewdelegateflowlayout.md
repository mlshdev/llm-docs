> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout)

# NSCollectionViewDelegateFlowLayout (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.

## Declaration

```swift
protocol NSCollectionViewDelegateFlowLayout : NSCollectionViewDelegate
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol when you want to customize the layout behavior and perhaps return different values for different items or sections.

All of the methods in this protocol are optional, so you can implement only the methods you need to achieve the desired layout. If you do not implement a particular method, the flow layout object obtains default values from its own properties and applies them uniformly. Implement your methods in the object you assign to the [delegate](nscollectionview/delegate.md) property of the collection view itself.

## Topics

### Getting the Size of Items

- [collectionView(\_:layout:sizeForItemAt:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of the specified item.

### Getting the Section Spacing

- [collectionView(\_:layout:insetForSectionAt:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.

### Getting the Header and Footer Sizes

- [collectionView(\_:layout:referenceSizeForHeaderInSection:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
- [collectionView(\_:layout:referenceSizeForFooterInSection:)](nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

## Relationships

### Inherits From

- [NSCollectionViewDelegate](nscollectionviewdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewDelegateFlowLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.

## Declaration

```objectivec
@protocol NSCollectionViewDelegateFlowLayout <NSCollectionViewDelegate>
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol when you want to customize the layout behavior and perhaps return different values for different items or sections.

All of the methods in this protocol are optional, so you can implement only the methods you need to achieve the desired layout. If you do not implement a particular method, the flow layout object obtains default values from its own properties and applies them uniformly. Implement your methods in the object you assign to the [delegate](nscollectionview/delegate.md) property of the collection view itself.

## Topics

### Getting the Size of Items

- [collectionView:layout:sizeForItemAtIndexPath:](nscollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of the specified item.

### Getting the Section Spacing

- [collectionView:layout:insetForSectionAtIndex:](nscollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView:layout:minimumLineSpacingForSectionAtIndex:](nscollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](nscollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.

### Getting the Header and Footer Sizes

- [collectionView:layout:referenceSizeForHeaderInSection:](nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
- [collectionView:layout:referenceSizeForFooterInSection:](nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

## Relationships

### Inherits From

- [NSCollectionViewDelegate](nscollectionviewdelegate.md)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
