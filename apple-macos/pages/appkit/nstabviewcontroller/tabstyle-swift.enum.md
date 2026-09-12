> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabstyle-swift.enum](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabstyle-swift.enum)

# NSTabViewController.TabStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Tab control style options for a tab view controller.

## Declaration

```swift
enum TabStyle
```

## Topics

### Constants

- [NSTabViewController.TabStyle.segmentedControlOnTop](tabstyle-swift.enum/segmentedcontrolontop.md): A style that displays a segmented control along the top edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](tabview.md) property.
- [NSTabViewController.TabStyle.segmentedControlOnBottom](tabstyle-swift.enum/segmentedcontrolonbottom.md): A style that displays a segmented control along the bottom edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](tabview.md) property.
- [NSTabViewController.TabStyle.toolbar](tabstyle-swift.enum/toolbar.md): A style that automatically adds any tabs to the window’s toolbar. The tab view controller takes control of the window’s toolbar and sets itself as the toolbar’s delegate. Customization of the toolbar is handled using the methods in Responding to Toolbar Events.
- [NSTabViewController.TabStyle.unspecified](tabstyle-swift.enum/unspecified.md): A style that indicates the tab view controller does not provide the tab selection UI. Your app provides the control (such as an [NSSegmentedControl](../nssegmentedcontrol.md) or [NSPopUpButton](../nspopupbutton.md)) for navigating between tabs. You can bind an existing control to the tab view controller object so that interactions with the control automatically change tabs.

### Initializers

- [init(rawValue:)](tabstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTabViewControllerTabStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Tab control style options for a tab view controller.

## Declaration

```objectivec
enum NSTabViewControllerTabStyle : NSInteger;
```

## Topics

### Constants

- [NSTabViewControllerTabStyleSegmentedControlOnTop](tabstyle-swift.enum/segmentedcontrolontop.md): A style that displays a segmented control along the top edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](tabview.md) property.
- [NSTabViewControllerTabStyleSegmentedControlOnBottom](tabstyle-swift.enum/segmentedcontrolonbottom.md): A style that displays a segmented control along the bottom edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](tabview.md) property.
- [NSTabViewControllerTabStyleToolbar](tabstyle-swift.enum/toolbar.md): A style that automatically adds any tabs to the window’s toolbar. The tab view controller takes control of the window’s toolbar and sets itself as the toolbar’s delegate. Customization of the toolbar is handled using the methods in Responding to Toolbar Events.
- [NSTabViewControllerTabStyleUnspecified](tabstyle-swift.enum/unspecified.md): A style that indicates the tab view controller does not provide the tab selection UI. Your app provides the control (such as an [NSSegmentedControl](../nssegmentedcontrol.md) or [NSPopUpButton](../nspopupbutton.md)) for navigating between tabs. You can bind an existing control to the tab view controller object so that interactions with the control automatically change tabs.
