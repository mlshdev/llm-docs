> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutitem/contentinsets](https://developer.apple.com/documentation/uikit/nscollectionlayoutitem/contentinsets)

# contentInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The amount of space added around the content of the item to adjust its final size after its position is computed.

## Declaration

```swift
var contentInsets: NSDirectionalEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property within a grid layout to apply even spacing around each edge of each item. Content insets are applied after applying [edgeSpacing](edgespacing.md).

The following diagram shows the result of applying 2 points of content insets to each edge of each item in a group.

![Two diagrams that show the result of content insets applied to a group of items. The first diagram shows a group of three square items in a row, each item measuring 20 by 20 points. The second diagram shows content insets of 2 applied to each edge of each item, resulting in each item becoming 16 by 16 points. The group remains the same size.](https://developer.apple.com/images/com.apple.uikit/media-3570427@2x.png)

> **Note**

>  The value of this property is ignored for any axis that uses an estimated value for its dimension. For more information, see [estimated(\_:)](../nscollectionlayoutdimension/estimated%28__%29.md).

## See Also

### Configuring spacing and insets

- [edgeSpacing](edgespacing.md): The amount of space added around the boundaries of the item between other items and this item’s container.

# contentInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The amount of space added around the content of the item to adjust its final size after its position is computed.

## Declaration

```objectivec
@property (nonatomic) NSDirectionalEdgeInsets contentInsets;
```

<a id="Discussion"></a>

## Discussion

You can use this property within a grid layout to apply even spacing around each edge of each item. Content insets are applied after applying [edgeSpacing](edgespacing.md).

The following diagram shows the result of applying 2 points of content insets to each edge of each item in a group.

![Two diagrams that show the result of content insets applied to a group of items. The first diagram shows a group of three square items in a row, each item measuring 20 by 20 points. The second diagram shows content insets of 2 applied to each edge of each item, resulting in each item becoming 16 by 16 points. The group remains the same size.](https://developer.apple.com/images/com.apple.uikit/media-3570427@2x.png)

> **Note**

>  The value of this property is ignored for any axis that uses an estimated value for its dimension. For more information, see [estimatedDimension:](../nscollectionlayoutdimension/estimated%28__%29.md).

## See Also

### Configuring spacing and insets

- [edgeSpacing](edgespacing.md): The amount of space added around the boundaries of the item between other items and this item’s container.
