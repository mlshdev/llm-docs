> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_check_t/type](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_check_t/type)

# type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of call number used to check the access on the target process.

## Declaration

```swift
var type: es_proc_check_type_t
```

## See Also

### Inspecting Event Properties

- [flavor](flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](../es_event_proc_check_t.md).
- [target](target.md): The process targeted by this event.
- [es_proc_check_type_t](../es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](reserved.md): An unused field reserved for future use.

# type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of call number used to check the access on the target process.

## Declaration

```objectivec
es_proc_check_type_t type;
```

## See Also

### Inspecting Event Properties

- [flavor](flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](../es_event_proc_check_t.md).
- [target](target.md): The process targeted by this event.
- [es_proc_check_type_t](../es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](reserved.md): An unused field reserved for future use.
