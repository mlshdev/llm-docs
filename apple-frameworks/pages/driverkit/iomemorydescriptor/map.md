> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorydescriptor/map](https://developer.apple.com/documentation/driverkit/iomemorydescriptor/map)

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
