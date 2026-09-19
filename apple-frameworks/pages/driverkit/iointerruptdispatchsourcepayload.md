> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iointerruptdispatchsourcepayload

# IOInterruptDispatchSourcePayload

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Structure  
**Availability:** DriverKit · iOS · iPadOS · macOS

A private structure for an interrupt dispatch source.

## Declaration

```objectivec
struct IOInterruptDispatchSourcePayload;
```

## Topics

### Getting the Payload Values

- [count](iointerruptdispatchsourcepayload/count.md)
- [time](iointerruptdispatchsourcepayload/time.md)

## See Also

### Declaring Actions

- [InterruptOccurred](iointerruptdispatchsource/interruptoccurred.md): Executes custom code when an interrupt occurs.
- [CheckForWork](iointerruptdispatchsource/checkforwork.md): Checks for events to handle.
