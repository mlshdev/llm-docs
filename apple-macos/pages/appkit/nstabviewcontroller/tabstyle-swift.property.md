> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabstyle-swift.property](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabstyle-swift.property)

# tabStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The style used to display the tabs.

## Declaration

```swift
var tabStyle: NSTabViewController.TabStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSTabViewController.TabStyle.segmentedControlOnTop](tabstyle-swift.enum/segmentedcontrolontop.md). Changing the style at runtime updates the appearance of the tab view controller interface.

## See Also

### Configuring the Tab View

- [tabView](tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](transitionoptions.md): The animation options to use when switching between tabs.
- [canPropagateSelectedChildViewControllerTitle](canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

# tabStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The style used to display the tabs.

## Declaration

```objectivec
@property NSTabViewControllerTabStyle tabStyle;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSTabViewControllerTabStyleSegmentedControlOnTop](tabstyle-swift.enum/segmentedcontrolontop.md). Changing the style at runtime updates the appearance of the tab view controller interface.

## See Also

### Configuring the Tab View

- [tabView](tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](transitionoptions.md): The animation options to use when switching between tabs.
- [canPropagateSelectedChildViewControllerTitle](canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.
