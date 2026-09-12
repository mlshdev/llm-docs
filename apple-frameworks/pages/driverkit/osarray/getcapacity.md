> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/getcapacity](https://developer.apple.com/documentation/driverkit/osarray/getcapacity)

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
