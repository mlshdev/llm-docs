> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitemcontainer/coordinatespace](https://developer.apple.com/documentation/uikit/uifocusitemcontainer/coordinatespace)

# coordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The coordinate space of the focus items contained in the focus item container.

## Declaration

```swift
var coordinateSpace: any UICoordinateSpace { get }
```

<a id="Discussion"></a>

## Discussion

The focus items returned by [focusItems(in:)](focusitems%28in_%29.md) should report their frames in this coordinate space.

## See Also

### Retrieving focus items

- [focusItems(in:)](focusitems%28in_%29.md): Retrieves all of the focus items within this container that intersect with the provided rectangle.

# coordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The coordinate space of the focus items contained in the focus item container.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id<UICoordinateSpace> coordinateSpace;
```

<a id="Discussion"></a>

## Discussion

The focus items returned by [focusItemsInRect:](focusitems%28in_%29.md) should report their frames in this coordinate space.

## See Also

### Retrieving focus items

- [focusItemsInRect:](focusitems%28in_%29.md): Retrieves all of the focus items within this container that intersect with the provided rectangle.
