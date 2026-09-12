> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_listen_func](https://developer.apple.com/documentation/kernel/sf_listen_func)

# sf_listen_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_listen_func)(void *cookie, socket_t so);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of listen. EJUSTRETURN - The caller will return with a value of 0 (no error) from that point without further processing the listen command. The protocol will not see the call. Anything Else - The caller will stop processing and return this error.

<a id="discussion"></a>

## Discussion

sf_listen_func is called before performing listen on a socket.
