> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerrupteventsource/1577652-interrupteventsource](https://developer.apple.com/documentation/kernel/iointerrupteventsource/1577652-interrupteventsource)

# interruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOInterruptEventSource> interruptEventSource(OSObject *owner, Action action, IOService *provider, int intIndex);
```
