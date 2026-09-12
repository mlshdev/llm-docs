> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/systemlayoutfittingsizedidchange(forchildcontentcontainer:)](https://developer.apple.com/documentation/uikit/uicontentcontainer/systemlayoutfittingsizedidchange(forchildcontentcontainer:))

# systemLayoutFittingSizeDidChange(forChildContentContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that a child view controller was resized using Auto Layout.

## Declaration

```swift
func systemLayoutFittingSizeDidChange(forChildContentContainer container: any UIContentContainer)
```

## Parameters

- `container`: The child view controller that received the resizing message.

<a id="Discussion"></a>

## Discussion

This method is called when a view controller that doesn’t use Auto Layout has a child view controller that uses Auto Layout and the child view controller is resized. When the child view controller responds to the [systemLayoutSizeFitting(\_:)](../uiview/systemlayoutsizefitting%28__%29.md) method, the [systemLayoutFittingSizeDidChange(forChildContentContainer:)](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md) method is sent to the parent view controller.

## See Also

### Responding to changes in child view controllers

- [size(forChildContentContainer:withParentContainerSize:)](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [preferredContentSizeDidChange(forChildContentContainer:)](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.

# systemLayoutFittingSizeDidChangeForChildContentContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that a child view controller was resized using Auto Layout.

## Declaration

```objectivec
- (void) systemLayoutFittingSizeDidChangeForChildContentContainer:(id<UIContentContainer>) container;
```

## Parameters

- `container`: The child view controller that received the resizing message.

<a id="Discussion"></a>

## Discussion

This method is called when a view controller that doesn’t use Auto Layout has a child view controller that uses Auto Layout and the child view controller is resized. When the child view controller responds to the [systemLayoutSizeFittingSize:](../uiview/systemlayoutsizefitting%28__%29.md) method, the [systemLayoutFittingSizeDidChangeForChildContentContainer:](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md) method is sent to the parent view controller.

## See Also

### Responding to changes in child view controllers

- [sizeForChildContentContainer:withParentContainerSize:](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [preferredContentSizeDidChangeForChildContentContainer:](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.
