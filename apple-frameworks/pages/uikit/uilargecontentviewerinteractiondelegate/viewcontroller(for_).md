> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteractiondelegate/viewcontroller(for:)](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteractiondelegate/viewcontroller(for:))

# viewController(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies which view controller should display the large content viewer.

## Declaration

```swift
optional func viewController(for interaction: UILargeContentViewerInteraction) -> UIViewController
```

## Parameters

- `interaction`: The large content viewer that the system is displaying.

<a id="return-value"></a>

## Return Value

A view controller that the system uses to present the large content viewer in.

<a id="Discussion"></a>

## Discussion

By default, UIKit uses a view controller that contains the view you added the interaction to. If this default choice doesn’t work for your app, implement this method to specify a different view controller.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction(\_:didEndOn:at:)](largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [largeContentViewerInteraction(\_:itemAt:)](largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.

# viewControllerForLargeContentViewerInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Specifies which view controller should display the large content viewer.

## Declaration

```objectivec
- (UIViewController *) viewControllerForLargeContentViewerInteraction:(UILargeContentViewerInteraction *) interaction;
```

## Parameters

- `interaction`: The large content viewer that the system is displaying.

<a id="return-value"></a>

## Return Value

A view controller that the system uses to present the large content viewer in.

<a id="Discussion"></a>

## Discussion

By default, UIKit uses a view controller that contains the view you added the interaction to. If this default choice doesn’t work for your app, implement this method to specify a different view controller.

## See Also

### Customizing large content viewer interactions

- [largeContentViewerInteraction:didEndOnItem:atPoint:](largecontentviewerinteraction%28__didendon_at_%29.md): Performs an action when the large content viewer gesture ends at the location of the specified item.
- [largeContentViewerInteraction:itemAtPoint:](largecontentviewerinteraction%28__itemat_%29.md): Identifies the large content viewer item for the specified interaction and location.
