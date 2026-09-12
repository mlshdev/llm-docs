> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_exec_fd(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_exec_fd(_:_:))

# es_exec_fd(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the file descriptor at the specified position from a process execution event.

## Declaration

```swift
func es_exec_fd(_ event: UnsafePointer<es_event_exec_t>, _ index: UInt32) -> UnsafePointer<es_fd_t>
```

## Parameters

- `event`: The process execution event.
- `index`: The zero-based index of the argument to return. Attempting to read an out-of-bounds index — where `index >= es_fd_arg_count()` — results in undefined behavior.

<a id="return-value"></a>

## Return Value

A pointer to an [es_fd_t](es_fd_t.md) instance that describes the file descriptor.

<a id="Discussion"></a>

## Discussion

This function doesn’t allocate memory for the returned file descriptor description; it points to an [es_fd_t](es_fd_t.md) inside of `event`. Because you don’t own this memory, don’t try to free it.

> **Warning**

>  The returned pointer must not outlive the `event` parameter passed to the function, because the pointer will likely be invalid after the function returns.

## See Also

### Process Event Helper Functions

- [es_exec_arg(\_:\_:)](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count(\_:)](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env(\_:\_:)](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_env_count(\_:)](es_exec_env_count%28__%29.md): Gets the number of environment variables from a process execution event.
- [es_exec_fd_count(\_:)](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.
- [es_fd_t](es_fd_t.md): A structure that describes an open file descriptor.

# es_exec_fd (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the file descriptor at the specified position from a process execution event.

## Declaration

```objectivec
extern const es_fd_t *es_exec_fd(const es_event_exec_t *event, uint32_t index);
```

## Parameters

- `event`: The process execution event.
- `index`: The zero-based index of the argument to return. Attempting to read an out-of-bounds index — where `index >= es_fd_arg_count()` — results in undefined behavior.

<a id="return-value"></a>

## Return Value

A pointer to an [es_fd_t](es_fd_t.md) instance that describes the file descriptor.

<a id="Discussion"></a>

## Discussion

This function doesn’t allocate memory for the returned file descriptor description; it points to an [es_fd_t](es_fd_t.md) inside of `event`. Because you don’t own this memory, don’t try to free it.

> **Warning**

>  The returned pointer must not outlive the `event` parameter passed to the function, because the pointer will likely be invalid after the function returns.

## See Also

### Process Event Helper Functions

- [es_exec_arg](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_env_count](es_exec_env_count%28__%29.md): Gets the number of environment variables from a process execution event.
- [es_exec_fd_count](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.
- [es_fd_t](es_fd_t.md): A structure that describes an open file descriptor.
