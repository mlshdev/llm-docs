> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/parent](https://developer.apple.com/documentation/appkit/nsviewcontroller/parent)

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The immediate ancestor view controller of the view controller.

## Declaration

```swift
var parent: NSViewController? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view controller has no parent view controller, such as if the view controller is a window’s content view controller.

## See Also

### Getting Related View Controllers

- [presentedViewControllers](presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.

# parentViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The immediate ancestor view controller of the view controller.

## Declaration

```objectivec
@property (readonly, nullable) NSViewController * parentViewController;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view controller has no parent view controller, such as if the view controller is a window’s content view controller.

## See Also

### Getting Related View Controllers

- [presentedViewControllers](presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.
