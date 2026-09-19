> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_setmode_t/target

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file of the event.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [mode](mode.md): The mode to set on the file.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file of the event.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [mode](mode.md): The mode to set on the file.
- [reserved](reserved.md): An unused field reserved for future use.
