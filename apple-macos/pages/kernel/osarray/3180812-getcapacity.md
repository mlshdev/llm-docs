> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180812-getcapacity](https://developer.apple.com/documentation/kernel/osarray/3180812-getcapacity)

# getCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns count of currently allocated capacity for members in array.

## Declaration

```objectivec
virtual uint32_t getCapacity(void);
```

```objectivec
virtual unsigned int getCapacity(void);
```

<a id="return_value"></a>

## Return Value

Capacity for members in array.

## See Also

### Inspecting an Array

- [getCount](3180813-getcount.md): Returns count of members in array.
- [ensureCapacity](3180809-ensurecapacity.md): Allocates capacity for members in array.
