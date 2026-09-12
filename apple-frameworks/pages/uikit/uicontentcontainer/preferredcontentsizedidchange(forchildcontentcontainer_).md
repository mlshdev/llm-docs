> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/preferredcontentsizedidchange(forchildcontentcontainer:)](https://developer.apple.com/documentation/uikit/uicontentcontainer/preferredcontentsizedidchange(forchildcontentcontainer:))

# preferredContentSizeDidChange(forChildContentContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies an interested controller that the preferred content size of one of its children changed.

## Declaration

```swift
func preferredContentSizeDidChange(forChildContentContainer container: any UIContentContainer)
```

## Parameters

- `container`: The child view controller whose preferred content size has changed.

<a id="Discussion"></a>

## Discussion

UIKit calls this method on a container view controller when the [preferredContentSize](preferredcontentsize.md) property of one of its child view controllers changes. Similarly, if the view controller is managed by a presentation controller, UIKit calls this method on the presentation controller to let it know of the change. The parent view controller or presentation controller can use this method to initiate layout adjustments based on the new size information.

## See Also

### Responding to changes in child view controllers

- [size(forChildContentContainer:withParentContainerSize:)](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [systemLayoutFittingSizeDidChange(forChildContentContainer:)](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.

# preferredContentSizeDidChangeForChildContentContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies an interested controller that the preferred content size of one of its children changed.

## Declaration

```objectivec
- (void) preferredContentSizeDidChangeForChildContentContainer:(id<UIContentContainer>) container;
```

## Parameters

- `container`: The child view controller whose preferred content size has changed.

<a id="Discussion"></a>

## Discussion

UIKit calls this method on a container view controller when the [preferredContentSize](preferredcontentsize.md) property of one of its child view controllers changes. Similarly, if the view controller is managed by a presentation controller, UIKit calls this method on the presentation controller to let it know of the change. The parent view controller or presentation controller can use this method to initiate layout adjustments based on the new size information.

## See Also

### Responding to changes in child view controllers

- [sizeForChildContentContainer:withParentContainerSize:](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [systemLayoutFittingSizeDidChangeForChildContentContainer:](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.
