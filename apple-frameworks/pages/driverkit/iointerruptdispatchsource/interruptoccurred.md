> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iointerruptdispatchsource/interruptoccurred](https://developer.apple.com/documentation/driverkit/iointerruptdispatchsource/interruptoccurred)

# InterruptOccurred

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Executes custom code when an interrupt occurs.

## Declaration

```objectivec
virtual void InterruptOccurred(OSAction *action, uint64_t count, uint64_t time);
```

## Parameters

- `action`: The action object that handles the interrupt event.
- `count`: The number of interrupts that occurred.
- `time`: The time at which the interrupt occurred. The system collects this value using the [mach_absolute_time](../mach_absolute_time.md) function.

<a id="Discussion"></a>

## Discussion

Use this method as a prototype for declaring your own custom interrupt handlers. When declaring your method, use the [TYPE](../type.md) macro to indicate that your method has the same parameters and return value as this method.

Use the implementation of your method to respond to any interrupts that occurred.

## See Also

### Declaring Actions

- [CheckForWork](checkforwork.md): Checks for events to handle.
- [IOInterruptDispatchSourcePayload](../iointerruptdispatchsourcepayload.md): A private structure for an interrupt dispatch source.
