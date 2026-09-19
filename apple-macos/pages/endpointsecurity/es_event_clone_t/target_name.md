> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_clone_t/target_name

# target_name (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The name of the newly cloned file.

## Declaration

```swift
var target_name: es_string_token_t
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_dir](target_dir.md): The directory that contains the cloned file.
- [reserved](reserved.md): An unused field reserved for future use.

# target_name (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The name of the newly cloned file.

## Declaration

```objectivec
es_string_token_t target_name;
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_dir](target_dir.md): The directory that contains the cloned file.
- [reserved](reserved.md): An unused field reserved for future use.
