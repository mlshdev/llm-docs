> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_detach_func](https://developer.apple.com/documentation/kernel/sf_detach_func)

# sf_detach_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*sf_detach_func)(void *cookie, socket_t so);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.

<a id="return_value"></a>

## Return Value

If you return a non-zero value, your filter will not be attached to this socket.

<a id="discussion"></a>

## Discussion

sf_detach_func is called to notify the filter it has been detached from a socket. If the filter allocated any memory for this attachment, it should be freed. This function will be called when the socket is disposed of.
