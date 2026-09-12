> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_uipc_connect_t/type](https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_connect_t/type)

# type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the socket.

## Declaration

```swift
var type: Int32
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a list of available type values.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [domain](domain.md): The communications domain of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.

# type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the socket.

## Declaration

```objectivec
int type;
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a list of available type values.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [domain](domain.md): The communications domain of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.
