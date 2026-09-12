> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_proc_check_type_t](https://developer.apple.com/documentation/endpointsecurity/es_proc_check_type_t)

# es_proc_check_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The type of call used when a process checks on the access of the target process.

## Declaration

```swift
struct es_proc_check_type_t
```

<a id="overview"></a>

## Overview

This value provides detail, in coordination with [flavor](es_event_proc_check_t/flavor.md) from [es_event_proc_check_t](es_event_proc_check_t.md), to identify the functions and the type of data returned from checks called in `libproc.h`.

## Topics

### Process Check Result Types

- [ES_PROC_CHECK_TYPE_DIRTYCONTROL](es_proc_check_type_dirtycontrol.md): A type of process check that uses the process’s dirty state.
- [ES_PROC_CHECK_TYPE_LISTPIDS](es_proc_check_type_listpids.md): A type of process check that lists related process identifiers.
- [ES_PROC_CHECK_TYPE_PIDFDINFO](es_proc_check_type_pidfdinfo.md): A type of process check that gets file descriptor information.
- [ES_PROC_CHECK_TYPE_PIDFILEPORTINFO](es_proc_check_type_pidfileportinfo.md): A type of process check that gets port information.
- [ES_PROC_CHECK_TYPE_PIDINFO](es_proc_check_type_pidinfo.md): A type of process check that gets basic process information.
- [ES_PROC_CHECK_TYPE_PIDRUSAGE](es_proc_check_type_pidrusage.md): A type of process check that gets a process’s resource usage information.
- [ES_PROC_CHECK_TYPE_SETCONTROL](es_proc_check_type_setcontrol.md): A type of process check that sets the process control state.

### Deprecated Result Types

- [ES_PROC_CHECK_TYPE_KERNMSGBUF](es_proc_check_type_kernmsgbuf.md): Deprecated. A type of process check that checks the message buffer.
- [ES_PROC_CHECK_TYPE_TERMINATE](es_proc_check_type_terminate.md): Deprecated. A type of process check that terninates a process.
- [ES_PROC_CHECK_TYPE_UDATA_INFO](es_proc_check_type_udata_info.md): Deprecated. A type of process check that involves a user data token.

### Initializers

- [init(\_:)](es_proc_check_type_t/init%28__%29.md)
- [init(rawValue:)](es_proc_check_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_proc_check_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Event Properties

- [flavor](es_event_proc_check_t/flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](es_event_proc_check_t.md).
- [target](es_event_proc_check_t/target.md): The process targeted by this event.
- [type](es_event_proc_check_t/type.md): The type of call number used to check the access on the target process.
- [reserved](es_event_proc_check_t/reserved.md): An unused field reserved for future use.

# es_proc_check_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The type of call used when a process checks on the access of the target process.

## Declaration

```objectivec
typedef enum { ... } es_proc_check_type_t;
```

<a id="overview"></a>

## Overview

This value provides detail, in coordination with [flavor](es_event_proc_check_t/flavor.md) from [es_event_proc_check_t](es_event_proc_check_t.md), to identify the functions and the type of data returned from checks called in `libproc.h`.

## Topics

### Process Check Result Types

- [ES_PROC_CHECK_TYPE_DIRTYCONTROL](es_proc_check_type_dirtycontrol.md): A type of process check that uses the process’s dirty state.
- [ES_PROC_CHECK_TYPE_LISTPIDS](es_proc_check_type_listpids.md): A type of process check that lists related process identifiers.
- [ES_PROC_CHECK_TYPE_PIDFDINFO](es_proc_check_type_pidfdinfo.md): A type of process check that gets file descriptor information.
- [ES_PROC_CHECK_TYPE_PIDFILEPORTINFO](es_proc_check_type_pidfileportinfo.md): A type of process check that gets port information.
- [ES_PROC_CHECK_TYPE_PIDINFO](es_proc_check_type_pidinfo.md): A type of process check that gets basic process information.
- [ES_PROC_CHECK_TYPE_PIDRUSAGE](es_proc_check_type_pidrusage.md): A type of process check that gets a process’s resource usage information.
- [ES_PROC_CHECK_TYPE_SETCONTROL](es_proc_check_type_setcontrol.md): A type of process check that sets the process control state.

### Deprecated Result Types

- [ES_PROC_CHECK_TYPE_KERNMSGBUF](es_proc_check_type_kernmsgbuf.md): Deprecated. A type of process check that checks the message buffer.
- [ES_PROC_CHECK_TYPE_TERMINATE](es_proc_check_type_terminate.md): Deprecated. A type of process check that terninates a process.
- [ES_PROC_CHECK_TYPE_UDATA_INFO](es_proc_check_type_udata_info.md): Deprecated. A type of process check that involves a user data token.

## See Also

### Inspecting Event Properties

- [flavor](es_event_proc_check_t/flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](es_event_proc_check_t.md).
- [target](es_event_proc_check_t/target.md): The process targeted by this event.
- [type](es_event_proc_check_t/type.md): The type of call number used to check the access on the target process.
- [reserved](es_event_proc_check_t/reserved.md): An unused field reserved for future use.
