> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayoutinvalidationcontext](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext)

# UICollectionViewFlowLayoutInvalidationContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of properties for determining whether to recompute the size of items or their position in the layout.

## Declaration

```swift
@MainActor class UICollectionViewFlowLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

The flow layout object creates instances of this class when it needs to invalidate its contents in response to changes. You can also create instances when invalidating the flow layout manually.

## Topics

### Specifying what to invalidate

- [invalidateFlowLayoutDelegateMetrics](uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics.md): A Boolean indicating whether to recompute the size of items and views in the layout.
- [invalidateFlowLayoutAttributes](uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes.md): A Boolean indicating whether to recompute the layout attributes for items and views in the layout.

## Relationships

### Inherits From

- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.

# UICollectionViewFlowLayoutInvalidationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of properties for determining whether to recompute the size of items or their position in the layout.

## Declaration

```objectivec
@interface UICollectionViewFlowLayoutInvalidationContext : UICollectionViewLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

The flow layout object creates instances of this class when it needs to invalidate its contents in response to changes. You can also create instances when invalidating the flow layout manually.

## Topics

### Specifying what to invalidate

- [invalidateFlowLayoutDelegateMetrics](uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics.md): A Boolean indicating whether to recompute the size of items and views in the layout.
- [invalidateFlowLayoutAttributes](uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes.md): A Boolean indicating whether to recompute the layout attributes for items and views in the layout.

## Relationships

### Inherits From

- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewLayout](uicollectionviewlayout.md): An abstract base class for generating layout information for a collection view.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.
