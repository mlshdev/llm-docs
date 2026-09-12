> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewfocusupdatecontext](https://developer.apple.com/documentation/uikit/uicollectionviewfocusupdatecontext)

# UICollectionViewFocusUpdateContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A context object that stores information specific to a focus update in a collection view.

## Declaration

```swift
@MainActor class UICollectionViewFocusUpdateContext
```

<a id="overview"></a>

## Overview

When focus changes, the collection view delegate receives a context object with the relevant information. Your delegate methods use the information in this object to create animations or to perform other tasks related to the change in focus.

## Topics

### Locating focusable items in the collection view

- [previouslyFocusedIndexPath](uicollectionviewfocusupdatecontext/previouslyfocusedindexpath.md): The index path of the collection view cell that previously had the focus.
- [nextFocusedIndexPath](uicollectionviewfocusupdatecontext/nextfocusedindexpath.md): The index path of the collection view cell that’s receiving the focus.

## Relationships

### Inherits From

- [UIFocusUpdateContext](uifocusupdatecontext.md)

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

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.

# UICollectionViewFocusUpdateContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A context object that stores information specific to a focus update in a collection view.

## Declaration

```objectivec
@interface UICollectionViewFocusUpdateContext : UIFocusUpdateContext
```

<a id="overview"></a>

## Overview

When focus changes, the collection view delegate receives a context object with the relevant information. Your delegate methods use the information in this object to create animations or to perform other tasks related to the change in focus.

## Topics

### Locating focusable items in the collection view

- [previouslyFocusedIndexPath](uicollectionviewfocusupdatecontext/previouslyfocusedindexpath.md): The index path of the collection view cell that previously had the focus.
- [nextFocusedIndexPath](uicollectionviewfocusupdatecontext/nextfocusedindexpath.md): The index path of the collection view cell that’s receiving the focus.

## Relationships

### Inherits From

- [UIFocusUpdateContext](uifocusupdatecontext.md)

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.
