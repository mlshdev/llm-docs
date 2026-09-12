> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_link_t/source](https://developer.apple.com/documentation/endpointsecurity/es_event_link_t/source)

# source (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file for the link.

## Declaration

```swift
var source: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [target_dir](target_dir.md): The directory that contains the newly-created link.
- [target_filename](target_filename.md): The file name of the symbolic link.
- [reserved](reserved.md): An unused field reserved for future use.

# source (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file for the link.

## Declaration

```objectivec
es_file_t * source;
```

## See Also

### Inspecting Event Properties

- [target_dir](target_dir.md): The directory that contains the newly-created link.
- [target_filename](target_filename.md): The file name of the symbolic link.
- [reserved](reserved.md): An unused field reserved for future use.
