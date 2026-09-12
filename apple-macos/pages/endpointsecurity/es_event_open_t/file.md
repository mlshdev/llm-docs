> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_open_t/file](https://developer.apple.com/documentation/endpointsecurity/es_event_open_t/file)

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
