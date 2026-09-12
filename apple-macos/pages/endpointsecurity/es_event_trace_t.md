> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_trace_t](https://developer.apple.com/documentation/endpointsecurity/es_event_trace_t)

# es_event_trace_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates an attempt by one process to attach to another process.

## Declaration

```swift
struct es_event_trace_t
```

<a id="overview"></a>

## Overview

Endpoint Security may generate this event multiple times for a single trace attempt. This can occur when then targeted process changes parents during the operation.

## Topics

### Inspecting Event Properties

- [target](es_event_trace_t/target.md): The process receiving the attach.
- [reserved](es_event_trace_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(target:reserved:)](es_event_trace_t/init%28target_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Interprocess Events

- [es_event_proc_suspend_resume_t](es_event_proc_suspend_resume_t.md): A type for an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [es_event_remote_thread_create_t](es_event_remote_thread_create_t.md): A type for an event that indicates an attempt by one process to create a thread in another process.

# es_event_trace_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates an attempt by one process to attach to another process.

## Declaration

```objectivec
typedef struct { ... } es_event_trace_t;
```

<a id="overview"></a>

## Overview

Endpoint Security may generate this event multiple times for a single trace attempt. This can occur when then targeted process changes parents during the operation.

## Topics

### Inspecting Event Properties

- [target](es_event_trace_t/target.md): The process receiving the attach.
- [reserved](es_event_trace_t/reserved.md): An unused field reserved for future use.

## See Also

### Interprocess Events

- [es_event_proc_suspend_resume_t](es_event_proc_suspend_resume_t.md): A type for an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [es_event_remote_thread_create_t](es_event_remote_thread_create_t.md): A type for an event that indicates an attempt by one process to create a thread in another process.
