> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkdata/1423538-withnobuffer

# withNoBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IONetworkData * withNoBuffer(const char *name, UInt32 bufferSize, UInt32 accessTypes, void *target, Action action, void *param);
```
