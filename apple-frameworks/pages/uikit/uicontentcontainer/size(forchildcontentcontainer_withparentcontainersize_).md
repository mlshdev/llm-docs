> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/size(forchildcontentcontainer:withparentcontainersize:)](https://developer.apple.com/documentation/uikit/uicontentcontainer/size(forchildcontentcontainer:withparentcontainersize:))

# size(forChildContentContainer:withParentContainerSize:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size of the specified child view controller’s content.

## Declaration

```swift
func size(forChildContentContainer container: any UIContentContainer, withParentContainerSize parentSize: CGSize) -> CGSize
```

## Parameters

- `container`: The child view controller.
- `parentSize`: The size of the parent view controller.

<a id="return-value"></a>

## Return Value

The size to apply to the child view controller.

<a id="Discussion"></a>

## Discussion

Container view controllers use this method to return the sizes for their child view controllers. UIKit calls the method as part of the default implementation of the [viewWillTransition(to:with:)](viewwilltransition%28to_with_%29.md) method for view controllers. It calls the method once for each child view controller embedded in the view controller. If you’re implementing a custom container view controller, you should override this method and use it to return the sizes of the contained children.

View controllers and presentation controllers return the value in `parentSize` by default.

## See Also

### Responding to changes in child view controllers

- [preferredContentSizeDidChange(forChildContentContainer:)](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [systemLayoutFittingSizeDidChange(forChildContentContainer:)](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.

# sizeForChildContentContainer:withParentContainerSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size of the specified child view controller’s content.

## Declaration

```objectivec
- (CGSize) sizeForChildContentContainer:(id<UIContentContainer>) container withParentContainerSize:(CGSize) parentSize;
```

## Parameters

- `container`: The child view controller.
- `parentSize`: The size of the parent view controller.

<a id="return-value"></a>

## Return Value

The size to apply to the child view controller.

<a id="Discussion"></a>

## Discussion

Container view controllers use this method to return the sizes for their child view controllers. UIKit calls the method as part of the default implementation of the [viewWillTransitionToSize:withTransitionCoordinator:](viewwilltransition%28to_with_%29.md) method for view controllers. It calls the method once for each child view controller embedded in the view controller. If you’re implementing a custom container view controller, you should override this method and use it to return the sizes of the contained children.

View controllers and presentation controllers return the value in `parentSize` by default.

## See Also

### Responding to changes in child view controllers

- [preferredContentSizeDidChangeForChildContentContainer:](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [systemLayoutFittingSizeDidChangeForChildContentContainer:](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the container’s content.
