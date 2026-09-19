> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osarray/getcapacity

# getCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns count of currently allocated capacity for members in array.

## Declaration

```objectivec
virtual uint32_t getCapacity() const;
```

<a id="return-value"></a>

## Return Value

Capacity for members in array.

## See Also

### Inspecting an Array

- [getCount](getcount.md): Returns count of members in array.
- [ensureCapacity](ensurecapacity.md): Allocates capacity for members in array.
- [OSArrayGetCount](../osarraygetcount.md)
