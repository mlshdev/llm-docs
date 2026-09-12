> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osnumber/3180927-unsigned8bitvalue](https://developer.apple.com/documentation/kernel/osnumber/3180927-unsigned8bitvalue)

# unsigned8BitValue

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the value of the OSNumber as a uint8_t value.

## Declaration

```objectivec
uint8_t unsigned8BitValue(void);
```

```objectivec
virtual unsigned char unsigned8BitValue(void);
```

<a id="return_value"></a>

## Return Value

Returns the value of the OSNumber as a uint8_t value.

## See Also

### Getting Integer Values

- [unsigned16BitValue](3180924-unsigned16bitvalue.md): Returns the value of the OSNumber as a uint16_t value.
- [unsigned32BitValue](3180925-unsigned32bitvalue.md): Returns the value of the OSNumber as a uint32_t value.
- [unsigned64BitValue](3180926-unsigned64bitvalue.md): Returns the value of the OSNumber as a uint64_t value.
