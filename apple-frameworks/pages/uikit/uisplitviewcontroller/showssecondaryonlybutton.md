> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/showssecondaryonlybutton](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/showssecondaryonlybutton)

# showsSecondaryOnlyButton (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.

## Declaration

```swift
var showsSecondaryOnlyButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value only takes effect when the split view controller’s [style](style-swift.property.md) property is [UISplitViewController.Style.tripleColumn](style-swift.enum/triplecolumn.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set the value to [true](https://developer.apple.com/documentation/swift/true), the secondary view controller shows a button that lets a user toggle the display mode to and from [UISplitViewController.DisplayMode.secondaryOnly](displaymode-swift.enum/secondaryonly.md).

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [UISplitViewController.DisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewController.DisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.

# showsSecondaryOnlyButton (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.

## Declaration

```objectivec
@property (nonatomic) BOOL showsSecondaryOnlyButton;
```

<a id="Discussion"></a>

## Discussion

This value only takes effect when the split view controller’s [style](style-swift.property.md) property is [UISplitViewControllerStyleTripleColumn](style-swift.enum/triplecolumn.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If you set the value to [true](https://developer.apple.com/documentation/swift/true), the secondary view controller shows a button that lets a user toggle the display mode to and from [UISplitViewControllerDisplayModeSecondaryOnly](displaymode-swift.enum/secondaryonly.md).

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [UISplitViewControllerDisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewControllerDisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.
