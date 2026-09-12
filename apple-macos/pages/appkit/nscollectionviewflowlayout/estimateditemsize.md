> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/estimateditemsize](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/estimateditemsize)

# estimatedItemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The estimated size of items in the collection view.

## Declaration

```swift
var estimatedItemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Providing an estimated item size lets the collection view defer some of the calculations needed to determine the size of its content, which can improve performance. Instead of explicitly computing the size of each item, the flow layout assumes that offscreen items have the estimated size. The estimated size is used only until an actual value is calculated. The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

If the value of this property is not [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize), the flow layout uses the estimated size you specified. If all of your items actually have the same size, use the [itemSize](itemsize.md) property to set their size and set this property to [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize). For more information about how item sizes are determined, see [Understanding How the Flow Layout is Generated](../nscollectionviewflowlayout.md#Understanding-How-the-Flow-Layout-is-Generated).

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.

# estimatedItemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The estimated size of items in the collection view.

## Declaration

```objectivec
@property NSSize estimatedItemSize;
```

<a id="Discussion"></a>

## Discussion

Providing an estimated item size lets the collection view defer some of the calculations needed to determine the size of its content, which can improve performance. Instead of explicitly computing the size of each item, the flow layout assumes that offscreen items have the estimated size. The estimated size is used only until an actual value is calculated. The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

If the value of this property is not [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize), the flow layout uses the estimated size you specified. If all of your items actually have the same size, use the [itemSize](itemsize.md) property to set their size and set this property to [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize). For more information about how item sizes are determined, see [Understanding How the Flow Layout is Generated](../nscollectionviewflowlayout.md#Understanding-How-the-Flow-Layout-is-Generated).

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
