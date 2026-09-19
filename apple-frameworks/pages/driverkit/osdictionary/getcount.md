> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdictionary/getcount

# getCount

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns count of members in dictionary.

## Declaration

```objectivec
virtual uint32_t getCount() const;
```

<a id="return-value"></a>

## Return Value

Count of members in dictionary.

## See Also

### Inspecting a Dictionary

- [ensureCapacity](ensurecapacity.md): Allocates capacity for members in dictionary.
- [getCapacity](getcapacity.md): Returns count of currently allocated capacity for members in dictionary.
- [OSDictionaryGetCount](../osdictionarygetcount.md)
