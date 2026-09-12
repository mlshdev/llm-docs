> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/searchdisplaycontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller/searchdisplaycontroller)

# searchDisplayController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The search display controller associated with the view controller.

> Use the [UISearchController](../uisearchcontroller.md) class to integrate search results.

## Declaration

```swift
var searchDisplayController: UISearchDisplayController? { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the value of the `searchDisplayController` outlet that you set in Interface Builder. If you create your search display controller programmatically, this property is set automatically by the search display controller when it is initialized.

## See Also

### Deprecated properties

- [shouldAutorotate](shouldautorotate.md): Deprecated. A Boolean value that indicates whether the view controller’s contents should autorotate.
- [previewActionItems](previewactionitems.md): Deprecated. The quick actions displayed when a user swipes upward on a 3D Touch preview.
- [automaticallyAdjustsScrollViewInsets](automaticallyadjustsscrollviewinsets.md): Deprecated. A Boolean value that indicates whether the view controller should automatically adjust its scroll view insets.
- [bottomLayoutGuide](bottomlayoutguide.md): Deprecated. Indicates the lowest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [interfaceOrientation](interfaceorientation.md): Deprecated. Convenience property that provides the current orientation of the interface, meaningful only if the view controller is taking up the full screen.
- [isModalInPopover](ismodalinpopover.md): Deprecated. A Boolean value indicating whether the view controller should be presented modally by a popover.
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.

# searchDisplayController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The search display controller associated with the view controller.

> Use the [UISearchController](../uisearchcontroller.md) class to integrate search results.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UISearchDisplayController * searchDisplayController;
```

<a id="Discussion"></a>

## Discussion

This property reflects the value of the `searchDisplayController` outlet that you set in Interface Builder. If you create your search display controller programmatically, this property is set automatically by the search display controller when it is initialized.

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
- [topLayoutGuide](toplayoutguide.md): Deprecated. Indicates the highest vertical extent for your onscreen content, for use with Auto Layout constraints.
- [wantsFullScreenLayout](wantsfullscreenlayout.md): Deprecated. A Boolean value indicating whether the view should underlap the status bar.
