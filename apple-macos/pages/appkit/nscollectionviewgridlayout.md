> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout)

# NSCollectionViewGridLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A layout that displays a single section of items in a row and column grid.

## Declaration

```swift
class NSCollectionViewGridLayout
```

<a id="overview"></a>

## Overview

The [NSCollectionViewGridLayout](nscollectionviewgridlayout.md) object provides the same layout behavior offered by the [NSCollectionView](nscollectionview.md) class prior to macOS 10.11, and you can use it in cases where you want to maintain the old appearance while still taking advantage of newer collection view features.

<a id="Configuring-a-Collection-View-to-Use-a-Grid-Layout"></a>

### Configuring a Collection View to Use a Grid Layout

You can configure a collection view to use a grid layout object programmatically or at design time:

- At design time, set the Layout attribute of your collection view to Grid.
- Create an `NSCollectionViewGridLayout` object programmatically and assign it to the collection view’s [collectionViewLayout](nscollectionview/collectionviewlayout.md) property.

A grid layout displays only items and does not display supplementary views or decoration views. Use the properties of this class to configure the number of rows and columns in the grid. You can also use these properties to configure the spacing between items and the minimum sizes.

## Topics

### Specifying the Grid Parameters

- [maximumNumberOfRows](nscollectionviewgridlayout/maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](nscollectionviewgridlayout/maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [minimumItemSize](nscollectionviewgridlayout/minimumitemsize.md): The smallest allowable size for an item’s view.
- [maximumItemSize](nscollectionviewgridlayout/maximumitemsize.md): The largest allowable size for an item’s view.

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](nscollectionviewgridlayout/minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [minimumLineSpacing](nscollectionviewgridlayout/minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [margins](nscollectionviewgridlayout/margins.md): The amount of empty space (in points) around the grid’s content.

### Specifying the Grid Background Color

- [backgroundColors](nscollectionviewgridlayout/backgroundcolors.md): The array of background colors to use when drawing the grid.

## Relationships

### Inherits From

- [NSCollectionViewLayout](nscollectionviewlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewGridLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A layout that displays a single section of items in a row and column grid.

## Declaration

```objectivec
@interface NSCollectionViewGridLayout : NSCollectionViewLayout
```

<a id="overview"></a>

## Overview

The [NSCollectionViewGridLayout](nscollectionviewgridlayout.md) object provides the same layout behavior offered by the [NSCollectionView](nscollectionview.md) class prior to macOS 10.11, and you can use it in cases where you want to maintain the old appearance while still taking advantage of newer collection view features.

<a id="Configuring-a-Collection-View-to-Use-a-Grid-Layout"></a>

### Configuring a Collection View to Use a Grid Layout

You can configure a collection view to use a grid layout object programmatically or at design time:

- At design time, set the Layout attribute of your collection view to Grid.
- Create an `NSCollectionViewGridLayout` object programmatically and assign it to the collection view’s [collectionViewLayout](nscollectionview/collectionviewlayout.md) property.

A grid layout displays only items and does not display supplementary views or decoration views. Use the properties of this class to configure the number of rows and columns in the grid. You can also use these properties to configure the spacing between items and the minimum sizes.

## Topics

### Specifying the Grid Parameters

- [maximumNumberOfRows](nscollectionviewgridlayout/maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](nscollectionviewgridlayout/maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [minimumItemSize](nscollectionviewgridlayout/minimumitemsize.md): The smallest allowable size for an item’s view.
- [maximumItemSize](nscollectionviewgridlayout/maximumitemsize.md): The largest allowable size for an item’s view.

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](nscollectionviewgridlayout/minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [minimumLineSpacing](nscollectionviewgridlayout/minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [margins](nscollectionviewgridlayout/margins.md): The amount of empty space (in points) around the grid’s content.

### Specifying the Grid Background Color

- [backgroundColors](nscollectionviewgridlayout/backgroundcolors.md): The array of background colors to use when drawing the grid.

## Relationships

### Inherits From

- [NSCollectionViewLayout](nscollectionviewlayout.md)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
