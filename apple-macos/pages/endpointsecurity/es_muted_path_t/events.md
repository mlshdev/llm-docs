> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_path_t/events](https://developer.apple.com/documentation/endpointsecurity/es_muted_path_t/events)

# events (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted event types.

## Declaration

```swift
var events: UnsafePointer<es_event_type_t>!
```

## See Also

### Accessing Muted Path Properties

- [type](type.md): The path type: prefix or literal.
- [es_mute_path_type_t](../es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](event_count.md): The number of elements in the muted events array.
- [path](path.md): The muted path.
- [es_string_token_t](../es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.

# events (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted event types.

## Declaration

```objectivec
const es_event_type_t * events;
```

## See Also

### Accessing Muted Path Properties

- [type](type.md): The path type: prefix or literal.
- [es_mute_path_type_t](../es_mute_path_type_t.md): The type of a path argument, such as a prefix or a path literal.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](event_count.md): The number of elements in the muted events array.
- [path](path.md): The muted path.
- [es_string_token_t](../es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.
