> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180813-getcount](https://developer.apple.com/documentation/kernel/osarray/3180813-getcount)

# getCount

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns count of members in array.

## Declaration

```objectivec
virtual uint32_t getCount(void);
```

```objectivec
virtual unsigned int getCount(void);
```

<a id="return_value"></a>

## Return Value

Count of members in array.

## See Also

### Inspecting an Array

- [getCapacity](3180812-getcapacity.md): Returns count of currently allocated capacity for members in array.
- [ensureCapacity](3180809-ensurecapacity.md): Allocates capacity for members in array.
