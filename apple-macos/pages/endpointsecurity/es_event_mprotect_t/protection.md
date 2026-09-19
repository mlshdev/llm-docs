> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_mprotect_t/protection

# protection (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The protection to apply to the memory-mapped range.

## Declaration

```swift
var protection: Int32
```

## See Also

### Inspecting Event Properties

- [address](address.md): The starting memory address to protect.
- [size](size.md): The length of the address range to protect.
- [reserved](reserved.md): An unused field reserved for future use.

# protection (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The protection to apply to the memory-mapped range.

## Declaration

```objectivec
int32_t protection;
```

## See Also

### Inspecting Event Properties

- [address](address.md): The starting memory address to protect.
- [size](size.md): The length of the address range to protect.
- [reserved](reserved.md): An unused field reserved for future use.
