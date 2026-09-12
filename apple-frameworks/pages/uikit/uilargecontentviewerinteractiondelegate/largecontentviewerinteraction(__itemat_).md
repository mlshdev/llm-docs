> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteractiondelegate/largecontentviewerinteraction(_:itemat:)](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteractiondelegate/largecontentviewerinteraction(_:itemat:))

# largeContentViewerInteraction(\_:itemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Identifies the large content viewer item for the specified interaction and location.

## Declaration

```swift
optional func largeContentViewerInteraction(_ interaction: UILargeContentViewerInteraction, itemAt point: CGPoint) -> (any UILargeContentViewerItem)?
```

## Parameters

- `interaction`: The large content viewer interaction that needs an item.
- `point`: The point where the user’s interaction is taking place, in the coordinate space of the view that contains the interaction.

<a id="Discussion"></a>

## Discussion

By default, UIKit finds the item for the interaction by calling [point(inside:with:)](../uiview/point%28inside_with_%29.md) recursively on your view hierarchy. If you’re not using views, implement this method to identify the item for an interaction at a given point.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction(\_:didEndOn:at:)](largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [viewController(for:)](viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.

# largeContentViewerInteraction:itemAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Identifies the large content viewer item for the specified interaction and location.

## Declaration

```objectivec
- (id<UILargeContentViewerItem>) largeContentViewerInteraction:(UILargeContentViewerInteraction *) interaction itemAtPoint:(CGPoint) point;
```

## Parameters

- `interaction`: The large content viewer interaction that needs an item.
- `point`: The point where the user’s interaction is taking place, in the coordinate space of the view that contains the interaction.

<a id="Discussion"></a>

## Discussion

By default, UIKit finds the item for the interaction by calling [pointInside:withEvent:](../uiview/point%28inside_with_%29.md) recursively on your view hierarchy. If you’re not using views, implement this method to identify the item for an interaction at a given point.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction:didEndOnItem:atPoint:](largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [viewControllerForLargeContentViewerInteraction:](viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.
