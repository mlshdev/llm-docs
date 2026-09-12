> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/endians32_ltob](https://developer.apple.com/documentation/coreservices/endians32_ltob)

# EndianS32_LtoB

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Converts a signed 32-bit little-endian value to the equivalentbig-endian value.

## Declaration

```objectivec
#define EndianS32_LtoB(value)
```

## Parameters

- `value`: A signed 32-bit little-endian value.

<a id="return_value"></a>

## Return Value

The equivalent big-endianvalue.

## See Also

### Converting From Little-Endian to Big-Endian Format

- [EndianS16_LtoB](endians16_ltob.md): Converts a signed 16-bit little-endian value to the equivalentbig-endian value.
- [EndianS64_LtoB](endians64_ltob.md): Converts a signed 64-bit little-endian value to the equivalentbig-endian value.
- [EndianU16_LtoB](endianu16_ltob.md): Converts an unsigned 16-bit little-endian value to theequivalent big-endian value.
- [EndianU32_LtoB](endianu32_ltob.md): Converts an unsigned 32-bit little-endian value to theequivalent big-endian value.
- [EndianU64_LtoB](endianu64_ltob.md): Converts an unsigned 64-bit little-endian value to theequivalent big-endian value.
