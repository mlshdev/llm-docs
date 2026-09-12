> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/bpf_send_func](https://developer.apple.com/documentation/kernel/bpf_send_func)

# bpf_send_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef errno_t (*bpf_send_func)(ifnet_t interface, u_int32_t data_link_type, mbuf_t packet);
```

## Parameters

- `interface`: The interface the packet is being sent on.
- `dlt`: The data link type the bpf device is attached to.
- `packet`: The packet to be sent.

<a id="discussion"></a>

## Discussion

bpf_send_func is called when a bpf file descriptor is used to send a raw packet on the interface. The mbuf and data link type are specified. The callback is responsible for releasing the mbuf whether or not it returns an error.
