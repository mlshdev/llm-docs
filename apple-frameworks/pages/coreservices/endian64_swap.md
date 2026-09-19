> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/endian64_swap

# Endian64_Swap

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Changes the endian format of an unsigned 64-bit integer.

## Declaration

```objectivec
#define Endian64_Swap(value)
```

## Parameters

- `value`: An unsigned 64-bit integer input.

<a id="return_value"></a>

## Return Value

The unsigned 64-bitinteger result.

## See Also

### Changing the Endian Format

- [Endian16_Swap](endian16_swap.md): Changes the endian format of an unsigned 16-bit integer.
- [Endian32_Swap](endian32_swap.md): Changes the endian format of an unsigned 32-bit integer.
