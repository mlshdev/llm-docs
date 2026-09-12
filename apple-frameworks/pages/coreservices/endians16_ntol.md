> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/endians16_ntol](https://developer.apple.com/documentation/coreservices/endians16_ntol)

# EndianS16_NtoL

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Converts a signed 16-bit value in the computer’s nativeformat to the equivalent little-endian value.

## Declaration

```objectivec
#define EndianS16_NtoL(value)
```

## Parameters

- `value`: A signed 16-bit value in the computer’s native format.

<a id="return_value"></a>

## Return Value

The equivalent little-endianvalue.

## See Also

### Converting from Native Format to Little-Endian Format

- [EndianS32_NtoL](endians32_ntol.md): Converts a signed 32-bit value in the computer’s nativeformat to the equivalent little-endian value.
- [EndianS64_NtoL](endians64_ntol.md): Converts a signed 64-bit value in the computer’s nativeformat to the equivalent little-endian value.
- [EndianU16_NtoL](endianu16_ntol.md): Converts an unsigned 16-bit value in the computer’snative format to the equivalent little-endian value.
- [EndianU32_NtoL](endianu32_ntol.md): Converts an unsigned 32-bit value in the computer’snative format to the equivalent little-endian value.
- [EndianU64_NtoL](endianu64_ntol.md): Converts an unsigned 64-bit value in the computer’snative format to the equivalent little-endian value.
