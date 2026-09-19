> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioregistryentry/1437706-frompath

# fromPath

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IORegistryEntry> fromPath(const char *path, const IORegistryPlane *plane, char *residualPath, int *residualLength, IORegistryEntry *fromEntry);
```
