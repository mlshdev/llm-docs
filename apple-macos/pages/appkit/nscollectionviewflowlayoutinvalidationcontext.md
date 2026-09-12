> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayoutinvalidationcontext](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayoutinvalidationcontext)

# NSCollectionViewFlowLayoutInvalidationContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that identifies the portions of a flow layout object that need to be updated.

## Declaration

```swift
class NSCollectionViewFlowLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

Layout objects use invalidation contexts to optimize the layout process and avoid unnecessary work. You use this class to specify whether the [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) object should fetch new size information from its delegate. You can also prevent the flow layout object from updating its layout information altogether.

When you want to invalidate your flow layout object, call the [invalidationContextClass](nscollectionviewlayout/invalidationcontextclass.md) method of your layout object and instantiate the resulting class. (The implementation of that method in [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) returns this class.) After instantiating this class, set the properties to appropriate values and pass the object to the [invalidateLayout(with:)](nscollectionviewlayout/invalidatelayout%28with_%29.md) method of the layout object.

## Topics

### Invalidating the Flow Layout

- [invalidateFlowLayoutAttributes](nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes.md): A Boolean value indicating whether the flow layout object should invalidate its current attributes.
- [invalidateFlowLayoutDelegateMetrics](nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics.md): A Boolean value indicating whether the flow layout object should fetch new size information from its delegate.

## Relationships

### Inherits From

- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updates

- [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md): A description of a single change to make to an item in a collection view.
- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md): An object that identifies the portions of your layout that need to be updated.

# NSCollectionViewFlowLayoutInvalidationContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that identifies the portions of a flow layout object that need to be updated.

## Declaration

```objectivec
@interface NSCollectionViewFlowLayoutInvalidationContext : NSCollectionViewLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

Layout objects use invalidation contexts to optimize the layout process and avoid unnecessary work. You use this class to specify whether the [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) object should fetch new size information from its delegate. You can also prevent the flow layout object from updating its layout information altogether.

When you want to invalidate your flow layout object, call the [invalidationContextClass](nscollectionviewlayout/invalidationcontextclass.md) method of your layout object and instantiate the resulting class. (The implementation of that method in [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) returns this class.) After instantiating this class, set the properties to appropriate values and pass the object to the [invalidateLayoutWithContext:](nscollectionviewlayout/invalidatelayout%28with_%29.md) method of the layout object.

## Topics

### Invalidating the Flow Layout

- [invalidateFlowLayoutAttributes](nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes.md): A Boolean value indicating whether the flow layout object should invalidate its current attributes.
- [invalidateFlowLayoutDelegateMetrics](nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics.md): A Boolean value indicating whether the flow layout object should fetch new size information from its delegate.

## Relationships

### Inherits From

- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md)

## See Also

### Updates

- [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md): A description of a single change to make to an item in a collection view.
- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md): An object that identifies the portions of your layout that need to be updated.
