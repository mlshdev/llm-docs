> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_destination_type_t](https://developer.apple.com/documentation/endpointsecurity/es_destination_type_t)

# es_destination_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that indicates how a file event presents its destination to the client.

## Declaration

```swift
struct es_destination_type_t
```

<a id="overview"></a>

## Overview

Use this type to determine how to parse file information in types like [es_event_create_t](es_event_create_t.md) and [es_event_rename_t](es_event_rename_t.md). Both of those types have a `destination` member, which is a `union` of either an existing file path or a parent directory and name of a potential file. To determine which member of the union to access, consult the event’s `destination_type` member, which is of this type.

## Topics

### Destination Types

- [ES_DESTINATION_TYPE_EXISTING_FILE](es_destination_type_existing_file.md): The destination is an existing file.
- [ES_DESTINATION_TYPE_NEW_PATH](es_destination_type_new_path.md): The destination is a path to a new location.

### Initializers

- [init(\_:)](es_destination_type_t/init%28__%29.md)
- [init(rawValue:)](es_destination_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_destination_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Event Properties

- [destination](es_event_create_t/destination.md): The file system destination of the created file.
- [destination_type](es_event_create_t/destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [reserved2](es_event_create_t/reserved2.md): An unused field reserved for future use.

# es_destination_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

A type that indicates how a file event presents its destination to the client.

## Declaration

```objectivec
typedef enum { ... } es_destination_type_t;
```

<a id="overview"></a>

## Overview

Use this type to determine how to parse file information in types like [es_event_create_t](es_event_create_t.md) and [es_event_rename_t](es_event_rename_t.md). Both of those types have a `destination` member, which is a `union` of either an existing file path or a parent directory and name of a potential file. To determine which member of the union to access, consult the event’s `destination_type` member, which is of this type.

## Topics

### Destination Types

- [ES_DESTINATION_TYPE_EXISTING_FILE](es_destination_type_existing_file.md): The destination is an existing file.
- [ES_DESTINATION_TYPE_NEW_PATH](es_destination_type_new_path.md): The destination is a path to a new location.

## See Also

### Inspecting Event Properties

- [destination](es_event_create_t/destination.md): The file system destination of the created file.
- [destination_type](es_event_create_t/destination_type.md): The type of destination for the event, which can be either an existing file or information that describes a new file’s pending location.
- [reserved2](es_event_create_t/reserved2.md): An unused field reserved for future use.
