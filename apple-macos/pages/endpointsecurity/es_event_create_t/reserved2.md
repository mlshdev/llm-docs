> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_create_t/reserved2](https://developer.apple.com/documentation/endpointsecurity/es_event_create_t/reserved2)

# reserved2 (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```swift
var reserved2: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Inspecting Event Properties

- [destination](destination.md): The file system destination of the created file.
- [destination_type](destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.

# reserved2 (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```objectivec
uint8_t reserved2[16];
```

## See Also

### Inspecting Event Properties

- [destination](destination.md): The file system destination of the created file.
- [destination_type](destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
