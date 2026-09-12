> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/3516454-filterinterrupteventsource](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/3516454-filterinterrupteventsource)

# filterInterruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static OSPtr<IOFilterInterruptEventSource> filterInterruptEventSource(OSObject *owner, IOService *provider, int intIndex, IOInterruptEventSource::ActionBlock action, FilterBlock filter);
```
