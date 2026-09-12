> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/displaymodebuttonvisibility-swift.enum](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/displaymodebuttonvisibility-swift.enum)

# UISplitViewController.DisplayModeButtonVisibility (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+

Constants that determine the visibility of the display mode button.

## Declaration

```swift
enum DisplayModeButtonVisibility
```

## Topics

### Constants

- [UISplitViewController.DisplayModeButtonVisibility.automatic](displaymodebuttonvisibility-swift.enum/automatic.md): A constant that automatically determines the visibility of the display mode button.
- [UISplitViewController.DisplayModeButtonVisibility.never](displaymodebuttonvisibility-swift.enum/never.md): A constant that prevents the display mode button from appearing.
- [UISplitViewController.DisplayModeButtonVisibility.always](displaymodebuttonvisibility-swift.enum/always.md): A constant that allows the display mode button to always appear.

### Initializers

- [init(rawValue:)](displaymodebuttonvisibility-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewController.DisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.

# UISplitViewControllerDisplayModeButtonVisibility (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+

Constants that determine the visibility of the display mode button.

## Declaration

```objectivec
enum UISplitViewControllerDisplayModeButtonVisibility : NSInteger;
```

## Topics

### Constants

- [UISplitViewControllerDisplayModeButtonVisibilityAutomatic](displaymodebuttonvisibility-swift.enum/automatic.md): A constant that automatically determines the visibility of the display mode button.
- [UISplitViewControllerDisplayModeButtonVisibilityNever](displaymodebuttonvisibility-swift.enum/never.md): A constant that prevents the display mode button from appearing.
- [UISplitViewControllerDisplayModeButtonVisibilityAlways](displaymodebuttonvisibility-swift.enum/always.md): A constant that allows the display mode button to always appear.

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewControllerDisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
