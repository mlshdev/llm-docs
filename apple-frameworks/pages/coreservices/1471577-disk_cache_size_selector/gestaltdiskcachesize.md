> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471577-disk_cache_size_selector/gestaltdiskcachesize](https://developer.apple.com/documentation/coreservices/1471577-disk_cache_size_selector/gestaltdiskcachesize)

# gestaltDiskCacheSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A selector that you pass to the `Gestalt` function. If the function returns `noErr`, the `response` parameter contains the size of the disk cache’s buffer. See the Gestalt Manager Reference for more information on the `Gestalt` function.

## Declaration

```objectivec
gestaltDiskCacheSize = 'dcsz'
```
