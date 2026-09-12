> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewupdateitem](https://developer.apple.com/documentation/uikit/uicollectionviewupdateitem)

# UICollectionViewUpdateItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes a single change to make to an item in a collection view.

## Declaration

```swift
@MainActor class UICollectionViewUpdateItem
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. When updating its content, the collection view object creates them and passes them to the layout object’s [prepare(forCollectionViewUpdates:)](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) method, which can use them to prepare the layout object for the upcoming changes.

## Topics

### Accessing the item changes

- [indexPathBeforeUpdate](uicollectionviewupdateitem/indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](uicollectionviewupdateitem/indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](uicollectionviewupdateitem/updateaction.md): The action being performed on the item.
- [UICollectionViewUpdateItem.Action](uicollectionviewupdateitem/action.md): Constants indicating the type of action being performed on an item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.

# UICollectionViewUpdateItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes a single change to make to an item in a collection view.

## Declaration

```objectivec
@interface UICollectionViewUpdateItem : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. When updating its content, the collection view object creates them and passes them to the layout object’s [prepareForCollectionViewUpdates:](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) method, which can use them to prepare the layout object for the upcoming changes.

## Topics

### Accessing the item changes

- [indexPathBeforeUpdate](uicollectionviewupdateitem/indexpathbeforeupdate.md): The index path of the item before the update.
- [indexPathAfterUpdate](uicollectionviewupdateitem/indexpathafterupdate.md): The index path of the item after the update.
- [updateAction](uicollectionviewupdateitem/updateaction.md): The action being performed on the item.
- [UICollectionUpdateAction](uicollectionviewupdateitem/action.md): Constants indicating the type of action being performed on an item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.
