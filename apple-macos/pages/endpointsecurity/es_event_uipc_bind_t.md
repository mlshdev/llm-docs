> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_uipc_bind_t](https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_bind_t)

# es_event_uipc_bind_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the binding of a socket to a path.

## Declaration

```swift
struct es_event_uipc_bind_t
```

## Topics

### Inspecting Event Properties

- [dir](es_event_uipc_bind_t/dir.md): The directory containing the socket file.
- [filename](es_event_uipc_bind_t/filename.md): The name of the socket file.
- [mode](es_event_uipc_bind_t/mode.md): The mode of the socket file.
- [reserved](es_event_uipc_bind_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(dir:filename:mode:reserved:)](es_event_uipc_bind_t/init%28dir_filename_mode_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Socket Event Types

- [es_event_uipc_connect_t](es_event_uipc_connect_t.md): A type for an event that indicates the connection of a socket.

# es_event_uipc_bind_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the binding of a socket to a path.

## Declaration

```objectivec
typedef struct { ... } es_event_uipc_bind_t;
```

## Topics

### Inspecting Event Properties

- [dir](es_event_uipc_bind_t/dir.md): The directory containing the socket file.
- [filename](es_event_uipc_bind_t/filename.md): The name of the socket file.
- [mode](es_event_uipc_bind_t/mode.md): The mode of the socket file.
- [reserved](es_event_uipc_bind_t/reserved.md): An unused field reserved for future use.

## See Also

### Socket Event Types

- [es_event_uipc_connect_t](es_event_uipc_connect_t.md): A type for an event that indicates the connection of a socket.
