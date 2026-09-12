> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_proc_suspend_resume_type_t](https://developer.apple.com/documentation/endpointsecurity/es_proc_suspend_resume_type_t)

# es_proc_suspend_resume_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The type of a process suspension or resumption event.

## Declaration

```swift
struct es_proc_suspend_resume_type_t
```

## Topics

### Event Types

- [ES_PROC_SUSPEND_RESUME_TYPE_SUSPEND](es_proc_suspend_resume_type_suspend.md): An event type for process suspension events.
- [ES_PROC_SUSPEND_RESUME_TYPE_RESUME](es_proc_suspend_resume_type_resume.md): An event type for process resumption events.
- [ES_PROC_SUSPEND_RESUME_TYPE_SHUTDOWN_SOCKETS](es_proc_suspend_resume_type_shutdown_sockets.md): An event type for process socket shutdown events.

### Initializers

- [init(\_:)](es_proc_suspend_resume_type_t/init%28__%29.md)
- [init(rawValue:)](es_proc_suspend_resume_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_proc_suspend_resume_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Event Properties

- [target](es_event_proc_suspend_resume_t/target.md): The process targeted by this event.
- [type](es_event_proc_suspend_resume_t/type.md): The type of event: suspend, resume, or socket shutdown.
- [reserved](es_event_proc_suspend_resume_t/reserved.md): An unused field reserved for future use.

# es_proc_suspend_resume_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The type of a process suspension or resumption event.

## Declaration

```objectivec
typedef enum { ... } es_proc_suspend_resume_type_t;
```

## Topics

### Event Types

- [ES_PROC_SUSPEND_RESUME_TYPE_SUSPEND](es_proc_suspend_resume_type_suspend.md): An event type for process suspension events.
- [ES_PROC_SUSPEND_RESUME_TYPE_RESUME](es_proc_suspend_resume_type_resume.md): An event type for process resumption events.
- [ES_PROC_SUSPEND_RESUME_TYPE_SHUTDOWN_SOCKETS](es_proc_suspend_resume_type_shutdown_sockets.md): An event type for process socket shutdown events.

## See Also

### Inspecting Event Properties

- [target](es_event_proc_suspend_resume_t/target.md): The process targeted by this event.
- [type](es_event_proc_suspend_resume_t/type.md): The type of event: suspend, resume, or socket shutdown.
- [reserved](es_event_proc_suspend_resume_t/reserved.md): An unused field reserved for future use.
