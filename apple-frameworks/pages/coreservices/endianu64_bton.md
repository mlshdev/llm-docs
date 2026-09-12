> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/endianu64_bton](https://developer.apple.com/documentation/coreservices/endianu64_bton)

# EndianU64_BtoN

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Converts an unsigned 64-bit big-endian value to the equivalentvalue in the computer’s native format.

## Declaration

```objectivec
#define EndianU64_BtoN(value)
```

## Parameters

- `value`: An unsigned 64-bit big-endian value.

<a id="return_value"></a>

## Return Value

The equivalent valuein the computer’s native format.

## See Also

### Converting from Big-Endian to Native Format

- [EndianS16_BtoN](endians16_bton.md): Converts a signed 16-bit big-endian value to the equivalentvalue in the computer’s native format.
- [EndianS32_BtoN](endians32_bton.md): Converts a signed 32-bit big-endian value to the equivalentvalue in the computer’s native format.
- [EndianS64_BtoN](endians64_bton.md): Converts a signed 64-bit big-endian value to the equivalentvalue in the computer’s native format.
- [EndianU16_BtoN](endianu16_bton.md): Converts an unsigned 16-bit big-endian value to the equivalentvalue in the computer’s native format.
- [EndianU32_BtoN](endianu32_bton.md): Converts an unsigned 32-bit big-endian value to the equivalentvalue in the computer’s native format.
