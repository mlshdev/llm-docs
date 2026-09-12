> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_exec_env_count(_:)](https://developer.apple.com/documentation/endpointsecurity/es_exec_env_count(_:))

# es_exec_env_count(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Gets the number of environment variables from a process execution event.

## Declaration

```swift
func es_exec_env_count(_ event: UnsafePointer<es_event_exec_t>) -> UInt32
```

## Parameters

- `event`: The process execution event.

<a id="return-value"></a>

## Return Value

The number of environment variables.

## See Also

### Process Event Helper Functions

- [es_exec_arg(\_:\_:)](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count(\_:)](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env(\_:\_:)](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_fd(\_:\_:)](es_exec_fd%28____%29.md): Gets the file descriptor at the specified position from a process execution event.
- [es_exec_fd_count(\_:)](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.
- [es_fd_t](es_fd_t.md): A structure that describes an open file descriptor.

# es_exec_env_count (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Gets the number of environment variables from a process execution event.

## Declaration

```objectivec
extern uint32_t es_exec_env_count(const es_event_exec_t *event);
```

## Parameters

- `event`: The process execution event.

<a id="return-value"></a>

## Return Value

The number of environment variables.

## See Also

### Process Event Helper Functions

- [es_exec_arg](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_fd](es_exec_fd%28____%29.md): Gets the file descriptor at the specified position from a process execution event.
- [es_exec_fd_count](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.
- [es_fd_t](es_fd_t.md): A structure that describes an open file descriptor.
