> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/endian16_swap

# Endian16_Swap

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Macro  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Changes the endian format of an unsigned 16-bit integer.

## Declaration

```objectivec
#define Endian16_Swap(value)
```

## Parameters

- `value`: An unsigned 16-bit integer input.

<a id="return_value"></a>

## Return Value

The unsigned 16-bitinteger result.

## See Also

### Changing the Endian Format

- [Endian32_Swap](endian32_swap.md): Changes the endian format of an unsigned 32-bit integer.
- [Endian64_Swap](endian64_swap.md): Changes the endian format of an unsigned 64-bit integer.
