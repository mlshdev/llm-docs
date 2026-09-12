> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/shouldautorotate](https://developer.apple.com/documentation/uikit/uiviewcontroller/shouldautorotate)

# shouldAutorotate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the view controller’s contents should autorotate.

> Instead, update [supportedInterfaceOrientations](supportedinterfaceorientations.md) and then call [setNeedsUpdateOfSupportedInterfaceOrientations()](setneedsupdateofsupportedinterfaceorientations%28%29.md) to indicate a change to the supported interface orientations.

## Declaration

```swift
var shouldAutorotate: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the content should rotate, otherwise [false](https://developer.apple.com/documentation/swift/false). This method returns [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Deprecated properties

- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [isModalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.

# shouldAutorotate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the view controller’s contents should autorotate.

> Instead, update [supportedInterfaceOrientations](supportedinterfaceorientations.md) and then call [setNeedsUpdateOfSupportedInterfaceOrientations](setneedsupdateofsupportedinterfaceorientations%28%29.md) to indicate a change to the supported interface orientations.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldAutorotate;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the content should rotate, otherwise [false](https://developer.apple.com/documentation/swift/false). This method returns [true](https://developer.apple.com/documentation/swift/true) by default.

## See Also

### Deprecated properties

- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [contentSizeForViewInPopover](contentsizeforviewinpopover.md): Deprecated. The size of the view controller’s view while displayed in a popover.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [modalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [modalViewController](modalviewcontroller.md): Deprecated. The controller for the active presented view’that is, the view that is temporarily displayed on top of the view managed by the receiver.
- [searchDisplayController](searchdisplaycontroller.md): Deprecated. The search display controller associated with the view controller.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
