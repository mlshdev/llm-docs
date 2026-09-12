> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_signal_t](https://developer.apple.com/documentation/endpointsecurity/es_event_signal_t)

# es_event_signal_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the sending of a signal to a process.

## Declaration

```swift
struct es_event_signal_t
```

<a id="overview"></a>

## Overview

Endpoint Security doesn’t generate this event if a process sends a signal to itself.

## Topics

### Inspecting Event Properties

- [sig](es_event_signal_t/sig.md): The signal number sent to the target process.
- [target](es_event_signal_t/target.md): The process that the signal targets.
- [reserved](es_event_signal_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(sig:target:instigator:reserved:)](es_event_signal_t/init%28sig_target_instigator_reserved_%29.md)

### Instance Properties

- [instigator](es_event_signal_t/instigator.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Process Event Types

- [es_event_chdir_t](es_event_chdir_t.md): A type for an event that indicates a change to a process’s working directory.
- [es_event_chroot_t](es_event_chroot_t.md): A type for an event that indicates a change to a process’s root directory.
- [es_event_exec_t](es_event_exec_t.md): A type for an event that indicates the execution of a process.
- [es_event_fork_t](es_event_fork_t.md): A type for an event that indicates the forking of a process.
- [es_event_proc_check_t](es_event_proc_check_t.md): A type that indicates the call used and the data returned when a process checks on the access of the target process.
- [es_event_exit_t](es_event_exit_t.md): A type for an event that indicates a process exiting.

# es_event_signal_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the sending of a signal to a process.

## Declaration

```objectivec
typedef struct { ... } es_event_signal_t;
```

<a id="overview"></a>

## Overview

Endpoint Security doesn’t generate this event if a process sends a signal to itself.

## Topics

### Inspecting Event Properties

- [sig](es_event_signal_t/sig.md): The signal number sent to the target process.
- [target](es_event_signal_t/target.md): The process that the signal targets.
- [reserved](es_event_signal_t/reserved.md): An unused field reserved for future use.

### Instance Properties

- [instigator](es_event_signal_t/instigator.md)

## See Also

### Process Event Types

- [es_event_chdir_t](es_event_chdir_t.md): A type for an event that indicates a change to a process’s working directory.
- [es_event_chroot_t](es_event_chroot_t.md): A type for an event that indicates a change to a process’s root directory.
- [es_event_exec_t](es_event_exec_t.md): A type for an event that indicates the execution of a process.
- [es_event_fork_t](es_event_fork_t.md): A type for an event that indicates the forking of a process.
- [es_event_proc_check_t](es_event_proc_check_t.md): A type that indicates the call used and the data returned when a process checks on the access of the target process.
- [es_event_exit_t](es_event_exit_t.md): A type for an event that indicates a process exiting.
