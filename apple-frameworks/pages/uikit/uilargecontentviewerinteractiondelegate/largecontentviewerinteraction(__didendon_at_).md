> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteractiondelegate/largecontentviewerinteraction(_:didendon:at:)](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteractiondelegate/largecontentviewerinteraction(_:didendon:at:))

# largeContentViewerInteraction(\_:didEndOn:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs an action when the large content viewer gesture ends at the location of the specified item.

## Declaration

```swift
optional func largeContentViewerInteraction(_ interaction: UILargeContentViewerInteraction, didEndOn item: (any UILargeContentViewerItem)?, at point: CGPoint)
```

## Parameters

- `interaction`: The large content viewer interaction associated with the view that the user interacted with.
- `item`: The item that the user interacted with in the large content viewer.
- `point`: The point where the user’s interaction ended, in the coordinate space of the item’s view.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method and are using standard UIKit controls, the system performs a default action, such as sending a [touchUpInside](../uicontrol/event/touchupinside.md) event to the control. If you’re using a custom view with its own tap gesture recognizer, implement this method to handle the interaction. For example, to perform the action that would have occurred if the user tapped on that item.

UIKit only calls this method if the gesture ends successfully, not if it fails or gets canceled.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction(\_:itemAt:)](largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.
- [viewController(for:)](viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.

# largeContentViewerInteraction:didEndOnItem:atPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs an action when the large content viewer gesture ends at the location of the specified item.

## Declaration

```objectivec
- (void) largeContentViewerInteraction:(UILargeContentViewerInteraction *) interaction didEndOnItem:(id<UILargeContentViewerItem>) item atPoint:(CGPoint) point;
```

## Parameters

- `interaction`: The large content viewer interaction associated with the view that the user interacted with.
- `item`: The item that the user interacted with in the large content viewer.
- `point`: The point where the user’s interaction ended, in the coordinate space of the item’s view.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method and are using standard UIKit controls, the system performs a default action, such as sending a [UIControlEventTouchUpInside](../uicontrol/event/touchupinside.md) event to the control. If you’re using a custom view with its own tap gesture recognizer, implement this method to handle the interaction. For example, to perform the action that would have occurred if the user tapped on that item.

UIKit only calls this method if the gesture ends successfully, not if it fails or gets canceled.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction:itemAtPoint:](largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.
- [viewControllerForLargeContentViewerInteraction:](viewcontroller%28for_%29.md): Specifies which view controller should display the large content viewer.
