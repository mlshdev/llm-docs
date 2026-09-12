> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_ioctl_func](https://developer.apple.com/documentation/kernel/sf_ioctl_func)

# sf_ioctl_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*sf_ioctl_func)(void *cookie, socket_t so, unsigned long request, const char *argp);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `request`: The ioctl name.
- `argp`: A pointer to the ioctl parameter.

<a id="return_value"></a>

## Return Value

Return: 0 - The caller will continue with normal processing of this ioctl. EJUSTRETURN - The caller will return with a value of 0 (no error) from that point without further processing or propogating the ioctl. Anything Else - The caller will stop processing and return this error.

<a id="discussion"></a>

## Discussion

sf_ioctl_func is called before performing an ioctl on a socket.

All undefined ioctls are reserved for future use by Apple. If you need to communicate with your kext using an ioctl, please use SIOCSIFKPI and SIOCGIFKPI.
