> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_bind_func](https://developer.apple.com/documentation/kernel/sf_bind_func)

# sf_bind_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_bind_func)(void *cookie, socket_t so, const struct sockaddr *to);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `to`: The local address of the socket will be bound to.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of the bind. EJUSTRETURN - The caller will return with a value of 0 (no error) from that point without further processing the bind command. The protocol layer will not see the call. Anything Else - The caller will rejecting the bind.

<a id="discussion"></a>

## Discussion

sf_bind_func is called before performing a bind operation on a socket.
