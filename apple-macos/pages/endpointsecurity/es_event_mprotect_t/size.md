> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_mprotect_t/size

# size (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The length of the address range to protect.

## Declaration

```swift
var size: user_size_t
```

## See Also

### Inspecting Event Properties

- [address](address.md): The starting memory address to protect.
- [protection](protection.md): The protection to apply to the memory-mapped range.
- [reserved](reserved.md): An unused field reserved for future use.

# size (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The length of the address range to protect.

## Declaration

```objectivec
user_size_t size;
```

## See Also

### Inspecting Event Properties

- [address](address.md): The starting memory address to protect.
- [protection](protection.md): The protection to apply to the memory-mapped range.
- [reserved](reserved.md): An unused field reserved for future use.
