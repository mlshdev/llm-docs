> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_suspend_resume_t/type](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_suspend_resume_t/type)

# type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of event: suspend, resume, or socket shutdown.

## Declaration

```swift
var type: es_proc_suspend_resume_type_t
```

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted by this event.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](reserved.md): An unused field reserved for future use.

# type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of event: suspend, resume, or socket shutdown.

## Declaration

```objectivec
es_proc_suspend_resume_type_t type;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The process targeted by this event.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](reserved.md): An unused field reserved for future use.
