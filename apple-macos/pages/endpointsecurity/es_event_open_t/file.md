> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_open_t/file

# file (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to open.

## Declaration

```swift
var file: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [fflag](fflag.md): The file-opening mask as applied by the kernel.
- [reserved](reserved.md): An unused field reserved for future use.

# file (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to open.

## Declaration

```objectivec
es_file_t * file;
```

## See Also

### Inspecting Event Properties

- [fflag](fflag.md): The file-opening mask as applied by the kernel.
- [reserved](reserved.md): An unused field reserved for future use.
