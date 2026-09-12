> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_link_t](https://developer.apple.com/documentation/endpointsecurity/es_event_link_t)

# es_event_link_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the creation of a hard link.

## Declaration

```swift
struct es_event_link_t
```

## Topics

### Inspecting Event Properties

- [source](es_event_link_t/source.md): The source file for the link.
- [target_dir](es_event_link_t/target_dir.md): The directory that contains the newly-created link.
- [target_filename](es_event_link_t/target_filename.md): The file name of the symbolic link.
- [reserved](es_event_link_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(source:target_dir:target_filename:reserved:)](es_event_link_t/init%28source_target_dir_target_filename_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Link Event Types

- [es_event_readlink_t](es_event_readlink_t.md): A type for an event that indicates the reading of a symbolic link.
- [es_event_unlink_t](es_event_unlink_t.md): A type for an event that indicates the deletion of a file.

# es_event_link_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the creation of a hard link.

## Declaration

```objectivec
typedef struct { ... } es_event_link_t;
```

## Topics

### Inspecting Event Properties

- [source](es_event_link_t/source.md): The source file for the link.
- [target_dir](es_event_link_t/target_dir.md): The directory that contains the newly-created link.
- [target_filename](es_event_link_t/target_filename.md): The file name of the symbolic link.
- [reserved](es_event_link_t/reserved.md): An unused field reserved for future use.

## See Also

### Link Event Types

- [es_event_readlink_t](es_event_readlink_t.md): A type for an event that indicates the reading of a symbolic link.
- [es_event_unlink_t](es_event_unlink_t.md): A type for an event that indicates the deletion of a file.
