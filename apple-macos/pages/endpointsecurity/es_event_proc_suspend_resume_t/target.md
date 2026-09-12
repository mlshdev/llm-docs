> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_suspend_resume_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_suspend_resume_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process targeted by this event.

## Declaration

```swift
var target: UnsafeMutablePointer<es_process_t>?
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process targeted by this event.

## Declaration

```objectivec
es_process_t * target;
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](../es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](reserved.md): An unused field reserved for future use.
