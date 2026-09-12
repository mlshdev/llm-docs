> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osnumber/3180925-unsigned32bitvalue](https://developer.apple.com/documentation/kernel/osnumber/3180925-unsigned32bitvalue)

# unsigned32BitValue

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the value of the OSNumber as a uint32_t value.

## Declaration

```objectivec
uint32_t unsigned32BitValue(void);
```

```objectivec
virtual unsigned int unsigned32BitValue(void);
```

<a id="return_value"></a>

## Return Value

Returns the value of the OSNumber as a uint32_t value.

## See Also

### Getting Integer Values

- [unsigned8BitValue](3180927-unsigned8bitvalue.md): Returns the value of the OSNumber as a uint8_t value.
- [unsigned16BitValue](3180924-unsigned16bitvalue.md): Returns the value of the OSNumber as a uint16_t value.
- [unsigned64BitValue](3180926-unsigned64bitvalue.md): Returns the value of the OSNumber as a uint64_t value.
