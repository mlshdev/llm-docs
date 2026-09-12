> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryentry/1437706-frompath](https://developer.apple.com/documentation/kernel/ioregistryentry/1437706-frompath)

# fromPath

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IORegistryEntry> fromPath(const char *path, const IORegistryPlane *plane, char *residualPath, int *residualLength, IORegistryEntry *fromEntry);
```
