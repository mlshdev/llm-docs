> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471577-disk_cache_size_selector](https://developer.apple.com/documentation/coreservices/1471577-disk_cache_size_selector)

# Disk Cache Size Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies size information for the disk cache buffer.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltDiskCacheSize](1471577-disk_cache_size_selector/gestaltdiskcachesize.md): A selector that you pass to the `Gestalt` function. If the function returns `noErr`, the `response` parameter contains the size of the disk cache’s buffer. See the Gestalt Manager Reference for more information on the `Gestalt` function.
