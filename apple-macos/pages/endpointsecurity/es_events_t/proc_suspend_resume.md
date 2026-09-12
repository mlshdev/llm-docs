> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/proc_suspend_resume](https://developer.apple.com/documentation/endpointsecurity/es_events_t/proc_suspend_resume)

# proc_suspend_resume (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.

## Declaration

```swift
var proc_suspend_resume: es_event_proc_suspend_resume_t { get set }
```

## See Also

### Interprocess Events

- [trace](trace.md): Properties of an event that indicates an attempt by one process to attach to another.
- [remote_thread_create](remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.

# proc_suspend_resume (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.

## Declaration

```objectivec
es_event_proc_suspend_resume_t proc_suspend_resume;
```

## See Also

### Interprocess Events

- [trace](trace.md): Properties of an event that indicates an attempt by one process to attach to another.
- [remote_thread_create](remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.
