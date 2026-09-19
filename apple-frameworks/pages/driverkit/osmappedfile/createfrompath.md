> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osmappedfile/createfrompath

# createFromPath

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t createFromPath(const char *path, uint64_t options, size_t minGuardSize, OSMappedFile **outputMappedFile);
```
