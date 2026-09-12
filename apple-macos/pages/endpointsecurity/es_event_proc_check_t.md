> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_check_t](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_check_t)

# es_event_proc_check_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that indicates the call used and the data returned when a process checks on the access of the target process.

## Declaration

```swift
struct es_event_proc_check_t
```

## Topics

### Inspecting Event Properties

- [flavor](es_event_proc_check_t/flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](es_event_proc_check_t.md).
- [target](es_event_proc_check_t/target.md): The process targeted by this event.
- [type](es_event_proc_check_t/type.md): The type of call number used to check the access on the target process.
- [es_proc_check_type_t](es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](es_event_proc_check_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_proc_check_t/init%28%29.md)
- [init(target:type:flavor:reserved:)](es_event_proc_check_t/init%28target_type_flavor_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Process Event Types

- [es_event_chdir_t](es_event_chdir_t.md): A type for an event that indicates a change to a process’s working directory.
- [es_event_chroot_t](es_event_chroot_t.md): A type for an event that indicates a change to a process’s root directory.
- [es_event_exec_t](es_event_exec_t.md): A type for an event that indicates the execution of a process.
- [es_event_fork_t](es_event_fork_t.md): A type for an event that indicates the forking of a process.
- [es_event_signal_t](es_event_signal_t.md): A type for an event that indicates the sending of a signal to a process.
- [es_event_exit_t](es_event_exit_t.md): A type for an event that indicates a process exiting.

# es_event_proc_check_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that indicates the call used and the data returned when a process checks on the access of the target process.

## Declaration

```objectivec
typedef struct { ... } es_event_proc_check_t;
```

## Topics

### Inspecting Event Properties

- [flavor](es_event_proc_check_t/flavor.md): A representation of the information sought by a process based on the type member of [es_event_proc_check_t](es_event_proc_check_t.md).
- [target](es_event_proc_check_t/target.md): The process targeted by this event.
- [type](es_event_proc_check_t/type.md): The type of call number used to check the access on the target process.
- [es_proc_check_type_t](es_proc_check_type_t.md): The type of call used when a process checks on the access of the target process.
- [reserved](es_event_proc_check_t/reserved.md): An unused field reserved for future use.

## See Also

### Process Event Types

- [es_event_chdir_t](es_event_chdir_t.md): A type for an event that indicates a change to a process’s working directory.
- [es_event_chroot_t](es_event_chroot_t.md): A type for an event that indicates a change to a process’s root directory.
- [es_event_exec_t](es_event_exec_t.md): A type for an event that indicates the execution of a process.
- [es_event_fork_t](es_event_fork_t.md): A type for an event that indicates the forking of a process.
- [es_event_signal_t](es_event_signal_t.md): A type for an event that indicates the sending of a signal to a process.
- [es_event_exit_t](es_event_exit_t.md): A type for an event that indicates a process exiting.
