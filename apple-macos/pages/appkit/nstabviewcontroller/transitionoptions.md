> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/transitionoptions](https://developer.apple.com/documentation/appkit/nstabviewcontroller/transitionoptions)

# transitionOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The animation options to use when switching between tabs.

## Declaration

```swift
var transitionOptions: NSViewController.TransitionOptions { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to the [crossfade](../nsviewcontroller/transitionoptions/crossfade.md) and [allowUserInteraction](../nsviewcontroller/transitionoptions/allowuserinteraction.md) options.

The tab view controller uses the [transition(from:to:options:completionHandler:)](../nsviewcontroller/transition%28from_to_options_completionhandler_%29.md) method to perform transitions between tabs. For more information about how transitions happen, see the description of that method.

## See Also

### Configuring the Tab View

- [tabStyle](tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](tabview.md): The tab view that manages the views of the interface.
- [canPropagateSelectedChildViewControllerTitle](canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

# transitionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The animation options to use when switching between tabs.

## Declaration

```objectivec
@property NSViewControllerTransitionOptions transitionOptions;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to the [NSViewControllerTransitionCrossfade](../nsviewcontroller/transitionoptions/crossfade.md) and [NSViewControllerTransitionAllowUserInteraction](../nsviewcontroller/transitionoptions/allowuserinteraction.md) options.

The tab view controller uses the [transitionFromViewController:toViewController:options:completionHandler:](../nsviewcontroller/transition%28from_to_options_completionhandler_%29.md) method to perform transitions between tabs. For more information about how transitions happen, see the description of that method.

## See Also

### Configuring the Tab View

- [tabStyle](tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](tabview.md): The tab view that manages the views of the interface.
- [canPropagateSelectedChildViewControllerTitle](canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.
