> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/automaticallyadjustsscrollviewinsets](https://developer.apple.com/documentation/uikit/uiviewcontroller/automaticallyadjustsscrollviewinsets)

# automaticallyAdjustsScrollViewInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 11.0) · iPadOS 7.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 7.0+ (deprecated in 11.0)

A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.

> Use [contentInsetAdjustmentBehavior](../uiscrollview/contentinsetadjustmentbehavior-swift.property.md) instead.

## Declaration

```swift
var automaticallyAdjustsScrollViewInsets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets container view controllers know that they should adjust the scroll view insets of this view controller’s view to account for screen areas consumed by a status bar, search bar, navigation bar, toolbar, or tab bar. Set this property to [false](https://developer.apple.com/documentation/swift/false) if your view controller implementation manages its own scroll view inset adjustments.

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [isModalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.

# automaticallyAdjustsScrollViewInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 11.0) · iPadOS 7.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 7.0+ (deprecated in 11.0)

A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.

> Use [contentInsetAdjustmentBehavior](../uiscrollview/contentinsetadjustmentbehavior-swift.property.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyAdjustsScrollViewInsets;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets container view controllers know that they should adjust the scroll view insets of this view controller’s view to account for screen areas consumed by a status bar, search bar, navigation bar, toolbar, or tab bar. Set this property to [false](https://developer.apple.com/documentation/swift/false) if your view controller implementation manages its own scroll view inset adjustments.

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [contentSizeForViewInPopover](contentsizeforviewinpopover.md): Deprecated. The size of the view controller’s view while displayed in a popover.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
