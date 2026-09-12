> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mmap_t](https://developer.apple.com/documentation/endpointsecurity/es_event_mmap_t)

# es_event_mmap_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the mapping of memory to a file.

## Declaration

```swift
struct es_event_mmap_t
```

## Topics

### Inspecting Event Properties

- [source](es_event_mmap_t/source.md): The file to map memory into.
- [file_pos](es_event_mmap_t/file_pos.md): The offset into the memory-map file.
- [flags](es_event_mmap_t/flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](es_event_mmap_t/max_protection.md): The maximum value you can use for protection flags.
- [protection](es_event_mmap_t/protection.md): Options that affect the protection of mapped memory pages.
- [reserved](es_event_mmap_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(protection:max_protection:flags:file_pos:source:reserved:)](es_event_mmap_t/init%28protection_max_protection_flags_file_pos_source_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Memory Mapping Event Types

- [es_event_mprotect_t](es_event_mprotect_t.md): A type for an event that indicates a change to protection of memory-mapped pages.

# es_event_mmap_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the mapping of memory to a file.

## Declaration

```objectivec
typedef struct { ... } es_event_mmap_t;
```

## Topics

### Inspecting Event Properties

- [source](es_event_mmap_t/source.md): The file to map memory into.
- [file_pos](es_event_mmap_t/file_pos.md): The offset into the memory-map file.
- [flags](es_event_mmap_t/flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](es_event_mmap_t/max_protection.md): The maximum value you can use for protection flags.
- [protection](es_event_mmap_t/protection.md): Options that affect the protection of mapped memory pages.
- [reserved](es_event_mmap_t/reserved.md): An unused field reserved for future use.

## See Also

### Memory Mapping Event Types

- [es_event_mprotect_t](es_event_mprotect_t.md): A type for an event that indicates a change to protection of memory-mapped pages.
