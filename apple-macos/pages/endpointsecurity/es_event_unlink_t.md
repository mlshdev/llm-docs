> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_unlink_t](https://developer.apple.com/documentation/endpointsecurity/es_event_unlink_t)

# es_event_unlink_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the deletion of a file.

## Declaration

```swift
struct es_event_unlink_t
```

## Topics

### Inspecting Event Properties

- [target](es_event_unlink_t/target.md): The file to unlink.
- [parent_dir](es_event_unlink_t/parent_dir.md): The directory that contains the file to unlink.
- [reserved](es_event_unlink_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(target:parent_dir:reserved:)](es_event_unlink_t/init%28target_parent_dir_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Link Event Types

- [es_event_link_t](es_event_link_t.md): A type for an event that indicates the creation of a hard link.
- [es_event_readlink_t](es_event_readlink_t.md): A type for an event that indicates the reading of a symbolic link.

# es_event_unlink_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the deletion of a file.

## Declaration

```objectivec
typedef struct { ... } es_event_unlink_t;
```

## Topics

### Inspecting Event Properties

- [target](es_event_unlink_t/target.md): The file to unlink.
- [parent_dir](es_event_unlink_t/parent_dir.md): The directory that contains the file to unlink.
- [reserved](es_event_unlink_t/reserved.md): An unused field reserved for future use.

## See Also

### Link Event Types

- [es_event_link_t](es_event_link_t.md): A type for an event that indicates the creation of a hard link.
- [es_event_readlink_t](es_event_readlink_t.md): A type for an event that indicates the reading of a symbolic link.
