> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iff_event_func](https://developer.apple.com/documentation/kernel/iff_event_func)

# iff_event_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*iff_event_func)(void *cookie, ifnet_t interface, protocol_family_t protocol, const struct kev_msg *event_msg);
```

## Parameters

- `cookie`: The cookie specified when this filter was attached.
- `interface`: The interface the packet is being transmitted on.
- `event_msg`: The kernel event, may not be changed.

<a id="discussion"></a>

## Discussion

iff_event_func is used to filter interface specific events. The interface is only valid for the duration of the filter call. If you need to keep a reference to the interface, be sure to call ifnet_reference and ifnet_release.
