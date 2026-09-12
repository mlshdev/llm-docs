> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1433214-sflt_attach](https://developer.apple.com/documentation/kernel/1433214-sflt_attach)

# sflt_attach

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Declaration

```objectivec
errno_t sflt_attach(socket_t socket, sflt_handle handle);
```

## Parameters

- `socket`: The socket the filter should be attached to.
- `handle`: The handle of the registered filter to be attached.

<a id="return_value"></a>

## Return Value

0 on success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Attaches a socket filter to the specified socket. A filter must be registered before it can be attached.
