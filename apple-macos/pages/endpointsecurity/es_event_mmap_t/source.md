> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mmap_t/source](https://developer.apple.com/documentation/endpointsecurity/es_event_mmap_t/source)

# source (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to map memory into.

## Declaration

```swift
var source: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](max_protection.md): The maximum value you can use for protection flags.
- [protection](protection.md): Options that affect the protection of mapped memory pages.
- [reserved](reserved.md): An unused field reserved for future use.

# source (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to map memory into.

## Declaration

```objectivec
es_file_t * source;
```

## See Also

### Inspecting Event Properties

- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [max_protection](max_protection.md): The maximum value you can use for protection flags.
- [protection](protection.md): Options that affect the protection of mapped memory pages.
- [reserved](reserved.md): An unused field reserved for future use.
