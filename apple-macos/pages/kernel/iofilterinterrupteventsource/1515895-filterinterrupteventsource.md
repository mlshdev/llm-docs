> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/1515895-filterinterrupteventsource

# filterInterruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOFilterInterruptEventSource> filterInterruptEventSource(OSObject *owner, IOInterruptEventSource::Action action, Filter filter, IOService *provider, int intIndex);
```
