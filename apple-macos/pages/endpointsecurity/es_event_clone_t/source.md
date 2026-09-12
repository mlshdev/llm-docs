> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_clone_t/source](https://developer.apple.com/documentation/endpointsecurity/es_event_clone_t/source)

# source (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to clone.

## Declaration

```swift
var source: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [target_dir](target_dir.md): The directory that contains the cloned file.
- [target_name](target_name.md): The name of the newly cloned file.
- [reserved](reserved.md): An unused field reserved for future use.

# source (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file to clone.

## Declaration

```objectivec
es_file_t * source;
```

## See Also

### Inspecting Event Properties

- [target_dir](target_dir.md): The directory that contains the cloned file.
- [target_name](target_name.md): The name of the newly cloned file.
- [reserved](reserved.md): An unused field reserved for future use.
