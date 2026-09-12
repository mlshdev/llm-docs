> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1589700-bpf_attach](https://developer.apple.com/documentation/kernel/1589700-bpf_attach)

# bpf_attach

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
errno_t bpf_attach(ifnet_t interface, u_int32_t data_link_type, u_int32_t header_length, bpf_send_func send, bpf_tap_func tap);
```

## Parameters

- `interface`: The interface to register with BPF.
- `data_link_type`: The data link type of the interface. See the DLT\_\* defines in bpf.h.
- `header_length`: The length, in bytes, of the data link header.
- `send`: See the bpf_send_func described above.
- `tap`: See the bpf_tap_func described above.

<a id="discussion"></a>

## Discussion

Registers an interface with BPF. This allows bpf devices to attach to your interface to capture and transmit packets. Your interface will be unregistered automatically when your interface is detached. You may register multiple times with different data link types. An 802.11 interface would use this to allow clients to pick whether they want just an ethernet style frame or the 802.11 wireless headers as well. The first dlt you register will be considered the default. Any bpf device attaches that do not specify a data link type will use the default.

## See Also

### bpf

- [bpf_tap_in](1589470-bpf_tap_in.md)
- [bpf_tap_out](1589576-bpf_tap_out.md)
- [bpfattach](1589467-bpfattach.md)
