> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/signal](https://developer.apple.com/documentation/endpointsecurity/es_events_t/signal)

# signal (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the sending of a signal to a process.

## Declaration

```swift
var signal: es_event_signal_t { get set }
```

<a id="Discussion"></a>

## Discussion

Endpoint Security doesn’t fire this event if a process sends a signal to itself.

## See Also

### Process Events

- [chdir](chdir.md): Properties of an event that indicates a change to a process’s working directory.
- [chroot](chroot.md): Properties of an event that indicates a change to a process’s root directory.
- [exec](exec.md): Properties of an event that indicates the execution of a process.
- [fork](fork.md): Properties of an event that indicates the forking of a process.
- [proc_check](proc_check.md): Properties of an event that indicate the retrieval of process information.
- [exit](exit.md): Properties of an event that indicates a process exiting.

# signal (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the sending of a signal to a process.

## Declaration

```objectivec
es_event_signal_t signal;
```

<a id="Discussion"></a>

## Discussion

Endpoint Security doesn’t fire this event if a process sends a signal to itself.

## See Also

### Process Events

- [chdir](chdir.md): Properties of an event that indicates a change to a process’s working directory.
- [chroot](chroot.md): Properties of an event that indicates a change to a process’s root directory.
- [exec](exec.md): Properties of an event that indicates the execution of a process.
- [fork](fork.md): Properties of an event that indicates the forking of a process.
- [proc_check](proc_check.md): Properties of an event that indicate the retrieval of process information.
- [exit](exit.md): Properties of an event that indicates a process exiting.
