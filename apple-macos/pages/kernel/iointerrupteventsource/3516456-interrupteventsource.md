> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerrupteventsource/3516456-interrupteventsource](https://developer.apple.com/documentation/kernel/iointerrupteventsource/3516456-interrupteventsource)

# interruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static OSPtr<IOInterruptEventSource> interruptEventSource(OSObject *owner, IOService *provider, int intIndex, ActionBlock action);
```
