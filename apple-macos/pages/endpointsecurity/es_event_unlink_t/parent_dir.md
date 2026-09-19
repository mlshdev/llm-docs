> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_unlink_t/parent_dir

# parent_dir (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the file to unlink.

## Declaration

```swift
var parent_dir: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file to unlink.
- [reserved](reserved.md): An unused field reserved for future use.

# parent_dir (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the file to unlink.

## Declaration

```objectivec
es_file_t * parent_dir;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file to unlink.
- [reserved](reserved.md): An unused field reserved for future use.
