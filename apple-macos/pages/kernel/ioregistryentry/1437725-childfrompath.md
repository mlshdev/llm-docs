> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioregistryentry/1437725-childfrompath

# childFromPath

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual OSPtr<IORegistryEntry> childFromPath(const char *path, const IORegistryPlane *plane, char *residualPath, int *residualLength);
```
