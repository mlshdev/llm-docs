> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/ensurecapacity](https://developer.apple.com/documentation/driverkit/osarray/ensurecapacity)

# ensureCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates capacity for members in array.

## Declaration

```objectivec
virtual uint32_t ensureCapacity(uint32_t newCapacity);
```

## Parameters

- `newCapacity`: Count of allocated capacity for members in array.

<a id="return-value"></a>

## Return Value

New count of capacity for members in array, may return prior capacity on failure.

## See Also

### Inspecting an Array

- [getCount](getcount.md): Returns count of members in array.
- [getCapacity](getcapacity.md): Returns count of currently allocated capacity for members in array.
- [OSArrayGetCount](../osarraygetcount.md)
