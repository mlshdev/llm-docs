> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes)

# UICollectionViewLayoutAttributes (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A layout object that manages the layout-related attributes for a given item in a collection view.

## Declaration

```swift
@MainActor class UICollectionViewLayoutAttributes
```

<a id="overview"></a>

## Overview

Layout objects create instances of this class when asked to do so by the collection view. In turn, the collection view uses the layout information to position cells and supplementary views inside its bounds.

<a id="Subclassing-notes"></a>

### Subclassing notes

In most cases, you use this class as-is. If you want to supplement the base layout attributes with custom layout attributes, you can subclass and define whatever properties you want to store the additional layout data. Because layout attribute objects may be copied by the collection view, make sure your subclass conforms to the [NSCopying](../foundation/nscopying.md) protocol by implementing any methods appropriate for copying your custom attributes to new instances of your subclass. In addition to defining your subclass, your [UICollectionReusableView](uicollectionreusableview.md) objects need to implement the [apply(\_:)](uicollectionreusableview/apply%28__%29.md) method so that they can apply any custom attributes at layout time.

If you subclass and implement any custom layout attributes, you must also override the inherited `isEqual:` method to compare the values of your properties. In iOS 7 and later, the collection view doesn’t apply layout attributes if those attributes have not changed. It determines whether the attributes have changed by comparing the old and new attribute objects using the `isEqual:` method. Because the default implementation of this method checks only the existing properties of this class, you must implement your own version of the method to compare any additional properties. If your custom properties are all equal, call `super` and return the resulting value at the end of your implementation.

## Topics

### Creating layout attributes

- [init(forCellWith:)](uicollectionviewlayoutattributes/init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [init(forSupplementaryViewOfKind:with:)](uicollectionviewlayoutattributes/init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.
- [init(forDecorationViewOfKind:with:)](uicollectionviewlayoutattributes/init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.

### Identifying the referenced item

- [indexPath](uicollectionviewlayoutattributes/indexpath.md): The index path of the item in the collection view.
- [representedElementKind](uicollectionviewlayoutattributes/representedelementkind.md): The layout-specific identifier for the target view.
- [representedElementCategory](uicollectionviewlayoutattributes/representedelementcategory.md): The type of the item.
- [UICollectionView.ElementCategory](uicollectionview/elementcategory.md): Constants specifying the type of view.

### Accessing the layout attributes

- [frame](uicollectionviewlayoutattributes/frame.md): The frame rectangle of the item.
- [bounds](uicollectionviewlayoutattributes/bounds.md): The bounds of the item.
- [center](uicollectionviewlayoutattributes/center.md): The center point of the item.
- [size](uicollectionviewlayoutattributes/size.md): The size of the item.
- [transform3D](uicollectionviewlayoutattributes/transform3d.md): The 3D transform of the item.
- [transform](uicollectionviewlayoutattributes/transform.md): The affine transform of the item.
- [alpha](uicollectionviewlayoutattributes/alpha.md): The transparency of the item.
- [zIndex](uicollectionviewlayoutattributes/zindex.md): Specifies the item’s position on the z axis.
- [isHidden](uicollectionviewlayoutattributes/ishidden.md): Determines whether the item is currently displayed.

### Initializers

- [init(forCellWithIndexPath:)](uicollectionviewlayoutattributes/init%28forcellwithindexpath_%29.md)
- [init(forDecorationViewOfKind:withIndexPath:)](uicollectionviewlayoutattributes/init%28fordecorationviewofkind_withindexpath_%29.md)
- [init(forSupplementaryViewOfKind:withIndexPath:)](uicollectionviewlayoutattributes/init%28forsupplementaryviewofkind_withindexpath_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIDynamicItem](uidynamicitem.md)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.

# UICollectionViewLayoutAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A layout object that manages the layout-related attributes for a given item in a collection view.

## Declaration

```objectivec
@interface UICollectionViewLayoutAttributes : NSObject
```

<a id="overview"></a>

## Overview

Layout objects create instances of this class when asked to do so by the collection view. In turn, the collection view uses the layout information to position cells and supplementary views inside its bounds.

<a id="Subclassing-notes"></a>

### Subclassing notes

In most cases, you use this class as-is. If you want to supplement the base layout attributes with custom layout attributes, you can subclass and define whatever properties you want to store the additional layout data. Because layout attribute objects may be copied by the collection view, make sure your subclass conforms to the [NSCopying](../foundation/nscopying.md) protocol by implementing any methods appropriate for copying your custom attributes to new instances of your subclass. In addition to defining your subclass, your [UICollectionReusableView](uicollectionreusableview.md) objects need to implement the [applyLayoutAttributes:](uicollectionreusableview/apply%28__%29.md) method so that they can apply any custom attributes at layout time.

If you subclass and implement any custom layout attributes, you must also override the inherited `isEqual:` method to compare the values of your properties. In iOS 7 and later, the collection view doesn’t apply layout attributes if those attributes have not changed. It determines whether the attributes have changed by comparing the old and new attribute objects using the `isEqual:` method. Because the default implementation of this method checks only the existing properties of this class, you must implement your own version of the method to compare any additional properties. If your custom properties are all equal, call `super` and return the resulting value at the end of your implementation.

## Topics

### Creating layout attributes

- [layoutAttributesForCellWithIndexPath:](uicollectionviewlayoutattributes/init%28forcellwith_%29.md): Creates and returns a layout attributes object that represents a cell with the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](uicollectionviewlayoutattributes/init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](uicollectionviewlayoutattributes/init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object that represents the specified decoration view.

### Identifying the referenced item

- [indexPath](uicollectionviewlayoutattributes/indexpath.md): The index path of the item in the collection view.
- [representedElementKind](uicollectionviewlayoutattributes/representedelementkind.md): The layout-specific identifier for the target view.
- [representedElementCategory](uicollectionviewlayoutattributes/representedelementcategory.md): The type of the item.
- [UICollectionElementCategory](uicollectionview/elementcategory.md): Constants specifying the type of view.

### Accessing the layout attributes

- [frame](uicollectionviewlayoutattributes/frame.md): The frame rectangle of the item.
- [bounds](uicollectionviewlayoutattributes/bounds.md): The bounds of the item.
- [center](uicollectionviewlayoutattributes/center.md): The center point of the item.
- [size](uicollectionviewlayoutattributes/size.md): The size of the item.
- [transform3D](uicollectionviewlayoutattributes/transform3d.md): The 3D transform of the item.
- [transform](uicollectionviewlayoutattributes/transform.md): The affine transform of the item.
- [alpha](uicollectionviewlayoutattributes/alpha.md): The transparency of the item.
- [zIndex](uicollectionviewlayoutattributes/zindex.md): Specifies the item’s position on the z axis.
- [hidden](uicollectionviewlayoutattributes/ishidden.md): Determines whether the item is currently displayed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [UIDynamicItem](uidynamicitem.md)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.
