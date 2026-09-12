> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_getoption_func](https://developer.apple.com/documentation/kernel/sf_getoption_func)

# sf_getoption_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_getoption_func)(void *cookie, socket_t so, sockopt_t opt);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `opt`: The socket option to get.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of the getsockopt. EJUSTRETURN - The caller will return with a value of 0 (no error) from that point without further propagating the get option command. The socket and protocol layers will not see the call. Anything Else - The caller will stop processing and return this error.

<a id="discussion"></a>

## Discussion

sf_getoption_func is called before performing getsockopt on a socket.
