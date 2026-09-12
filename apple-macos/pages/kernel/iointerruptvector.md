> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptvector](https://developer.apple.com/documentation/kernel/iointerruptvector)

# IOInterruptVector

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef struct IOInterruptVector {
    ...
} IOInterruptVector;
```

## Topics

### Instance Properties

- [handler](iointerruptvector/1420579-handler.md)
- [interruptActive](iointerruptvector/1420606-interruptactive.md)
- [interruptDisabledHard](iointerruptvector/1420584-interruptdisabledhard.md)
- [interruptDisabledSoft](iointerruptvector/1420555-interruptdisabledsoft.md)
- [interruptLock](iointerruptvector/1420548-interruptlock.md)
- [interruptRegistered](iointerruptvector/1420599-interruptregistered.md)
- [nub](iointerruptvector/1420590-nub.md)
- [refCon](iointerruptvector/1420570-refcon.md)
- [sharedController](iointerruptvector/1420588-sharedcontroller.md)
- [source](iointerruptvector/1420542-source.md)
- [target](iointerruptvector/1420604-target.md)

## See Also

### Interrupts

- [IOInterruptDispatchSource](iointerruptdispatchsource.md)
- [IOInterruptDispatchSourceInterface](iointerruptdispatchsourceinterface.md)
- [IOFilterInterruptEventSource](iofilterinterrupteventsource.md): Filtering varient of the $link IOInterruptEventSource.
- [IOInterruptEventSource](iointerrupteventsource.md): Event source for interrupt delivery to work-loop based drivers.
- [IOInterruptController](iointerruptcontroller.md)
- [PassthruInterruptController](passthruinterruptcontroller.md)
- [IOInterruptSource](iointerruptsource.md)
