> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/1515897-interrupteventsource](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/1515897-interrupteventsource)

# interruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOInterruptEventSource> interruptEventSource(OSObject *inOwner, IOInterruptEventSource::Action inAction, IOService *inProvider, int inIntIndex);
```
