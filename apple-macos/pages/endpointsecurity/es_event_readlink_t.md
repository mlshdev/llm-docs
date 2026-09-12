> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_readlink_t](https://developer.apple.com/documentation/endpointsecurity/es_event_readlink_t)

# es_event_readlink_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the reading of a symbolic link.

## Declaration

```swift
struct es_event_readlink_t
```

## Topics

### Inspecting Event Properties

- [source](es_event_readlink_t/source.md): The source file pointed to by the link.
- [reserved](es_event_readlink_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(source:reserved:)](es_event_readlink_t/init%28source_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Link Event Types

- [es_event_link_t](es_event_link_t.md): A type for an event that indicates the creation of a hard link.
- [es_event_unlink_t](es_event_unlink_t.md): A type for an event that indicates the deletion of a file.

# es_event_readlink_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the reading of a symbolic link.

## Declaration

```objectivec
typedef struct { ... } es_event_readlink_t;
```

## Topics

### Inspecting Event Properties

- [source](es_event_readlink_t/source.md): The source file pointed to by the link.
- [reserved](es_event_readlink_t/reserved.md): An unused field reserved for future use.

## See Also

### Link Event Types

- [es_event_link_t](es_event_link_t.md): A type for an event that indicates the creation of a hard link.
- [es_event_unlink_t](es_event_unlink_t.md): A type for an event that indicates the deletion of a file.
