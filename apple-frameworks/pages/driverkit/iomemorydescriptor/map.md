> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iomemorydescriptor/map

# Map

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Maps memory internally.

## Declaration

```objectivec
kern_return_t Map(uint64_t options, uint64_t address, uint64_t length, uint64_t alignment, uint64_t *returnAddress, uint64_t *returnLength);
```
