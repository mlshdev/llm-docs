> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_bind_t/dir

# dir (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory containing the socket file.

## Declaration

```swift
var dir: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [filename](filename.md): The name of the socket file.
- [mode](mode.md): The mode of the socket file.
- [reserved](reserved.md): An unused field reserved for future use.

# dir (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory containing the socket file.

## Declaration

```objectivec
es_file_t * dir;
```

## See Also

### Inspecting Event Properties

- [filename](filename.md): The name of the socket file.
- [mode](mode.md): The mode of the socket file.
- [reserved](reserved.md): An unused field reserved for future use.
