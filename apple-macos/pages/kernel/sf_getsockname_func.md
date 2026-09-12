> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/sf_getsockname_func](https://developer.apple.com/documentation/kernel/sf_getsockname_func)

# sf_getsockname_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef int (*sf_getsockname_func)(void *cookie, socket_t so, struct sockaddr **sa);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `sa`: A pointer to a socket address pointer.

<a id="return_value"></a>

## Return Value

If you return a non-zero value, processing will stop. If you return EJUSTRETURN, no further filters will be called but a result of zero will be returned to the caller of getsockname.

<a id="discussion"></a>

## Discussion

sf_getsockname_func is called to allow a filter to to intercept the getsockname function. When called, sa will point to a pointer to a socket address that was malloced in zone M_SONAME. If you want to replace this address, either modify the currenty copy or allocate a new one and free the old one.
