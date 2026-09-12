> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_rename_t/destination_type](https://developer.apple.com/documentation/endpointsecurity/es_event_rename_t/destination_type)

# destination_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A property that indicates whether the destination is a new path or an existing file.

## Declaration

```swift
var destination_type: es_destination_type_t
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how to access the [destination](destination.md) field.

## See Also

### Inspecting Event Properties

- [source](source.md): The source file to rename.
- [destination](destination.md): The destination of the rename operation.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved](reserved.md): An unused field reserved for future use.

# destination_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A property that indicates whether the destination is a new path or an existing file.

## Declaration

```objectivec
es_destination_type_t destination_type;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how to access the [destination](destination.md) field.

## See Also

### Inspecting Event Properties

- [source](source.md): The source file to rename.
- [destination](destination.md): The destination of the rename operation.
- [es_destination_type_t](../es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved](reserved.md): An unused field reserved for future use.
