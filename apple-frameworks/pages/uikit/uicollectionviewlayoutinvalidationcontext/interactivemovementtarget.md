> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/interactivemovementtarget](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/interactivemovementtarget)

# interactiveMovementTarget (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The current point used to determine the placement of moving items.

## Declaration

```swift
var interactiveMovementTarget: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

This property is filled when an interactive move is in progress or has just ended. The value represents the point that was used to determine the new index paths in the [targetIndexPathsForInteractivelyMovingItems](targetindexpathsforinteractivelymovingitems.md) property. You can use this point as needed to calculate the position of items in your layout.

## See Also

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [targetIndexPathsForInteractivelyMovingItems](targetindexpathsforinteractivelymovingitems.md): An array of index paths representing the new location of moving items in the collection view.

# interactiveMovementTarget (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The current point used to determine the placement of moving items.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint interactiveMovementTarget;
```

<a id="Discussion"></a>

## Discussion

This property is filled when an interactive move is in progress or has just ended. The value represents the point that was used to determine the new index paths in the [targetIndexPathsForInteractivelyMovingItems](targetindexpathsforinteractivelymovingitems.md) property. You can use this point as needed to calculate the position of items in your layout.

## See Also

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [targetIndexPathsForInteractivelyMovingItems](targetindexpathsforinteractivelymovingitems.md): An array of index paths representing the new location of moving items in the collection view.
