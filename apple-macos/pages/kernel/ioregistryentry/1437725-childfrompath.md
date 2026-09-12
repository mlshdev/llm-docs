> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryentry/1437725-childfrompath](https://developer.apple.com/documentation/kernel/ioregistryentry/1437725-childfrompath)

# childFromPath

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual OSPtr<IORegistryEntry> childFromPath(const char *path, const IORegistryPlane *plane, char *residualPath, int *residualLength);
```
