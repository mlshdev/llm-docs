> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/canpropagateselectedchildviewcontrollertitle](https://developer.apple.com/documentation/appkit/nstabviewcontroller/canpropagateselectedchildviewcontrollertitle)

# canPropagateSelectedChildViewControllerTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

## Declaration

```swift
var canPropagateSelectedChildViewControllerTitle: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the tab view controller’s own title is `nil`, the tab view controller gets its title from the [title](../nsviewcontroller/title.md) property of the selected child view controller. When this property is [false](https://developer.apple.com/documentation/swift/false), the tab view controller always provides the title, which may be `nil`. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Tab View

- [tabStyle](tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](transitionoptions.md): The animation options to use when switching between tabs.

# canPropagateSelectedChildViewControllerTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

## Declaration

```objectivec
@property BOOL canPropagateSelectedChildViewControllerTitle;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the tab view controller’s own title is `nil`, the tab view controller gets its title from the [title](../nsviewcontroller/title.md) property of the selected child view controller. When this property is [false](https://developer.apple.com/documentation/swift/false), the tab view controller always provides the title, which may be `nil`. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Tab View

- [tabStyle](tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](transitionoptions.md): The animation options to use when switching between tabs.
