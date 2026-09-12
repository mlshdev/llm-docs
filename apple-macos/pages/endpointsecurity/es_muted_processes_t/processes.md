> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_processes_t/processes](https://developer.apple.com/documentation/endpointsecurity/es_muted_processes_t/processes)

# processes (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted processes.

## Declaration

```swift
var processes: UnsafePointer<es_muted_process_t>!
```

## See Also

### Accessing Muted Processes

- [es_muted_process_t](../es_muted_process_t.md): A structure that describes a process’s muted events.
- [count](count.md): The number of elements in the processes array.

# processes (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted processes.

## Declaration

```objectivec
const es_muted_process_t * processes;
```

## See Also

### Accessing Muted Processes

- [es_muted_process_t](../es_muted_process_t.md): A structure that describes a process’s muted events.
- [count](count.md): The number of elements in the processes array.
