> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kev_request](https://developer.apple.com/documentation/kernel/kev_request)

# kev_request

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.9+

## Declaration

```objectivec
struct kev_request {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure is used with the SIOCSKEVFILT and SIOCGKEVFILT to set and get the control filter setting for a kernel control socket.

## Topics

### Fields

- [total_size](kev_request/1809281-total_size.md): Total size of the kernel event message including the header.
- [vendor_code](kev_request/1446920-vendor_code.md): All kernel events that don't match this vendor code will be ignored. KEV_ANY_VENDOR can be used to receive kernel events with any vendor code.
- [kev_class](kev_request/1446933-kev_class.md): All kernel events that don't match this class will be ignored. KEV_ANY_CLASS can be used to receive kernel events with any class.
- [kev_subclass](kev_request/1446979-kev_subclass.md): All kernel events that don't match this subclass will be ignored. KEV_ANY_SUBCLASS can be used to receive kernel events with any subclass.
