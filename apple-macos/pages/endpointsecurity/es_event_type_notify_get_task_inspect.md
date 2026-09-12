> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_type_notify_get_task_inspect](https://developer.apple.com/documentation/endpointsecurity/es_event_type_notify_get_task_inspect)

# ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT (Swift)

**Framework:** Endpoint Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

An identifier for a process that notifies endpoint security that it is retrieving the task inspect port for another process.

## Declaration

```swift
var ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT: es_event_type_t { get }
```

<a id="Discussion"></a>

## Discussion

This identifier corresponds to the [es_events_t](es_events_t.md) union member [get_task_inspect](es_events_t/get_task_inspect.md), which has the type [es_event_get_task_inspect_t](es_event_get_task_inspect_t.md).

Endpoint Security delivers this event when a process obtains a send control right to a task control port. This is a result of calling APIs like `SYS_task_inspect_for_pid` or `task_identity_token_get_task_port(_:_:_:)`.

## See Also

### Notification Event Types

- [ES_EVENT_TYPE_NOTIFY_ACCESS](es_event_type_notify_access.md): An identifier for a process that notifies endpoint security that it is checking a file’s access permission.
- [ES_EVENT_TYPE_NOTIFY_CHDIR](es_event_type_notify_chdir.md): An identifier for a process that notifies endpoint security that it is changing the working directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CHROOT](es_event_type_notify_chroot.md): An identifier for a process that notifies endpoint security that it is changing the root directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CLONE](es_event_type_notify_clone.md): An identifier for a process that notifies endpoint security that it is cloning a file.
- [ES_EVENT_TYPE_NOTIFY_CLOSE](es_event_type_notify_close.md): An identifier for a process that notifies endpoint security that it is closing a file.
- [ES_EVENT_TYPE_NOTIFY_COPYFILE](es_event_type_notify_copyfile.md): An identifier for a process that notifies endpoint security that it is copying a file.
- [ES_EVENT_TYPE_NOTIFY_CREATE](es_event_type_notify_create.md): An identifier for a process that notifies endpoint security that it is creating a file.
- [ES_EVENT_TYPE_NOTIFY_CS_INVALIDATED](es_event_type_notify_cs_invalidated.md): An identifier for a process that notifies endpoint security that its code signing status is now invalid.
- [ES_EVENT_TYPE_NOTIFY_DELETEEXTATTR](es_event_type_notify_deleteextattr.md): An identifier for a process that notifies endpoint security that it is deleting an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_DUP](es_event_type_notify_dup.md): An identifier for a process that notifies endpoint security that it is duplicating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_EXCHANGEDATA](es_event_type_notify_exchangedata.md): An identifier for a process that notifies endpoint security that it is exchanging data between two files.
- [ES_EVENT_TYPE_NOTIFY_EXEC](es_event_type_notify_exec.md): An identifier for a process that notifies endpoint security that it is executing an image.
- [ES_EVENT_TYPE_NOTIFY_EXIT](es_event_type_notify_exit.md): An identifier for a process that notifies endpoint security that it is exiting.
- [ES_EVENT_TYPE_NOTIFY_FCNTL](es_event_type_notify_fcntl.md): An identifier for a process that notifies endpoint security that it is manipulating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_MATERIALIZE](es_event_type_notify_file_provider_materialize.md): An identifier for a process that notifies endpoint security that a file provider returned a reference to a file.

# ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

An identifier for a process that notifies endpoint security that it is retrieving the task inspect port for another process.

## Declaration

```objectivec
ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT
```

<a id="Discussion"></a>

## Discussion

This identifier corresponds to the [es_events_t](es_events_t.md) union member [get_task_inspect](es_events_t/get_task_inspect.md), which has the type [es_event_get_task_inspect_t](es_event_get_task_inspect_t.md).

Endpoint Security delivers this event when a process obtains a send control right to a task control port. This is a result of calling APIs like `SYS_task_inspect_for_pid` or `task_identity_token_get_task_port(_:_:_:)`.

## See Also

### Notification Event Types

- [ES_EVENT_TYPE_NOTIFY_ACCESS](es_event_type_notify_access.md): An identifier for a process that notifies endpoint security that it is checking a file’s access permission.
- [ES_EVENT_TYPE_NOTIFY_CHDIR](es_event_type_notify_chdir.md): An identifier for a process that notifies endpoint security that it is changing the working directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CHROOT](es_event_type_notify_chroot.md): An identifier for a process that notifies endpoint security that it is changing the root directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CLONE](es_event_type_notify_clone.md): An identifier for a process that notifies endpoint security that it is cloning a file.
- [ES_EVENT_TYPE_NOTIFY_CLOSE](es_event_type_notify_close.md): An identifier for a process that notifies endpoint security that it is closing a file.
- [ES_EVENT_TYPE_NOTIFY_COPYFILE](es_event_type_notify_copyfile.md): An identifier for a process that notifies endpoint security that it is copying a file.
- [ES_EVENT_TYPE_NOTIFY_CREATE](es_event_type_notify_create.md): An identifier for a process that notifies endpoint security that it is creating a file.
- [ES_EVENT_TYPE_NOTIFY_CS_INVALIDATED](es_event_type_notify_cs_invalidated.md): An identifier for a process that notifies endpoint security that its code signing status is now invalid.
- [ES_EVENT_TYPE_NOTIFY_DELETEEXTATTR](es_event_type_notify_deleteextattr.md): An identifier for a process that notifies endpoint security that it is deleting an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_DUP](es_event_type_notify_dup.md): An identifier for a process that notifies endpoint security that it is duplicating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_EXCHANGEDATA](es_event_type_notify_exchangedata.md): An identifier for a process that notifies endpoint security that it is exchanging data between two files.
- [ES_EVENT_TYPE_NOTIFY_EXEC](es_event_type_notify_exec.md): An identifier for a process that notifies endpoint security that it is executing an image.
- [ES_EVENT_TYPE_NOTIFY_EXIT](es_event_type_notify_exit.md): An identifier for a process that notifies endpoint security that it is exiting.
- [ES_EVENT_TYPE_NOTIFY_FCNTL](es_event_type_notify_fcntl.md): An identifier for a process that notifies endpoint security that it is manipulating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_MATERIALIZE](es_event_type_notify_file_provider_materialize.md): An identifier for a process that notifies endpoint security that a file provider returned a reference to a file.
