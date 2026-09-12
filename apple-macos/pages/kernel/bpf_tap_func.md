> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/bpf_tap_func](https://developer.apple.com/documentation/kernel/bpf_tap_func)

# bpf_tap_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef errno_t (*bpf_tap_func)(ifnet_t interface, u_int32_t data_link_type, bpf_tap_mode direction);
```

## Parameters

- `interface`: The interface being tapped.
- `dlt`: The data link type being tapped.
- `direction`: The direction of the tap.

<a id="discussion"></a>

## Discussion

bpf_tap_func is called when the tap state of the interface changes. This happens when a bpf device attaches to an interface or detaches from an interface. The tap mode will join together (bit or) the modes of all bpf devices using that interface for that dlt. If you return an error from this function, the bpf device attach attempt that triggered the tap will fail. If this function was called bacuse the tap state was decreasing (tap in or out is stopping), the error will be ignored.
