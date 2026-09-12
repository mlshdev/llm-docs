> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mprotect_t/address](https://developer.apple.com/documentation/endpointsecurity/es_event_mprotect_t/address)

# address (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The starting memory address to protect.

## Declaration

```swift
var address: user_addr_t
```

## See Also

### Inspecting Event Properties

- [size](size.md): The length of the address range to protect.
- [protection](protection.md): The protection to apply to the memory-mapped range.
- [reserved](reserved.md): An unused field reserved for future use.

# address (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The starting memory address to protect.

## Declaration

```objectivec
user_addr_t address;
```

## See Also

### Inspecting Event Properties

- [size](size.md): The length of the address range to protect.
- [protection](protection.md): The protection to apply to the memory-mapped range.
- [reserved](reserved.md): An unused field reserved for future use.
