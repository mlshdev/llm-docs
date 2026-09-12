> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredtransition](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredtransition)

# preferredTransition (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that defines the transition animation when switching to the view controller.

## Declaration

```swift
var preferredTransition: UIViewController.Transition? { get set }
```

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

Use this property to define which transition the system uses when you present a view controller. For more information, see [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md).

## See Also

### Working with transitions

- [UIViewController.Transition](transition.md): An object that defines the transition animation when switching to a new view controller.

# preferredTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that defines the transition animation when switching to the view controller.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIViewControllerTransition * preferredTransition;
```

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

<a id="Discussion"></a>

## Discussion

Use this property to define which transition the system uses when you present a view controller. For more information, see [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md).

## See Also

### Working with transitions

- [UIViewControllerTransition](transition.md): An object that defines the transition animation when switching to a new view controller.
