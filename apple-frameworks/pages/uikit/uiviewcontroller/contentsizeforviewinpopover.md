> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/contentsizeforviewinpopover](https://developer.apple.com/documentation/uikit/uiviewcontroller/contentsizeforviewinpopover)

# contentSizeForViewInPopover

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 7.0) · iPadOS 3.2+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The size of the view controller’s view while displayed in a popover.

> Use [preferredContentSize](preferredcontentsize.md) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGSize contentSizeForViewInPopover;
```

<a id="Discussion"></a>

## Discussion

This property contains the desired size for the view controller when it is displayed in a popover. By default, the width is set to 320 points and the height is set to 1100 points. You can change these values as needed.

The recommended width for popovers is 320 points. If needed, you can return a width value as large as 600 points, but doing so is not recommended.

If the popover controller displaying the view controller sets its [popoverContentSize](../uipopovercontroller/contentsize.md) property, the popover controller overrides the values set in the view controller’s [contentSizeForViewInPopover](contentsizeforviewinpopover.md) property.

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
