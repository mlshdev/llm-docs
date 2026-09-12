> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3180899-getcapacity](https://developer.apple.com/documentation/kernel/osdictionary/3180899-getcapacity)

# getCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns count of currently allocated capacity for members in dictionary.

## Declaration

```objectivec
virtual uint32_t getCapacity(void);
```

```objectivec
virtual unsigned int getCapacity(void);
```

<a id="return_value"></a>

## Return Value

Capacity for members in dictionary.

## See Also

### Inspecting a Dictionary

- [ensureCapacity](3180896-ensurecapacity.md): Allocates capacity for members in dictionary.
- [getCount](3180900-getcount.md): Returns count of members in dictionary.
