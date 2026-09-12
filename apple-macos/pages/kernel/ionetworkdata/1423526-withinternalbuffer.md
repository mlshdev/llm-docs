> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkdata/1423526-withinternalbuffer](https://developer.apple.com/documentation/kernel/ionetworkdata/1423526-withinternalbuffer)

# withInternalBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IONetworkData * withInternalBuffer(const char *name, UInt32 bufferSize, UInt32 accessTypes, void *target, Action action, void *param);
```
