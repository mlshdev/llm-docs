> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osarray/3180809-ensurecapacity

# ensureCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates capacity for members in array.

## Declaration

```objectivec
virtual uint32_t ensureCapacity(uint32_t newCapacity);
```

```objectivec
virtual unsigned int ensureCapacity(unsigned int newCapacity);
```

## Parameters

- `newCapacity`: Count of allocated capacity for members in array.

<a id="return_value"></a>

## Return Value

New count of capacity for members in array, may return prior capacity on failure.

## See Also

### Inspecting an Array

- [getCount](3180813-getcount.md): Returns count of members in array.
- [getCapacity](3180812-getcapacity.md): Returns count of currently allocated capacity for members in array.
