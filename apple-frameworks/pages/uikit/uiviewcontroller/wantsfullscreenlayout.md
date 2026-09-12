> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/wantsfullscreenlayout](https://developer.apple.com/documentation/uikit/uiviewcontroller/wantsfullscreenlayout)

# wantsFullScreenLayout

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the view should underlap the status bar.

> Use [edgesForExtendedLayout](edgesforextendedlayout.md) and [extendedLayoutIncludesOpaqueBars](extendedlayoutincludesopaquebars.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL wantsFullScreenLayout;
```

<a id="Discussion"></a>

## Discussion

When a view controller presents its view, it normally shrinks that view so that its frame does not overlap the device’s status bar. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the view controller to size its view so that it fills the entire screen, including the area under the status bar. (Of course, for this to happen, the window hosting the view controller must itself be sized to fill the entire screen, including the area underneath the status bar.) You would typically set this property to [true](https://developer.apple.com/documentation/swift/true) in cases where you have a translucent status bar and want your view’s content to be visible behind that view.

If this property is [true](https://developer.apple.com/documentation/swift/true), the view is not resized in a way that would cause it to underlap a tab bar but is resized to underlap translucent toolbars. Regardless of the value of this property, navigation controllers always allow views to underlap translucent navigation bars.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the view to be laid out so it does not underlap the status bar.

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [contentSizeForViewInPopover](contentsizeforviewinpopover.md): Deprecated. The size of the view controller’s view while displayed in a popover.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
