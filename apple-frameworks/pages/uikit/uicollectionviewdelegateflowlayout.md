> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegateflowlayout](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout)

# UICollectionViewDelegateFlowLayout (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods that let you coordinate with a flow layout object to implement a grid-based layout.

## Declaration

```swift
@MainActor protocol UICollectionViewDelegateFlowLayout : UICollectionViewDelegate
```

<a id="overview"></a>

## Overview

The methods of this protocol define the size of items and the spacing between items in the grid. All of the methods in this protocol are optional. If you don’t implement a particular method, the flow layout delegate uses values in its own properties for the appropriate spacing information.

The [UICollectionViewFlowLayout](uicollectionviewflowlayout.md) object expects the collection view’s delegate object to adopt this protocol. Therefore, implement this protocol on the object assigned to your collection view’s [delegate](uicollectionview/delegate.md) property.

## Topics

### Getting the size of items

- [collectionView(\_:layout:sizeForItemAt:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of the specified item’s cell.

### Getting the section spacing

- [collectionView(\_:layout:insetForSectionAt:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.

### Getting the header and footer sizes

- [collectionView(\_:layout:referenceSizeForHeaderInSection:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
- [collectionView(\_:layout:referenceSizeForFooterInSection:)](uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UICollectionViewDelegate](uicollectionviewdelegate.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

# UICollectionViewDelegateFlowLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods that let you coordinate with a flow layout object to implement a grid-based layout.

## Declaration

```objectivec
@protocol UICollectionViewDelegateFlowLayout <UICollectionViewDelegate>
```

<a id="overview"></a>

## Overview

The methods of this protocol define the size of items and the spacing between items in the grid. All of the methods in this protocol are optional. If you don’t implement a particular method, the flow layout delegate uses values in its own properties for the appropriate spacing information.

The [UICollectionViewFlowLayout](uicollectionviewflowlayout.md) object expects the collection view’s delegate object to adopt this protocol. Therefore, implement this protocol on the object assigned to your collection view’s [delegate](uicollectionview/delegate.md) property.

## Topics

### Getting the size of items

- [collectionView:layout:sizeForItemAtIndexPath:](uicollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of the specified item’s cell.

### Getting the section spacing

- [collectionView:layout:insetForSectionAtIndex:](uicollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView:layout:minimumLineSpacingForSectionAtIndex:](uicollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](uicollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.

### Getting the header and footer sizes

- [collectionView:layout:referenceSizeForHeaderInSection:](uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
- [collectionView:layout:referenceSizeForFooterInSection:](uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

## Relationships

### Inherits From

- [UICollectionViewDelegate](uicollectionviewdelegate.md)
