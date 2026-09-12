> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_rename_t/reserved](https://developer.apple.com/documentation/endpointsecurity/es_event_rename_t/reserved)

# reserved (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file to rename.
- [destination](destination.md): The destination of the rename operation.
- [destination_type](destination_type.md): A property that indicates whether the destination is a new path or an existing file.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.

# reserved (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```objectivec
uint8_t reserved[64];
```

## See Also

### Inspecting Event Properties

- [source](source.md): The source file to rename.
- [destination](destination.md): The destination of the rename operation.
- [destination_type](destination_type.md): A property that indicates whether the destination is a new path or an existing file.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
