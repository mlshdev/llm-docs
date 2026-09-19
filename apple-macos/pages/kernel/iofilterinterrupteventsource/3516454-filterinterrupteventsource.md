> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/3516454-filterinterrupteventsource

# filterInterruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static OSPtr<IOFilterInterruptEventSource> filterInterruptEventSource(OSObject *owner, IOService *provider, int intIndex, IOInterruptEventSource::ActionBlock action, FilterBlock filter);
```
