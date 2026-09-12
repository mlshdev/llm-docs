> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/delegate](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/delegate)

# delegate (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The delegate of the app controller object.

> Please use SwiftUI or UIKit

## Declaration

```swift
weak var delegate: (any TVApplicationControllerDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate provides methods for observing and managing different `TVApplicationController` object states. [TVApplicationControllerDelegate](../tvapplicationcontrollerdelegate.md) provides callbacks during the launch of the JavaScript application.

## See Also

### Getting the Delegate

- [TVApplicationControllerDelegate](../tvapplicationcontrollerdelegate.md): Deprecated. A protocol used to observe and manage the different states of an application controller.

# delegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The delegate of the app controller object.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<TVApplicationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate provides methods for observing and managing different `TVApplicationController` object states. [TVApplicationControllerDelegate](../tvapplicationcontrollerdelegate.md) provides callbacks during the launch of the JavaScript application.

## See Also

### Getting the Delegate

- [TVApplicationControllerDelegate](../tvapplicationcontrollerdelegate.md): Deprecated. A protocol used to observe and manage the different states of an application controller.
