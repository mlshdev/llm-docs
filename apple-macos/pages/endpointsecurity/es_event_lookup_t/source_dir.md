> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_lookup_t/source_dir

# source_dir (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source directory to look up.

## Declaration

```swift
var source_dir: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [relative_target](relative_target.md): The filename to look up.
- [reserved](reserved.md): An unused field reserved for future use.

# source_dir (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source directory to look up.

## Declaration

```objectivec
es_file_t * source_dir;
```

## See Also

### Inspecting Event Properties

- [relative_target](relative_target.md): The filename to look up.
- [reserved](reserved.md): An unused field reserved for future use.
