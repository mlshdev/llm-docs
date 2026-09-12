> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes)

# NSCollectionViewLayoutAttributes (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that contains layout-related attributes for an element in a collection view.

## Declaration

```swift
@MainActor class NSCollectionViewLayoutAttributes
```

<a id="overview"></a>

## Overview

During the layout, the layout object creates instances of [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md) for each element displayed in the collection view. The layout attributes describe the position of an element and other information such as its alpha and position on the z axis. The collection view later applies the layout attributes to the onscreen elements.

The only time you interact with layout attribute objects is when you implement a custom layout, and the interactions are straightforward. When asked for layout attributes for a specific element, your layout object uses the methods of this class to create an appropriate instance of the class based on the type of the requested element. It then configures the properties of the object and returns it to the requester.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you implement a custom layout object and your layout object requires additional attributes, you can subclass `NSCollectionViewLayoutAttributes` and add custom properties to your subclass. In your subclass, be sure to do the following:

- Provide an [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method with no parameters to initialize your subclass.
- Implement support for the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol. The collection view caches layout attribute objects for later use.
- Override the inherited [isEqual(\_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) method to perform any relevant equality checks.

Supporting equality checks is important because of how the collection view manages layout attributes. As an optimization, the collection view applies layout attributes only when they change. When the layout object returns a layout attributes object, the collection view checks to see if the new attributes are equal to any cached attributes. Therefore, if you want to include any new properties in the equality check, you must override the [isEqual(\_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) method.

In addition to defining your `NSCollectionViewLayoutAttributes` subclass, override the [layoutAttributesClass](nscollectionviewlayout/layoutattributesclass.md) method of your layout object. That method is a funnel point for creating new layout attribute objects. Returning your custom class from that method ensures that the correct class is instantiated.

## Topics

### Creating Layout Attributes

- [init(forItemWith:)](nscollectionviewlayoutattributes/init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [init(forSupplementaryViewOfKind:with:)](nscollectionviewlayoutattributes/init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [init(forDecorationViewOfKind:with:)](nscollectionviewlayoutattributes/init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [init(forInterItemGapBefore:)](nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionView.DecorationElementKind](nscollectionview/decorationelementkind.md)

### Identifying the Element

- [representedElementCategory](nscollectionviewlayoutattributes/representedelementcategory.md): The type of the element.
- [indexPath](nscollectionviewlayoutattributes/indexpath.md): The index path of the element.
- [representedElementKind](nscollectionviewlayoutattributes/representedelementkind.md): The identifier for specific elements of your collection view interface.
- [elementKindInterItemGapIndicator](nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [elementKindSectionFooter](nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [elementKindSectionHeader](nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

### Accessing the Layout Attributes

- [frame](nscollectionviewlayoutattributes/frame.md): The frame rectangle of the element.
- [size](nscollectionviewlayoutattributes/size.md): The size of the element.
- [alpha](nscollectionviewlayoutattributes/alpha.md): The transparency of the element.
- [isHidden](nscollectionviewlayoutattributes/ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](nscollectionviewlayoutattributes/zindex.md): The element’s position on the z axis.

### Constants

- [NSCollectionElementCategory](nscollectionelementcategory.md): Constants specifying the type of element in the collection view.
- [Inter-Item Gap Support](inter-item-gap-support.md): Constant for supporting inter-item gaps.

### Initializers

- [init(forDecorationViewOfKind:withIndexPath:)](nscollectionviewlayoutattributes/init%28fordecorationviewofkind_withindexpath_%29.md)
- [init(forInterItemGapBeforeIndexPath:)](nscollectionviewlayoutattributes/init%28forinteritemgapbeforeindexpath_%29.md)
- [init(forItemWithIndexPath:)](nscollectionviewlayoutattributes/init%28foritemwithindexpath_%29.md)
- [init(forSupplementaryViewOfKind:withIndexPath:)](nscollectionviewlayoutattributes/init%28forsupplementaryviewofkind_withindexpath_%29.md)

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
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewLayoutAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that contains layout-related attributes for an element in a collection view.

## Declaration

```objectivec
@interface NSCollectionViewLayoutAttributes : NSObject
```

<a id="overview"></a>

## Overview

During the layout, the layout object creates instances of [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md) for each element displayed in the collection view. The layout attributes describe the position of an element and other information such as its alpha and position on the z axis. The collection view later applies the layout attributes to the onscreen elements.

The only time you interact with layout attribute objects is when you implement a custom layout, and the interactions are straightforward. When asked for layout attributes for a specific element, your layout object uses the methods of this class to create an appropriate instance of the class based on the type of the requested element. It then configures the properties of the object and returns it to the requester.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you implement a custom layout object and your layout object requires additional attributes, you can subclass `NSCollectionViewLayoutAttributes` and add custom properties to your subclass. In your subclass, be sure to do the following:

- Provide an [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method with no parameters to initialize your subclass.
- Implement support for the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol. The collection view caches layout attribute objects for later use.
- Override the inherited [isEqual:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) method to perform any relevant equality checks.

Supporting equality checks is important because of how the collection view manages layout attributes. As an optimization, the collection view applies layout attributes only when they change. When the layout object returns a layout attributes object, the collection view checks to see if the new attributes are equal to any cached attributes. Therefore, if you want to include any new properties in the equality check, you must override the [isEqual:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) method.

In addition to defining your `NSCollectionViewLayoutAttributes` subclass, override the [layoutAttributesClass](nscollectionviewlayout/layoutattributesclass.md) method of your layout object. That method is a funnel point for creating new layout attribute objects. Returning your custom class from that method ensures that the correct class is instantiated.

## Topics

### Creating Layout Attributes

- [layoutAttributesForItemWithIndexPath:](nscollectionviewlayoutattributes/init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](nscollectionviewlayoutattributes/init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](nscollectionviewlayoutattributes/init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [layoutAttributesForInterItemGapBeforeIndexPath:](nscollectionviewlayoutattributes/init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionViewDecorationElementKind](nscollectionview/decorationelementkind.md)

### Identifying the Element

- [representedElementCategory](nscollectionviewlayoutattributes/representedelementcategory.md): The type of the element.
- [indexPath](nscollectionviewlayoutattributes/indexpath.md): The index path of the element.
- [representedElementKind](nscollectionviewlayoutattributes/representedelementkind.md): The identifier for specific elements of your collection view interface.
- [NSCollectionElementKindInterItemGapIndicator](nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [NSCollectionElementKindSectionFooter](nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [NSCollectionElementKindSectionHeader](nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

### Accessing the Layout Attributes

- [frame](nscollectionviewlayoutattributes/frame.md): The frame rectangle of the element.
- [size](nscollectionviewlayoutattributes/size.md): The size of the element.
- [alpha](nscollectionviewlayoutattributes/alpha.md): The transparency of the element.
- [hidden](nscollectionviewlayoutattributes/ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](nscollectionviewlayoutattributes/zindex.md): The element’s position on the z axis.

### Constants

- [NSCollectionElementCategory](nscollectionelementcategory.md): Constants specifying the type of element in the collection view.
- [Inter-Item Gap Support](inter-item-gap-support.md): Constant for supporting inter-item gaps.

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
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
