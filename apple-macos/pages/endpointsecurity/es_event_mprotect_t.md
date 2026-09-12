> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mprotect_t](https://developer.apple.com/documentation/endpointsecurity/es_event_mprotect_t)

# es_event_mprotect_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates a change to protection of memory-mapped pages.

## Declaration

```swift
struct es_event_mprotect_t
```

## Topics

### Inspecting Event Properties

- [address](es_event_mprotect_t/address.md): The starting memory address to protect.
- [size](es_event_mprotect_t/size.md): The length of the address range to protect.
- [protection](es_event_mprotect_t/protection.md): The protection to apply to the memory-mapped range.
- [reserved](es_event_mprotect_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_mprotect_t/init%28%29.md)
- [init(protection:address:size:reserved:)](es_event_mprotect_t/init%28protection_address_size_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Memory Mapping Event Types

- [es_event_mmap_t](es_event_mmap_t.md): A type for an event that indicates the mapping of memory to a file.

# es_event_mprotect_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates a change to protection of memory-mapped pages.

## Declaration

```objectivec
typedef struct { ... } es_event_mprotect_t;
```

## Topics

### Inspecting Event Properties

- [address](es_event_mprotect_t/address.md): The starting memory address to protect.
- [size](es_event_mprotect_t/size.md): The length of the address range to protect.
- [protection](es_event_mprotect_t/protection.md): The protection to apply to the memory-mapped range.
- [reserved](es_event_mprotect_t/reserved.md): An unused field reserved for future use.

## See Also

### Memory Mapping Event Types

- [es_event_mmap_t](es_event_mmap_t.md): A type for an event that indicates the mapping of memory to a file.
