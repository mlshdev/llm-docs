> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osarraygetcount

# OSArrayGetCount

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
uint32_t OSArrayGetCount(OSArrayPtr obj);
```

## See Also

### Inspecting an Array

- [getCount](osarray/getcount.md): Returns count of members in array.
- [getCapacity](osarray/getcapacity.md): Returns count of currently allocated capacity for members in array.
- [ensureCapacity](osarray/ensurecapacity.md): Allocates capacity for members in array.
