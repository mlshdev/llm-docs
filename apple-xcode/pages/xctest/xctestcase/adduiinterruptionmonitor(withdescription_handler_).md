> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/adduiinterruptionmonitor(withdescription:handler:)](https://developer.apple.com/documentation/xctest/xctestcase/adduiinterruptionmonitor(withdescription:handler:))

# addUIInterruptionMonitor(withDescription:handler:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Adds a handler to the current context.

## Declaration

```swift
func addUIInterruptionMonitor(withDescription handlerDescription: String, handler: @escaping (XCUIElement) -> Bool) -> any NSObjectProtocol
```

## Parameters

- `handlerDescription`: An explanation of the behavior and purpose of this handler, mainly used for debugging and analysis.
- `handler`: A handler block for handling asynchronous UI interruptions such as alerts and other dialogs. Handlers should return [true](https://developer.apple.com/documentation/swift/true) if they handled the UI, [false](https://developer.apple.com/documentation/swift/false) if they did not. The handler is passed an [XCUIElement](../../xcuiautomation/xcuielement.md) representing the top level UI element for the alert.

<a id="return-value"></a>

## Return Value

Returns a token that can be used to unregister the handler. Handlers are invoked in the reverse order in which they are added until one of the handlers returns true, indicating that it has handled the alert.

## Mentioned In

- [Handling UI Interruptions](../handling-ui-interruptions.md)

## See Also

### Monitoring UI Interruptions

- [Handling UI Interruptions](../handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [removeUIInterruptionMonitor(\_:)](removeuiinterruptionmonitor%28__%29.md): Removes a handler using the token from when you added the handler.

# addUIInterruptionMonitorWithDescription:handler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Adds a handler to the current context.

## Declaration

```objectivec
- (id<NSObject>) addUIInterruptionMonitorWithDescription:(NSString *) handlerDescription handler:(BOOL (^)(XCUIElement *interruptingElement)) handler;
```

## Parameters

- `handlerDescription`: An explanation of the behavior and purpose of this handler, mainly used for debugging and analysis.
- `handler`: A handler block for handling asynchronous UI interruptions such as alerts and other dialogs. Handlers should return [true](https://developer.apple.com/documentation/swift/true) if they handled the UI, [false](https://developer.apple.com/documentation/swift/false) if they did not. The handler is passed an [XCUIElement](../../xcuiautomation/xcuielement.md) representing the top level UI element for the alert.

<a id="return-value"></a>

## Return Value

Returns a token that can be used to unregister the handler. Handlers are invoked in the reverse order in which they are added until one of the handlers returns true, indicating that it has handled the alert.

## Mentioned In

- [Handling UI Interruptions](../handling-ui-interruptions.md)

## See Also

### Monitoring UI Interruptions

- [Handling UI Interruptions](../handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [removeUIInterruptionMonitor:](removeuiinterruptionmonitor%28__%29.md): Removes a handler using the token from when you added the handler.
