> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/endians16_btol](https://developer.apple.com/documentation/coreservices/endians16_btol)

# EndianS16_BtoL

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Converts a signed 16-bit big-endian value to the equivalentlittle-endian value.

## Declaration

```objectivec
#define EndianS16_BtoL(value)
```

## Parameters

- `value`: A signed 16-bit big-endian value.

<a id="return_value"></a>

## Return Value

The equivalent little-endianvalue.

## See Also

### Converting from Big-Endian to Little-Endian Format

- [EndianS32_BtoL](endians32_btol.md): Converts a signed 32-bit big-endian value to the equivalentlittle-endian value.
- [EndianS64_BtoL](endians64_btol.md): Converts a signed 64-bit big-endian value to the equivalentlittle-endian value.
- [EndianU16_BtoL](endianu16_btol.md): Converts an unsigned 16-bit big-endian value to the equivalentlittle-endian value.
- [EndianU32_BtoL](endianu32_btol.md): Converts an unsigned 32-bit big-endian value to the equivalentlittle-endian value.
- [EndianU64_BtoL](endianu64_btol.md): Converts an unsigned 64-bit big-endian value to the equivalentlittle-endian value.
