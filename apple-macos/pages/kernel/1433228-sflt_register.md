> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1433228-sflt_register](https://developer.apple.com/documentation/kernel/1433228-sflt_register)

# sflt_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Declaration

```objectivec
errno_t sflt_register(const struct sflt_filter *filter, int domain, int type, int protocol);
```

## Parameters

- `filter`: A structure describing the filter.
- `domain`: The protocol domain these filters will be attached to.
- `type`: The socket type these filters will be attached to.
- `protocol`: The protocol these filters will be attached to.

<a id="return_value"></a>

## Return Value

0 on success otherwise the errno error.

<a id="discussion"></a>

## Discussion

Registers a socket filter. See 'man 2 socket' for a desciption of domain, type, and protocol.
