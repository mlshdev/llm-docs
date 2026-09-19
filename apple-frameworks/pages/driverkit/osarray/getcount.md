> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osarray/getcount

# getCount

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns count of members in array.

## Declaration

```objectivec
virtual uint32_t getCount() const;
```

<a id="return-value"></a>

## Return Value

Count of members in array.

## See Also

### Inspecting an Array

- [getCapacity](getcapacity.md): Returns count of currently allocated capacity for members in array.
- [ensureCapacity](ensurecapacity.md): Allocates capacity for members in array.
- [OSArrayGetCount](../osarraygetcount.md)
