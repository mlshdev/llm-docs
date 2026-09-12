> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout)

# UICollectionViewTransitionLayout (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.

## Declaration

```swift
@MainActor class UICollectionViewTransitionLayout
```

<a id="overview"></a>

## Overview

You can use [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md) as-is or subclass it to provide specialized behavior for your app. A common use for transition layouts is to create interactive transitions, such as those that are driven by gesture recognizers or touch events.

During a layout change, the collection view installs this layout object temporarily to manage the changeover. This layout object determines the layout of each item by interpolating between the layout values in the current and new layout objects. The interpolation is driven by the value in the [transitionProgress](uicollectionviewtransitionlayout/transitionprogress.md) property, which you update periodically from your code to drive the transition. For example, if you use this class in conjunction with a gesture recognizer, the handler for your gesture recognizer would update that property and invalidate the layout.

If you want to provide more than just a linear transition from the old to new layout over time, you need to subclass and provide the layout attributes for items yourself. Subclassing requires you to override all of the same methods you would override when subclassing [UICollectionViewLayout](uicollectionviewlayout.md). The difference is that your custom methods can work with your gesture recognizers or touch event code to change the layout based on input from the user. For example, you could use a custom layout object in conjunction with a gesture recognizer to make items track the location of the user’s finger on the screen. You also need to implement the [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md) method of your collection view delegate and return your custom layout object when asked for it.

## Topics

### Initializing the transition layout object

- [init(currentLayout:nextLayout:)](uicollectionviewtransitionlayout/init%28currentlayout_nextlayout_%29.md): Initializes and returns a transition layout object.
- [init(coder:)](uicollectionviewtransitionlayout/init%28coder_%29.md): Creates a transition layout object from data in an unarchiver.

### Updating the transition information

- [transitionProgress](uicollectionviewtransitionlayout/transitionprogress.md): The completion percentage of the transition.
- [updateValue(\_:forAnimatedKey:)](uicollectionviewtransitionlayout/updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.
- [value(forAnimatedKey:)](uicollectionviewtransitionlayout/value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.

### Accessing the layout objects

- [currentLayout](uicollectionviewtransitionlayout/currentlayout.md): The collection view’s current layout object.
- [nextLayout](uicollectionviewtransitionlayout/nextlayout.md): The collection view’s new layout object.

## Relationships

### Inherits From

- [UICollectionViewLayout](uicollectionviewlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.

# UICollectionViewTransitionLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.

## Declaration

```objectivec
@interface UICollectionViewTransitionLayout : UICollectionViewLayout
```

<a id="overview"></a>

## Overview

You can use [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md) as-is or subclass it to provide specialized behavior for your app. A common use for transition layouts is to create interactive transitions, such as those that are driven by gesture recognizers or touch events.

During a layout change, the collection view installs this layout object temporarily to manage the changeover. This layout object determines the layout of each item by interpolating between the layout values in the current and new layout objects. The interpolation is driven by the value in the [transitionProgress](uicollectionviewtransitionlayout/transitionprogress.md) property, which you update periodically from your code to drive the transition. For example, if you use this class in conjunction with a gesture recognizer, the handler for your gesture recognizer would update that property and invalidate the layout.

If you want to provide more than just a linear transition from the old to new layout over time, you need to subclass and provide the layout attributes for items yourself. Subclassing requires you to override all of the same methods you would override when subclassing [UICollectionViewLayout](uicollectionviewlayout.md). The difference is that your custom methods can work with your gesture recognizers or touch event code to change the layout based on input from the user. For example, you could use a custom layout object in conjunction with a gesture recognizer to make items track the location of the user’s finger on the screen. You also need to implement the [collectionView:transitionLayoutForOldLayout:newLayout:](uicollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md) method of your collection view delegate and return your custom layout object when asked for it.

## Topics

### Initializing the transition layout object

- [initWithCurrentLayout:nextLayout:](uicollectionviewtransitionlayout/init%28currentlayout_nextlayout_%29.md): Initializes and returns a transition layout object.
- [initWithCoder:](uicollectionviewtransitionlayout/init%28coder_%29.md): Creates a transition layout object from data in an unarchiver.

### Updating the transition information

- [transitionProgress](uicollectionviewtransitionlayout/transitionprogress.md): The completion percentage of the transition.
- [updateValue:forAnimatedKey:](uicollectionviewtransitionlayout/updatevalue%28__foranimatedkey_%29.md): Sets the value for an animatable key.
- [valueForAnimatedKey:](uicollectionviewtransitionlayout/value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.

### Accessing the layout objects

- [currentLayout](uicollectionviewtransitionlayout/currentlayout.md): The collection view’s current layout object.
- [nextLayout](uicollectionviewtransitionlayout/nextlayout.md): The collection view’s new layout object.

## Relationships

### Inherits From

- [UICollectionViewLayout](uicollectionviewlayout.md)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.
