> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/launch_activate_socket](https://developer.apple.com/documentation/xpc/launch_activate_socket)

# launch_activate_socket

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.10+

Retrieves the file descriptors for sockets in the process’s `launchd` property list.

## Declaration

```objectivec
extern int launch_activate_socket(const char *name, int **fds, size_t *cnt);
```

## Parameters

- `name`: The name of the socket entry in the service’s Sockets dictionary.
- `fds`: On return, this parameter is populated with an array of file descriptors. One socket can have many descriptors associated with it depending on the characteristics of the network interfaces on the system. The descriptors in this array are the results of calling `getaddrinfo(3)` with the parameters described in `launchd.plist`. The caller is responsible for calling `free(3)` on the returned pointer.
- `cnt`: The number of file descriptor entries in the returned array.

<a id="return-value"></a>

## Return Value

On success, `0` is returned. Otherwise, an appropriate POSIX-domain is returned.

<a id="Discussion"></a>

## Discussion

The possible error codes are:

- `ENOENT` — There was no socket of the specified name owned by the caller.
- `ESRCH` — The caller isn’t a process managed by launchd.
- `EALREADY` — The socket has already been activated by the caller.
