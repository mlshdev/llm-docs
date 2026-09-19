> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmaeventsource/1589934-dmaeventsource

# dmaEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IODMAEventSource> dmaEventSource(OSObject *owner, IOService *provider, Action completion, Action notification, UInt32 dmaIndex);
```
