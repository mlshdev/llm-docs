> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osnumber/unsigned32bitvalue

# unsigned32BitValue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the value of the OSNumber as a uint32_t value.

## Declaration

```objectivec
uint32_t unsigned32BitValue() const;
```

<a id="return-value"></a>

## Return Value

Returns the value of the OSNumber as a uint32_t value.

## See Also

### Getting Integer Values

- [unsigned8BitValue](unsigned8bitvalue.md): Returns the value of the OSNumber as a uint8_t value.
- [unsigned16BitValue](unsigned16bitvalue.md): Returns the value of the OSNumber as a uint16_t value.
- [unsigned64BitValue](unsigned64bitvalue.md): Returns the value of the OSNumber as a uint64_t value.
- [OSNumberGetUInt64Value](../osnumbergetuint64value.md)
