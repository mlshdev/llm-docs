> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1397885-ether_add_proto](https://developer.apple.com/documentation/kernel/1397885-ether_add_proto)

# ether_add_proto

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
errno_t ether_add_proto(ifnet_t interface, protocol_family_t protocol, const struct ifnet_demux_desc *demux_list, u_int32_t demux_count);
```

## See Also

### ether

- [ether_family_init](1397889-ether_family_init.md)
- [ether_del_proto](1397887-ether_del_proto.md)
- [ether_demux](1397896-ether_demux.md)
- [ether_frameout](1397892-ether_frameout.md)
- [ether_ioctl](1397890-ether_ioctl.md)
- [ether_check_multi](1397894-ether_check_multi.md)
