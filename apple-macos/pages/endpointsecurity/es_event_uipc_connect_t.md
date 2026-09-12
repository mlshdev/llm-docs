> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_uipc_connect_t](https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_connect_t)

# es_event_uipc_connect_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the connection of a socket.

## Declaration

```swift
struct es_event_uipc_connect_t
```

## Topics

### Inspecting Event Properties

- [file](es_event_uipc_connect_t/file.md): The socket file bound to the socket.
- [domain](es_event_uipc_connect_t/domain.md): The communications domain of the socket.
- [type](es_event_uipc_connect_t/type.md): The type of the socket.
- [protocol](es_event_uipc_connect_t/protocol.md): The protocol of the socket.
- [reserved](es_event_uipc_connect_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(file:domain:type:protocol:reserved:)](es_event_uipc_connect_t/init%28file_domain_type_protocol_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Socket Event Types

- [es_event_uipc_bind_t](es_event_uipc_bind_t.md): A type for an event that indicates the binding of a socket to a path.

# es_event_uipc_connect_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the connection of a socket.

## Declaration

```objectivec
typedef struct { ... } es_event_uipc_connect_t;
```

## Topics

### Inspecting Event Properties

- [file](es_event_uipc_connect_t/file.md): The socket file bound to the socket.
- [domain](es_event_uipc_connect_t/domain.md): The communications domain of the socket.
- [type](es_event_uipc_connect_t/type.md): The type of the socket.
- [protocol](es_event_uipc_connect_t/protocol.md): The protocol of the socket.
- [reserved](es_event_uipc_connect_t/reserved.md): An unused field reserved for future use.

## See Also

### Socket Event Types

- [es_event_uipc_bind_t](es_event_uipc_bind_t.md): A type for an event that indicates the binding of a socket to a path.
