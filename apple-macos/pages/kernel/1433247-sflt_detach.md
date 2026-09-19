> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1433247-sflt_detach

# sflt_detach

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Declaration

```objectivec
errno_t sflt_detach(socket_t socket, sflt_handle handle);
```

## Parameters

- `socket`: The socket the filter should be detached from.
- `handle`: The handle of the registered filter to be detached.

<a id="return_value"></a>

## Return Value

0 on success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Detaches a socket filter from a specified socket.
