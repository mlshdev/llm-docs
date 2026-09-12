> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/endians16_ntob](https://developer.apple.com/documentation/coreservices/endians16_ntob)

# EndianS16_NtoB

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Converts a signed 16-bit value in the computer’s nativeformat to the equivalent big-endian value.

## Declaration

```objectivec
#define EndianS16_NtoB(value)
```

## Parameters

- `value`: A signed 16-bit value in the computer’s native format.

<a id="return_value"></a>

## Return Value

The equivalent big-endianvalue.

## See Also

### Converting from Native Format to Big-Endian Format

- [EndianS32_NtoB](endians32_ntob.md): Converts a signed 32-bit value in the computer’s nativeformat to the equivalent big-endian value.
- [EndianS64_NtoB](endians64_ntob.md): Converts a signed 64-bit value in the computer’s nativeformat to the equivalent big-endian value.
- [EndianU16_NtoB](endianu16_ntob.md): Converts an unsigned 16-bit value in the computer’snative format to the equivalent big-endian value.
- [EndianU32_NtoB](endianu32_ntob.md): Converts an unsigned 32-bit value in the computer’snative format to the equivalent big-endian value.
- [EndianU64_NtoB](endianu64_ntob.md): Converts an unsigned 64-bit value in the computer’snative format to the equivalent big-endian value.
