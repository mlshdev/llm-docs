> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1589467-bpfattach](https://developer.apple.com/documentation/kernel/1589467-bpfattach)

# bpfattach

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
void bpfattach(ifnet_t interface, u_int data_link_type, u_int header_length);
```

## Parameters

- `interface`: The interface to register with BPF.
- `data_link_type`: The data link type of the interface. See the DLT\_\* defines in bpf.h.
- `header_length`: The length, in bytes, of the data link header.

<a id="discussion"></a>

## Discussion

Registers an interface with BPF. This allows bpf devices to attach to your interface to capture packets. Your interface will be unregistered automatically when your interface is detached.

## See Also

### bpf

- [bpf_attach](1589700-bpf_attach.md)
- [bpf_tap_in](1589470-bpf_tap_in.md)
- [bpf_tap_out](1589576-bpf_tap_out.md)
