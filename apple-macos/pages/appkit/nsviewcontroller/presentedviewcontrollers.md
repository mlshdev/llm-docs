> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/presentedviewcontrollers](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentedviewcontrollers)

# presentedViewControllers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controllers, if any, that are currently presented by the view controller.

## Declaration

```swift
var presentedViewControllers: [NSViewController]? { get }
```

<a id="Discussion"></a>

## Discussion

There is a one-to-many relationship between the view controller whose [presentedViewControllers](presentedviewcontrollers.md) property you are accessing, and the view controllers it is currently presenting.

## See Also

### Getting Related View Controllers

- [parent](parent.md): The immediate ancestor view controller of the view controller.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.

# presentedViewControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controllers, if any, that are currently presented by the view controller.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<__kindof NSViewController *> * presentedViewControllers;
```

<a id="Discussion"></a>

## Discussion

There is a one-to-many relationship between the view controller whose [presentedViewControllers](presentedviewcontrollers.md) property you are accessing, and the view controllers it is currently presenting.

## See Also

### Getting Related View Controllers

- [parentViewController](parent.md): The immediate ancestor view controller of the view controller.
- [presentingViewController](presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.
