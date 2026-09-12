> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_create_t/destination_type](https://developer.apple.com/documentation/endpointsecurity/es_event_create_t/destination_type)

# destination_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.

## Declaration

```swift
var destination_type: es_destination_type_t
```

<a id="Discussion"></a>

## Discussion

Use the value of this member to parse the [destination](destination.md) union.

## See Also

### Inspecting Event Properties

- [destination](destination.md): The file system destination of the created file.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved2](reserved2.md): An unused field reserved for future use.

# destination_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.

## Declaration

```objectivec
es_destination_type_t destination_type;
```

<a id="Discussion"></a>

## Discussion

Use the value of this member to parse the [destination](destination.md) union.

## See Also

### Inspecting Event Properties

- [destination](destination.md): The file system destination of the created file.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved2](reserved2.md): An unused field reserved for future use.
