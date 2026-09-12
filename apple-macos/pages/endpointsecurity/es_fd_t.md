> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_fd_t](https://developer.apple.com/documentation/endpointsecurity/es_fd_t)

# es_fd_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes an open file descriptor.

## Declaration

```swift
struct es_fd_t
```

## Topics

### Inspecting File Descriptor Properties

- [fd](es_fd_t/fd.md): The file descriptor number.
- [fdtype](es_fd_t/fdtype.md): The file descriptor type, as a libproc type.

### Initializers

- [init()](es_fd_t/init%28%29.md)

### Instance Properties

- [pipe](es_fd_t/pipe-1gtm4.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Process Event Helper Functions

- [es_exec_arg(\_:\_:)](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count(\_:)](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env(\_:\_:)](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_env_count(\_:)](es_exec_env_count%28__%29.md): Gets the number of environment variables from a process execution event.
- [es_exec_fd(\_:\_:)](es_exec_fd%28____%29.md): Gets the file descriptor at the specified position from a process execution event.
- [es_exec_fd_count(\_:)](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.

# es_fd_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes an open file descriptor.

## Declaration

```objectivec
typedef struct { ... } es_fd_t;
```

## Topics

### Inspecting File Descriptor Properties

- [fd](es_fd_t/fd.md): The file descriptor number.
- [fdtype](es_fd_t/fdtype.md): The file descriptor type, as a libproc type.

### Instance Properties

- [pipe](es_fd_t/pipe-96tn9.md)

## See Also

### Process Event Helper Functions

- [es_exec_arg](es_exec_arg%28____%29.md): Gets the argument at the specified position from a process execution event.
- [es_exec_arg_count](es_exec_arg_count%28__%29.md): Gets the number of arguments from a process execution event.
- [es_exec_env](es_exec_env%28____%29.md): Gets the environment variable at the specified position from a process execution event.
- [es_exec_env_count](es_exec_env_count%28__%29.md): Gets the number of environment variables from a process execution event.
- [es_exec_fd](es_exec_fd%28____%29.md): Gets the file descriptor at the specified position from a process execution event.
- [es_exec_fd_count](es_exec_fd_count%28__%29.md): Gets the number of file descriptors from a process execution event.
