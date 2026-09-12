> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/removeuiinterruptionmonitor(_:)](https://developer.apple.com/documentation/xctest/xctestcase/removeuiinterruptionmonitor(_:))

# removeUIInterruptionMonitor(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Removes a handler using the token from when you added the handler.

## Declaration

```swift
func removeUIInterruptionMonitor(_ monitor: any NSObjectProtocol)
```

## Parameters

- `monitor`: An identifier token for an interruption monitor, obtained from a previous call to [addUIInterruptionMonitor(withDescription:handler:)](adduiinterruptionmonitor%28withdescription_handler_%29.md).

## Mentioned In

- [Handling UI Interruptions](../handling-ui-interruptions.md)

## See Also

### Monitoring UI Interruptions

- [Handling UI Interruptions](../handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [addUIInterruptionMonitor(withDescription:handler:)](adduiinterruptionmonitor%28withdescription_handler_%29.md): Adds a handler to the current context.

# removeUIInterruptionMonitor: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Removes a handler using the token from when you added the handler.

## Declaration

```objectivec
- (void) removeUIInterruptionMonitor:(id<NSObject>) monitor;
```

## Parameters

- `monitor`: An identifier token for an interruption monitor, obtained from a previous call to [addUIInterruptionMonitorWithDescription:handler:](adduiinterruptionmonitor%28withdescription_handler_%29.md).

## Mentioned In

- [Handling UI Interruptions](../handling-ui-interruptions.md)

## See Also

### Monitoring UI Interruptions

- [Handling UI Interruptions](../handling-ui-interruptions.md): Improve your UI test’s stability by handling interface changes that block the UI elements under test.
- [addUIInterruptionMonitorWithDescription:handler:](adduiinterruptionmonitor%28withdescription_handler_%29.md): Adds a handler to the current context.
