> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/stop()](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/stop())

# stop() (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Ends the app life cycle.

> Please use SwiftUI or UIKit

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

After the JavaScript context has ended and all resources have been released, [appController(\_:didStop:)](../tvapplicationcontrollerdelegate/appcontroller%28__didstop_%29.md) is called. The app controller cannot be reused after the `stop` method has been called.

## See Also

### Controlling and Handling Events

- [evaluate(inJavaScriptContext:completion:)](evaluate%28injavascriptcontext_completion_%29.md): Deprecated. Evaluates a block in the JavaScript execution queue.

# stop (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Ends the app life cycle.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

After the JavaScript context has ended and all resources have been released, [appController:didStopWithOptions:](../tvapplicationcontrollerdelegate/appcontroller%28__didstop_%29.md) is called. The app controller cannot be reused after the `stop` method has been called.

## See Also

### Controlling and Handling Events

- [evaluateInJavaScriptContext:completion:](evaluate%28injavascriptcontext_completion_%29.md): Deprecated. Evaluates a block in the JavaScript execution queue.
