> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_attach_func](https://developer.apple.com/documentation/kernel/sf_attach_func)

# sf_attach_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_attach_func)(void **cookie, socket_t so);
```

## Parameters

- `cookie`: Used to allow the socket filter to set the cookie for this attachment.
- `so`: The socket the filter is being attached to.

<a id="return_value"></a>

## Return Value

If you return a non-zero value, your filter will not be attached to this socket.

<a id="discussion"></a>

## Discussion

sf_attach_func is called to notify the filter it has been attached to a socket. The filter may allocate memory for this attachment and use the cookie to track it. This filter is called in one of two cases:

1. You've installed a global filter and a new socket was created.
2. Your non-global socket filter is being attached using the SO_NKE socket option.
