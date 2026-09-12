> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchsourcecancelhandler](https://developer.apple.com/documentation/driverkit/iodispatchsourcecancelhandler)

# IODispatchSourceCancelHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A block to execute when a canceled dispatch source stops executing tasks.

## Declaration

```objectivec
typedef void (^)(void) IODispatchSourceCancelHandler;
```

## See Also

### Starting and Stopping the Interrupt Source

- [SetEnableWithCompletion](iointerruptdispatchsource/setenablewithcompletion.md): Enables or disables the delivery of interrupts.
- [Cancel](iointerruptdispatchsource/cancel.md): Cancels all callbacks from the event source.
