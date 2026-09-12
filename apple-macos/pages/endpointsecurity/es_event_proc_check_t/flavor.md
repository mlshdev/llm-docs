> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_check_t/flavor](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_check_t/flavor)

# flavor (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A representation of the information sought by a process based on the type member of [es_event_proc_check_t](../es_event_proc_check_t.md).

## Declaration

```swift
var flavor: Int32
```

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted by this event.
- [type](type.md): The type of call number used to check the access on the target process.
- [es_proc_check_type_t](../es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](reserved.md): An unused field reserved for future use.

# flavor (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A representation of the information sought by a process based on the type member of [es_event_proc_check_t](../es_event_proc_check_t.md).

## Declaration

```objectivec
int flavor;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted by this event.
- [type](type.md): The type of call number used to check the access on the target process.
- [es_proc_check_type_t](../es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](reserved.md): An unused field reserved for future use.
