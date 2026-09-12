> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/bpf_packet_func](https://developer.apple.com/documentation/kernel/bpf_packet_func)

# bpf_packet_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*bpf_packet_func)(ifnet_t interface, mbuf_t data);
```

## Parameters

- `interface`: The interface being sent or received on.
- `data`: The packet to be transmitted or received.

<a id="return_value"></a>

## Return Value

An errno value or zero upon success.

<a id="discussion"></a>

## Discussion

bpf_packet_func The bpf_packet_func is used to intercept inbound and outbound packets. The tap function will never free the mbuf. The tap function will only copy the mbuf in to various bpf file descriptors tapping this interface.
