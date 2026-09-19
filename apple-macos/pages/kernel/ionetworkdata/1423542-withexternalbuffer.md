> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkdata/1423542-withexternalbuffer

# withExternalBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IONetworkData * withExternalBuffer(const char *name, UInt32 bufferSize, void *externalBuffer, UInt32 accessTypes, void *target, Action action, void *param);
```
