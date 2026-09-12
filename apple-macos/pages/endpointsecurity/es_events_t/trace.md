> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/trace](https://developer.apple.com/documentation/endpointsecurity/es_events_t/trace)

# trace (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates an attempt by one process to attach to another.

## Declaration

```swift
var trace: es_event_trace_t { get set }
```

## See Also

### Interprocess Events

- [proc_suspend_resume](proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [remote_thread_create](remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.

# trace (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates an attempt by one process to attach to another.

## Declaration

```objectivec
es_event_trace_t trace;
```

## See Also

### Interprocess Events

- [proc_suspend_resume](proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [remote_thread_create](remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.
