> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/presentingviewcontroller](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentingviewcontroller)

# presentingViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller that presented the view controller or that presented its farthest ancestor view controller.

## Declaration

```swift
unowned(unsafe) var presentingViewController: NSViewController? { get }
```

<a id="Discussion"></a>

## Discussion

The *presenting view controller* is the one that is ultimately responsible for presenting the view controller whose [presentingViewController](presentingviewcontroller.md) property you are accessing.

## See Also

### Getting Related View Controllers

- [parent](parent.md): The immediate ancestor view controller of the view controller.
- [presentedViewControllers](presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.

# presentingViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller that presented the view controller or that presented its farthest ancestor view controller.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSViewController * presentingViewController;
```

<a id="Discussion"></a>

## Discussion

The *presenting view controller* is the one that is ultimately responsible for presenting the view controller whose [presentingViewController](presentingviewcontroller.md) property you are accessing.

## See Also

### Getting Related View Controllers

- [parentViewController](parent.md): The immediate ancestor view controller of the view controller.
- [presentedViewControllers](presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.
