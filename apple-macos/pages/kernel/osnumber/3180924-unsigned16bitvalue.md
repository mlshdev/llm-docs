> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osnumber/3180924-unsigned16bitvalue

# unsigned16BitValue

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the value of the OSNumber as a uint16_t value.

## Declaration

```objectivec
uint16_t unsigned16BitValue(void);
```

```objectivec
virtual unsigned short unsigned16BitValue(void);
```

<a id="return_value"></a>

## Return Value

Returns the value of the OSNumber as a uint16_t value.

## See Also

### Getting Integer Values

- [unsigned8BitValue](3180927-unsigned8bitvalue.md): Returns the value of the OSNumber as a uint8_t value.
- [unsigned32BitValue](3180925-unsigned32bitvalue.md): Returns the value of the OSNumber as a uint32_t value.
- [unsigned64BitValue](3180926-unsigned64bitvalue.md): Returns the value of the OSNumber as a uint64_t value.
