> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitemcontainer/focusitems(in:)](https://developer.apple.com/documentation/uikit/uifocusitemcontainer/focusitems(in:))

# focusItems(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Retrieves all of the focus items within this container that intersect with the provided rectangle.

## Declaration

```swift
func focusItems(in rect: CGRect) -> [any UIFocusItem]
```

## Parameters

- `rect`: The rectangle used to look for focus items that intersect the rectangle expressed in the container’s coordinate space.

<a id="return-value"></a>

## Return Value

An array of focus items that intersect the provided rectangle. The focus items are expressed in the container’s coordinate space.

<a id="Discussion"></a>

## Discussion

The found focus items should report their frames in the [coordinateSpace](coordinatespace.md).

## See Also

### Retrieving focus items

- [coordinateSpace](coordinatespace.md): The coordinate space of the focus items contained in the focus item container.

# focusItemsInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Retrieves all of the focus items within this container that intersect with the provided rectangle.

## Declaration

```objectivec
- (NSArray<id<UIFocusItem>> *) focusItemsInRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle used to look for focus items that intersect the rectangle expressed in the container’s coordinate space.

<a id="return-value"></a>

## Return Value

An array of focus items that intersect the provided rectangle. The focus items are expressed in the container’s coordinate space.

<a id="Discussion"></a>

## Discussion

The found focus items should report their frames in the [coordinateSpace](coordinatespace.md).

## See Also

### Retrieving focus items

- [coordinateSpace](coordinatespace.md): The coordinate space of the focus items contained in the focus item container.
