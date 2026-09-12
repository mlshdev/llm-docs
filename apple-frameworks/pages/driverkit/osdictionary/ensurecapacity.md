> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/ensurecapacity](https://developer.apple.com/documentation/driverkit/osdictionary/ensurecapacity)

# ensureCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates capacity for members in dictionary.

## Declaration

```objectivec
virtual uint32_t ensureCapacity(uint32_t newCapacity);
```

## Parameters

- `newCapacity`: Count of allocated capacity for members in dictionary.

<a id="return-value"></a>

## Return Value

New count of capacity for members in dictionary, may return prior capacity on failure.

## See Also

### Inspecting a Dictionary

- [getCapacity](getcapacity.md): Returns count of currently allocated capacity for members in dictionary.
- [getCount](getcount.md): Returns count of members in dictionary.
- [OSDictionaryGetCount](../osdictionarygetcount.md)
