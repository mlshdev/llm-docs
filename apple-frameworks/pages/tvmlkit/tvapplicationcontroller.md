> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller)

# TVApplicationController (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An object that bridges the UI, navigation stack, storage, and event handling from JavaScript.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVApplicationController
```

## Mentioned In

- [Creating TVML Elements](creating-tvml-elements.md)

<a id="overview"></a>

## Overview

The `TVApplicationController` class establishes the JavaScript environment and provides a centralized point of control and coordination between the JavaScript environment and tvOS.

## Topics

### Creating a New App Controller

- [init(context:window:delegate:)](tvapplicationcontroller/init%28context_window_delegate_%29.md): Deprecated. Initializes and returns an app controller.

### Controlling and Handling Events

- [evaluate(inJavaScriptContext:completion:)](tvapplicationcontroller/evaluate%28injavascriptcontext_completion_%29.md): Deprecated. Evaluates a block in the JavaScript execution queue.
- [stop()](tvapplicationcontroller/stop%28%29.md): Deprecated. Ends the app life cycle.

### Getting the Delegate

- [delegate](tvapplicationcontroller/delegate.md): Deprecated. The delegate of the app controller object.
- [TVApplicationControllerDelegate](tvapplicationcontrollerdelegate.md): Deprecated. A protocol used to observe and manage the different states of an application controller.

### Examining App Controller Properties

- [context](tvapplicationcontroller/context.md): Deprecated. The launch information for the application controller.
- [navigationController](tvapplicationcontroller/navigationcontroller.md): Deprecated. The navigation controller that is bridged from JavaScript to tvOS.
- [window](tvapplicationcontroller/window.md): Deprecated. A reference to the window supplied when the app controller was initialized.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### JavaScript Environment

- [Implementing a Hybrid TV App with TVMLKit](implementing-a-hybrid-tv-app-with-tvmlkit.md): Display content options with document view controllers and fetch and populate content with TVMLKit JS.
- [TVApplicationControllerContext](tvapplicationcontrollercontext.md): Deprecated. Launch information provided to the TV application controller.

# TVApplicationController (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An object that bridges the UI, navigation stack, storage, and event handling from JavaScript.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVApplicationController : NSObject
```

## Mentioned In

- [Creating TVML Elements](creating-tvml-elements.md)

<a id="overview"></a>

## Overview

The `TVApplicationController` class establishes the JavaScript environment and provides a centralized point of control and coordination between the JavaScript environment and tvOS.

## Topics

### Creating a New App Controller

- [initWithContext:window:delegate:](tvapplicationcontroller/init%28context_window_delegate_%29.md): Deprecated. Initializes and returns an app controller.

### Controlling and Handling Events

- [evaluateInJavaScriptContext:completion:](tvapplicationcontroller/evaluate%28injavascriptcontext_completion_%29.md): Deprecated. Evaluates a block in the JavaScript execution queue.
- [stop](tvapplicationcontroller/stop%28%29.md): Deprecated. Ends the app life cycle.

### Getting the Delegate

- [delegate](tvapplicationcontroller/delegate.md): Deprecated. The delegate of the app controller object.
- [TVApplicationControllerDelegate](tvapplicationcontrollerdelegate.md): Deprecated. A protocol used to observe and manage the different states of an application controller.

### Examining App Controller Properties

- [context](tvapplicationcontroller/context.md): Deprecated. The launch information for the application controller.
- [navigationController](tvapplicationcontroller/navigationcontroller.md): Deprecated. The navigation controller that is bridged from JavaScript to tvOS.
- [window](tvapplicationcontroller/window.md): Deprecated. A reference to the window supplied when the app controller was initialized.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### JavaScript Environment

- [TVApplicationControllerContext](tvapplicationcontrollercontext.md): Deprecated. Launch information provided to the TV application controller.
