> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osnumber/unsigned64bitvalue

# unsigned64BitValue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the value of the OSNumber as a uint64_t value.

## Declaration

```objectivec
uint64_t unsigned64BitValue() const;
```

<a id="return-value"></a>

## Return Value

Returns the value of the OSNumber as a uint64_t value.

## See Also

### Getting Integer Values

- [unsigned8BitValue](unsigned8bitvalue.md): Returns the value of the OSNumber as a uint8_t value.
- [unsigned16BitValue](unsigned16bitvalue.md): Returns the value of the OSNumber as a uint16_t value.
- [unsigned32BitValue](unsigned32bitvalue.md): Returns the value of the OSNumber as a uint32_t value.
- [OSNumberGetUInt64Value](../osnumbergetuint64value.md)
