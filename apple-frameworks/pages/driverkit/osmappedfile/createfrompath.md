> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osmappedfile/createfrompath](https://developer.apple.com/documentation/driverkit/osmappedfile/createfrompath)

# createFromPath

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t createFromPath(const char *path, uint64_t options, size_t minGuardSize, OSMappedFile **outputMappedFile);
```
