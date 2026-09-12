> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mmap_t/protection](https://developer.apple.com/documentation/endpointsecurity/es_event_mmap_t/protection)

# protection (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Options that affect the protection of mapped memory pages.

## Declaration

```swift
var protection: Int32
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to map memory into.
- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](max_protection.md): The maximum value you can use for protection flags.
- [reserved](reserved.md): An unused field reserved for future use.

# protection (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Options that affect the protection of mapped memory pages.

## Declaration

```objectivec
int32_t protection;
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to map memory into.
- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](max_protection.md): The maximum value you can use for protection flags.
- [reserved](reserved.md): An unused field reserved for future use.
