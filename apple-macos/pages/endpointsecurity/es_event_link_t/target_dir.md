> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_link_t/target_dir](https://developer.apple.com/documentation/endpointsecurity/es_event_link_t/target_dir)

# target_dir (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the newly-created link.

## Declaration

```swift
var target_dir: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file for the link.
- [target_filename](target_filename.md): The file name of the symbolic link.
- [reserved](reserved.md): An unused field reserved for future use.

# target_dir (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the newly-created link.

## Declaration

```objectivec
es_file_t * target_dir;
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file for the link.
- [target_filename](target_filename.md): The file name of the symbolic link.
- [reserved](reserved.md): An unused field reserved for future use.
