> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_fcntl_t/target

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The target file to modify.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [cmd](cmd.md): The file descriptor modification command.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The target file to modify.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [cmd](cmd.md): The file descriptor modification command.
- [reserved](reserved.md): An unused field reserved for future use.
