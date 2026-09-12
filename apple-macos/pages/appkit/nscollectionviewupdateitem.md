> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewupdateitem](https://developer.apple.com/documentation/appkit/nscollectionviewupdateitem)

# NSCollectionViewUpdateItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A description of a single change to make to an item in a collection view.

## Declaration

```swift
@MainActor class NSCollectionViewUpdateItem
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When updating its content, the collection view object creates them and passes them to the layout object’s [prepare(forCollectionViewUpdates:)](nscollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) method, which can use them to prepare for the upcoming changes.

## Topics

### Accessing the Item Changes

- [indexPathBeforeUpdate](nscollectionviewupdateitem/indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](nscollectionviewupdateitem/indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](nscollectionviewupdateitem/updateaction.md): The action being performed on the item.
- [NSCollectionView.UpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionView.ScrollDirection](nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.

### Constants

- [NSCollectionView.UpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Updates

- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md): An object that identifies the portions of your layout that need to be updated.
- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md): An object that identifies the portions of a flow layout object that need to be updated.

# NSCollectionViewUpdateItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A description of a single change to make to an item in a collection view.

## Declaration

```objectivec
@interface NSCollectionViewUpdateItem : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When updating its content, the collection view object creates them and passes them to the layout object’s [prepareForCollectionViewUpdates:](nscollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) method, which can use them to prepare for the upcoming changes.

## Topics

### Accessing the Item Changes

- [indexPathBeforeUpdate](nscollectionviewupdateitem/indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](nscollectionviewupdateitem/indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](nscollectionviewupdateitem/updateaction.md): The action being performed on the item.
- [NSCollectionUpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.
- [NSCollectionViewScrollDirection](nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.

### Constants

- [NSCollectionUpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Updates

- [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md): An object that identifies the portions of your layout that need to be updated.
- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md): An object that identifies the portions of a flow layout object that need to be updated.
