> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1433241-sflt_unregister](https://developer.apple.com/documentation/kernel/1433241-sflt_unregister)

# sflt_unregister

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Declaration

```objectivec
errno_t sflt_unregister(sflt_handle handle);
```

## Parameters

- `handle`: The sf_handle of the socket filter to unregister.

<a id="return_value"></a>

## Return Value

0 on success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Unregisters a socket filter. This will not detach the socket filter from all sockets it may be attached to at the time, it will just prevent the socket filter from being attached to any new sockets.
