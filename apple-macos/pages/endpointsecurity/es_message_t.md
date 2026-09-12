> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t](https://developer.apple.com/documentation/endpointsecurity/es_message_t)

# es_message_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A message from the Endpoint Security subsystem that describes a security event.

## Declaration

```swift
struct es_message_t
```

<a id="overview"></a>

## Overview

A message contains an [event](es_message_t/event.md) monitored by Endpoint Security and an [action](es_message_t/action.md) to perform. The [event](es_message_t/event.md) is a union of types specific to each kind of event. For example, a file-renaming event provides the source and destination paths as the union member `rename`. Similarly, a process fork event provides the process identifier of the new child process as the union member `fork`. Inspect the [event_type](es_message_t/event_type.md) to determine which member of the union to access.

A message can be an authorization request, or a notification of an event that has already taken place, as indicated by the [action_type](es_message_t/action_type.md) field. For authorization messages, your client handler calls [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md) or [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md) to authorize, deny, or pass behavior flags back to Endpoint Security.

## Topics

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_action_type_t](es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](es_event_id_t.md): An opaque identifier for events.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.

### Identifying the Matched Event

- [event](es_message_t/event.md): The event that triggered this message.
- [es_events_t](es_events_t.md): A C union of event-specific types.
- [event_type](es_message_t/event_type.md): The type of the message’s event.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

### Inspecting Timing Properties

- [time](es_message_t/time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](es_message_t/mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](es_message_t/deadline.md): The deadline by which your app must respond to the event.
- [seq_num](es_message_t/seq_num.md): The sequence number of the message.
- [global_seq_num](es_message_t/global_seq_num.md): The global sequence number of the message.

### Identifying the Source Process

- [process](es_message_t/process.md): The process that performed the action defined in a message.
- [es_process_t](es_process_t.md): A type that describes a process, as delivered by an Endpoint Security message.

### Inspecting Thread Properties

- [thread](es_message_t/thread.md): The thread that took the action defined in a message.
- [es_thread_t](es_thread_t.md): A structure that represents a thread in a process.

# es_message_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A message from the Endpoint Security subsystem that describes a security event.

## Declaration

```objectivec
typedef struct { ... } es_message_t;
```

<a id="overview"></a>

## Overview

A message contains an [event](es_message_t/event.md) monitored by Endpoint Security and an [action](es_message_t/action.md) to perform. The [event](es_message_t/event.md) is a union of types specific to each kind of event. For example, a file-renaming event provides the source and destination paths as the union member `rename`. Similarly, a process fork event provides the process identifier of the new child process as the union member `fork`. Inspect the [event_type](es_message_t/event_type.md) to determine which member of the union to access.

A message can be an authorization request, or a notification of an event that has already taken place, as indicated by the [action_type](es_message_t/action_type.md) field. For authorization messages, your client handler calls [es_respond_auth_result](es_respond_auth_result%28________%29.md) or [es_respond_flags_result](es_respond_flags_result%28________%29.md) to authorize, deny, or pass behavior flags back to Endpoint Security.

## Topics

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_action_type_t](es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](es_event_id_t.md): An opaque identifier for events.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.

### Identifying the Matched Event

- [event](es_message_t/event.md): The event that triggered this message.
- [es_events_t](es_events_t.md): A C union of event-specific types.
- [event_type](es_message_t/event_type.md): The type of the message’s event.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

### Inspecting Timing Properties

- [time](es_message_t/time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](es_message_t/mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](es_message_t/deadline.md): The deadline by which your app must respond to the event.
- [seq_num](es_message_t/seq_num.md): The sequence number of the message.
- [global_seq_num](es_message_t/global_seq_num.md): The global sequence number of the message.

### Identifying the Source Process

- [process](es_message_t/process.md): The process that performed the action defined in a message.
- [es_process_t](es_process_t.md): A type that describes a process, as delivered by an Endpoint Security message.

### Inspecting Thread Properties

- [thread](es_message_t/thread.md): The thread that took the action defined in a message.
- [es_thread_t](es_thread_t.md): A structure that represents a thread in a process.

### Reserved Properties

- [opaque](es_message_t/opaque.md): An opaque storage field.
