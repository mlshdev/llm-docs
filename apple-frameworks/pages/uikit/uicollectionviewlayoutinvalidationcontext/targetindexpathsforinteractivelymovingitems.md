> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/targetindexpathsforinteractivelymovingitems](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/targetindexpathsforinteractivelymovingitems)

# targetIndexPathsForInteractivelyMovingItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of index paths representing the new location of moving items in the collection view.

## Declaration

```swift
var targetIndexPathsForInteractivelyMovingItems: [IndexPath]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is filled when an interactive move is in progress or has just ended. Use this property together with the [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md) property to determine what changes you need to make to the affected items. For most other updates, the value of this property is `nil`.

## See Also

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [interactiveMovementTarget](interactivemovementtarget.md): The current point used to determine the placement of moving items.

# targetIndexPathsForInteractivelyMovingItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of index paths representing the new location of moving items in the collection view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSIndexPath *> * targetIndexPathsForInteractivelyMovingItems;
```

<a id="Discussion"></a>

## Discussion

This property is filled when an interactive move is in progress or has just ended. Use this property together with the [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md) property to determine what changes you need to make to the affected items. For most other updates, the value of this property is `nil`.

## See Also

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [interactiveMovementTarget](interactivemovementtarget.md): The current point used to determine the placement of moving items.
