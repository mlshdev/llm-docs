> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmaeventsource/1589934-dmaeventsource](https://developer.apple.com/documentation/kernel/iodmaeventsource/1589934-dmaeventsource)

# dmaEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IODMAEventSource> dmaEventSource(OSObject *owner, IOService *provider, Action completion, Action notification, UInt32 dmaIndex);
```
