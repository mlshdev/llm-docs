> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/previewactionitems](https://developer.apple.com/documentation/uikit/uiviewcontroller/previewactionitems)

# previewActionItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The quick actions displayed when a user swipes upward on a 3D Touch preview.

> Use [UIContextMenuInteraction](../uicontextmenuinteraction.md) instead.

## Declaration

```swift
var previewActionItems: [any UIPreviewActionItem] { get }
```

<a id="return-value"></a>

## Return Value

An array of preview (peek) quick actions.

<a id="Discussion"></a>

## Discussion

This property is for use with a preview (peek) view controller which you present in your implementation of the [previewingContext(\_:viewControllerForLocation:)](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) delegate method..

Implement this method to provide quick actions for such a preview. When the user swipes upward on the preview, the system presents these quick action items in a sheet below the preview.

The default implementation of this method returns an empty array.

For guidance on appropriate items to include as preview quick actions, read the material on 3D Touch in the [iOS Technologies](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/MobileHIG/3DTouch.html#//apple_ref/doc/uid/TP40006556-CH31) chapter of [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

For more information on preview quick actions, see [UIPreviewActionItem](../uipreviewactionitem.md) and [UIPreviewAction](../uipreviewaction.md).

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [isModalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.

# previewActionItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The quick actions displayed when a user swipes upward on a 3D Touch preview.

> Use [UIContextMenuInteraction](../uicontextmenuinteraction.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<UIPreviewActionItem>> * previewActionItems;
```

<a id="return-value"></a>

## Return Value

An array of preview (peek) quick actions.

<a id="Discussion"></a>

## Discussion

This property is for use with a preview (peek) view controller which you present in your implementation of the [previewingContext:viewControllerForLocation:](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) delegate method..

Implement this method to provide quick actions for such a preview. When the user swipes upward on the preview, the system presents these quick action items in a sheet below the preview.

The default implementation of this method returns an empty array.

For guidance on appropriate items to include as preview quick actions, read the material on 3D Touch in the [iOS Technologies](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/MobileHIG/3DTouch.html#//apple_ref/doc/uid/TP40006556-CH31) chapter of [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

For more information on preview quick actions, see [UIPreviewActionItem](../uipreviewactionitem.md) and [UIPreviewAction](../uipreviewaction.md).

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [contentSizeForViewInPopover](contentsizeforviewinpopover.md): Deprecated. The size of the view controller’s view while displayed in a popover.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
