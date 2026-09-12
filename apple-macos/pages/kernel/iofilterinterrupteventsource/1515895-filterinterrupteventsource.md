> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/1515895-filterinterrupteventsource](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/1515895-filterinterrupteventsource)

# filterInterruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOFilterInterruptEventSource> filterInterruptEventSource(OSObject *owner, IOInterruptEventSource::Action action, Filter filter, IOService *provider, int intIndex);
```
