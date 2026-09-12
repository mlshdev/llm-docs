> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mmap_t/max_protection](https://developer.apple.com/documentation/endpointsecurity/es_event_mmap_t/max_protection)

# max_protection (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The maximum value you can use for protection flags.

## Declaration

```swift
var max_protection: Int32
```

<a id="Discussion"></a>

## Discussion

This value uses the protection flags defined by `mmap(2)`, such as `PROT_READ` and `PROT_WRITE`. You can use the definitions for these flags found in `sys/mman.h` in the macOS SDK inside of the Xcode app bundle.

## See Also

### Inspecting Event Properties

- [source](source.md): The file to map memory into.
- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [protection](protection.md): Options that affect the protection of mapped memory pages.
- [reserved](reserved.md): An unused field reserved for future use.

# max_protection (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The maximum value you can use for protection flags.

## Declaration

```objectivec
int32_t max_protection;
```

<a id="Discussion"></a>

## Discussion

This value uses the protection flags defined by `mmap(2)`, such as `PROT_READ` and `PROT_WRITE`. You can use the definitions for these flags found in `sys/mman.h` in the macOS SDK inside of the Xcode app bundle.

## See Also

### Inspecting Event Properties

- [source](source.md): The file to map memory into.
- [file_pos](file_pos.md): The offset into the memory-map file.
- [flags](flags.md): Flags that affect the behavior of the memory mapping operation.
- [protection](protection.md): Options that affect the protection of mapped memory pages.
- [reserved](reserved.md): An unused field reserved for future use.
