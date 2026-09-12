> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_uipc_connect_t/domain](https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_connect_t/domain)

# domain (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The communications domain of the socket.

## Declaration

```swift
var domain: Int32
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a list of available domain values.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [type](type.md): The type of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.

# domain (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The communications domain of the socket.

## Declaration

```objectivec
int domain;
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a list of available domain values.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [type](type.md): The type of the socket.
- [protocol](protocol.md): The protocol of the socket.
- [reserved](reserved.md): An unused field reserved for future use.
