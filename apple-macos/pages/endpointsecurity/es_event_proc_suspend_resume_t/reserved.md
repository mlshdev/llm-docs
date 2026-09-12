> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_suspend_resume_t/reserved](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_suspend_resume_t/reserved)

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

- [target](target.md): The process targeted by this event.
- [type](type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.

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

- [target](target.md): The process targeted by this event.
- [type](type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
