> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabstyle-swift.enum/toolbar](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabstyle-swift.enum/toolbar)

# NSTabViewController.TabStyle.toolbar (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

A style that automatically adds any tabs to the window’s toolbar. The tab view controller takes control of the window’s toolbar and sets itself as the toolbar’s delegate. Customization of the toolbar is handled using the methods in Responding to Toolbar Events.

## Declaration

```swift
case toolbar
```

## See Also

### Constants

- [NSTabViewController.TabStyle.segmentedControlOnTop](segmentedcontrolontop.md): A style that displays a segmented control along the top edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](../tabview.md) property.
- [NSTabViewController.TabStyle.segmentedControlOnBottom](segmentedcontrolonbottom.md): A style that displays a segmented control along the bottom edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](../tabview.md) property.
- [NSTabViewController.TabStyle.unspecified](unspecified.md): A style that indicates the tab view controller does not provide the tab selection UI. Your app provides the control (such as an [NSSegmentedControl](../../nssegmentedcontrol.md) or [NSPopUpButton](../../nspopupbutton.md)) for navigating between tabs. You can bind an existing control to the tab view controller object so that interactions with the control automatically change tabs.

# NSTabViewControllerTabStyleToolbar (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A style that automatically adds any tabs to the window’s toolbar. The tab view controller takes control of the window’s toolbar and sets itself as the toolbar’s delegate. Customization of the toolbar is handled using the methods in Responding to Toolbar Events.

## Declaration

```objectivec
NSTabViewControllerTabStyleToolbar
```

## See Also

### Constants

- [NSTabViewControllerTabStyleSegmentedControlOnTop](segmentedcontrolontop.md): A style that displays a segmented control along the top edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](../tabview.md) property.
- [NSTabViewControllerTabStyleSegmentedControlOnBottom](segmentedcontrolonbottom.md): A style that displays a segmented control along the bottom edge of the tab view interface. Access the configuration of the tab items through the tab view, which you can get from the [tabView](../tabview.md) property.
- [NSTabViewControllerTabStyleUnspecified](unspecified.md): A style that indicates the tab view controller does not provide the tab selection UI. Your app provides the control (such as an [NSSegmentedControl](../../nssegmentedcontrol.md) or [NSPopUpButton](../../nspopupbutton.md)) for navigating between tabs. You can bind an existing control to the tab view controller object so that interactions with the control automatically change tabs.
