> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_uipc_connect_t/file](https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_connect_t/file)

# file (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The socket file bound to the socket.

## Declaration

```swift
var file: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [domain](domain.md): The communications domain of the socket.
- [type](type.md): The type of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.

# file (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The socket file bound to the socket.

## Declaration

```objectivec
es_file_t * file;
```

## See Also

### Inspecting Event Properties

- [domain](domain.md): The communications domain of the socket.
- [type](type.md): The type of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.
