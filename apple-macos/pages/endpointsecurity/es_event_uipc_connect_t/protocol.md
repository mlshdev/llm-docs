> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_uipc_connect_t/protocol

# protocol (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The protocol of the socket.

## Declaration

```swift
var `protocol`: Int32
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a discussion of the `protocol` parameter.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [domain](domain.md): The communications domain of the socket.
- [type](type.md): The type of the socket.
- [reserved](reserved.md): An unused field reserved for future use.

# protocol (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The protocol of the socket.

## Declaration

```objectivec
int protocol;
```

<a id="Discussion"></a>

## Discussion

See the man page for `socket(2)` for a discussion of the `protocol` parameter.

## See Also

### Inspecting Event Properties

- [file](file.md): The socket file bound to the socket.
- [domain](domain.md): The communications domain of the socket.
- [type](type.md): The type of the socket.
- [reserved](reserved.md): An unused field reserved for future use.
