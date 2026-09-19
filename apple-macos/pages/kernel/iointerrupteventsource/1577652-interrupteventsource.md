> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerrupteventsource/1577652-interrupteventsource

# interruptEventSource

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOInterruptEventSource> interruptEventSource(OSObject *owner, Action action, IOService *provider, int intIndex);
```
