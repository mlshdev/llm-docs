> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_link_t/target_filename

# target_filename (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file name of the symbolic link.

## Declaration

```swift
var target_filename: es_string_token_t
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file for the link.
- [target_dir](target_dir.md): The directory that contains the newly-created link.
- [reserved](reserved.md): An unused field reserved for future use.

# target_filename (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file name of the symbolic link.

## Declaration

```objectivec
es_string_token_t target_filename;
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file for the link.
- [target_dir](target_dir.md): The directory that contains the newly-created link.
- [reserved](reserved.md): An unused field reserved for future use.
