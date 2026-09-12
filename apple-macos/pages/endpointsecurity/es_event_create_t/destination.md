> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_create_t/destination](https://developer.apple.com/documentation/endpointsecurity/es_event_create_t/destination)

# destination (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file system destination of the created file.

## Declaration

```swift
var destination: es_event_create_t.__Unnamed_union_destination
```

<a id="Discussion"></a>

## Discussion

To parse this `union`, check the [destination_type](destination_type.md) to determine whether the file already exists:

- If the [destination_type](destination_type.md) is [ES_DESTINATION_TYPE_EXISTING_FILE](../es_destination_type_existing_file.md), the union contains an [es_file_t](../es_file_t.md) member called `existing_file`.
- If the [destination_type](destination_type.md) is [ES_DESTINATION_TYPE_NEW_PATH](../es_destination_type_new_path.md), the union contains a `struct` called `new_path`, indicating the file’s proposed destination. The structure consists of an [es_file_t](../es_file_t.md) called `dir` for the parent directory, an [es_string_token_t](../es_string_token_t.md) called `filename`, and a [mode_t](../../kernel/mode_t.md) called `mode`.

## See Also

### Inspecting Event Properties

- [destination_type](destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved2](reserved2.md): An unused field reserved for future use.

# destination (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file system destination of the created file.

## Declaration

```objectivec
union { ... } destination;
```

<a id="Discussion"></a>

## Discussion

To parse this `union`, check the [destination_type](destination_type.md) to determine whether the file already exists:

- If the [destination_type](destination_type.md) is [ES_DESTINATION_TYPE_EXISTING_FILE](../es_destination_type_existing_file.md), the union contains an [es_file_t](../es_file_t.md) member called `existing_file`.
- If the [destination_type](destination_type.md) is [ES_DESTINATION_TYPE_NEW_PATH](../es_destination_type_new_path.md), the union contains a `struct` called `new_path`, indicating the file’s proposed destination. The structure consists of an [es_file_t](../es_file_t.md) called `dir` for the parent directory, an [es_string_token_t](../es_string_token_t.md) called `filename`, and a [mode_t](../../kernel/mode_t.md) called `mode`.

## Topics

### Instance Properties

- [existing_file](destination/existing_file.md)
- [new_path](destination/new_path.md)

## See Also

### Inspecting Event Properties

- [destination_type](destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved2](reserved2.md): An unused field reserved for future use.
