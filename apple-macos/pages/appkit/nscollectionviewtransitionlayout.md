> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewtransitionlayout](https://developer.apple.com/documentation/appkit/nscollectionviewtransitionlayout)

# NSCollectionViewTransitionLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that implements custom behaviors when changing from one layout to another in a collection view.

## Declaration

```swift
class NSCollectionViewTransitionLayout
```

<a id="overview"></a>

## Overview

Transition layout objects are commonly used to implement interactive transitions between layouts, where the transition itself is driven by a gesture recognizer.

> **Note**

>  In macOS 10.11, collection views do not provide built-in support for driving layout transitions.

## Topics

### Initializing the Transition Layout Object

- [init(currentLayout:nextLayout:)](nscollectionviewtransitionlayout/init%28currentlayout_nextlayout_%29.md): Initializes and returns the transition layout object.

### Updating the Transition Information

- [transitionProgress](nscollectionviewtransitionlayout/transitionprogress.md): The completion percentage of the transition.
- [updateValue(\_:forAnimatedKey:)](nscollectionviewtransitionlayout/updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [value(forAnimatedKey:)](nscollectionviewtransitionlayout/value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayout.AnimatedKey](nscollectionviewtransitionlayout/animatedkey.md)

### Accessing the Layout Objects

- [currentLayout](nscollectionviewtransitionlayout/currentlayout.md): The collection view’s current layout object.
- [nextLayout](nscollectionviewtransitionlayout/nextlayout.md): The collection view’s new layout object.

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
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewTransitionLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that implements custom behaviors when changing from one layout to another in a collection view.

## Declaration

```objectivec
@interface NSCollectionViewTransitionLayout : NSCollectionViewLayout
```

<a id="overview"></a>

## Overview

Transition layout objects are commonly used to implement interactive transitions between layouts, where the transition itself is driven by a gesture recognizer.

> **Note**

>  In macOS 10.11, collection views do not provide built-in support for driving layout transitions.

## Topics

### Initializing the Transition Layout Object

- [initWithCurrentLayout:nextLayout:](nscollectionviewtransitionlayout/init%28currentlayout_nextlayout_%29.md): Initializes and returns the transition layout object.

### Updating the Transition Information

- [transitionProgress](nscollectionviewtransitionlayout/transitionprogress.md): The completion percentage of the transition.
- [updateValue:forAnimatedKey:](nscollectionviewtransitionlayout/updatevalue%28__foranimatedkey_%29.md): Sets the value of a key whose value you use during the animation.
- [valueForAnimatedKey:](nscollectionviewtransitionlayout/value%28foranimatedkey_%29.md): Returns the most recently set value for the specified key.
- [NSCollectionViewTransitionLayoutAnimatedKey](nscollectionviewtransitionlayout/animatedkey.md)

### Accessing the Layout Objects

- [currentLayout](nscollectionviewtransitionlayout/currentlayout.md): The collection view’s current layout object.
- [nextLayout](nscollectionviewtransitionlayout/nextlayout.md): The collection view’s new layout object.

## Relationships

### Inherits From

- [NSCollectionViewLayout](nscollectionviewlayout.md)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayout](nscollectionviewcompositionallayout.md): A layout object that lets you combine items in highly adaptive and flexible visual arrangements.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
