> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerruptsource

# IOInterruptSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef struct IOInterruptSource {
    ...
} IOInterruptSource;
```

## Topics

### Instance Properties

- [interruptController](iointerruptsource/1400897-interruptcontroller.md)
- [vectorData](iointerruptsource/1400895-vectordata.md)

## See Also

### Interrupts

- [IOInterruptDispatchSource](iointerruptdispatchsource.md)
- [IOInterruptDispatchSourceInterface](iointerruptdispatchsourceinterface.md)
- [IOFilterInterruptEventSource](iofilterinterrupteventsource.md): Filtering varient of the $link IOInterruptEventSource.
- [IOInterruptEventSource](iointerrupteventsource.md): Event source for interrupt delivery to work-loop based drivers.
- [IOInterruptController](iointerruptcontroller.md)
- [PassthruInterruptController](passthruinterruptcontroller.md)
- [IOInterruptVector](iointerruptvector.md)
