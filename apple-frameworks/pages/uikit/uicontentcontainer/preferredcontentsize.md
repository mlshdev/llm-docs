> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/preferredcontentsize](https://developer.apple.com/documentation/uikit/uicontentcontainer/preferredcontentsize)

# preferredContentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred size for the container’s content.

## Declaration

```swift
var preferredContentSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

The [UIViewController](../uiviewcontroller.md) class implements a writable version of this property.

## See Also

### Responding to changes in child view controllers

- [size(forChildContentContainer:withParentContainerSize:)](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [preferredContentSizeDidChange(forChildContentContainer:)](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [systemLayoutFittingSizeDidChange(forChildContentContainer:)](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.

# preferredContentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred size for the container’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize preferredContentSize;
```

<a id="Discussion"></a>

## Discussion

The [UIViewController](../uiviewcontroller.md) class implements a writable version of this property.

## See Also

### Responding to changes in child view controllers

- [sizeForChildContentContainer:withParentContainerSize:](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.
- [preferredContentSizeDidChangeForChildContentContainer:](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md): Notifies an interested controller that the preferred content size of one of its children changed.
- [systemLayoutFittingSizeDidChangeForChildContentContainer:](systemlayoutfittingsizedidchange%28forchildcontentcontainer_%29.md): Notifies the container that a child view controller was resized using Auto Layout.
