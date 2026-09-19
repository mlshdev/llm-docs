> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_close_t/target

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to close.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [modified](modified.md): A Boolean value that indicates whether the file has modifications.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to close.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [modified](modified.md): A Boolean value that indicates whether the file has modifications.
