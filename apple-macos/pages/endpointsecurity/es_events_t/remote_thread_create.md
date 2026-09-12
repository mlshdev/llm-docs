> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/remote_thread_create](https://developer.apple.com/documentation/endpointsecurity/es_events_t/remote_thread_create)

# remote_thread_create (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates an attempt by one process to spawn a thread in another.

## Declaration

```swift
var remote_thread_create: es_event_remote_thread_create_t { get set }
```

## See Also

### Interprocess Events

- [proc_suspend_resume](proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [trace](trace.md): Properties of an event that indicates an attempt by one process to attach to another.

# remote_thread_create (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates an attempt by one process to spawn a thread in another.

## Declaration

```objectivec
es_event_remote_thread_create_t remote_thread_create;
```

## See Also

### Interprocess Events

- [proc_suspend_resume](proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [trace](trace.md): Properties of an event that indicates an attempt by one process to attach to another.
