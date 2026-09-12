> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1397894-ether_check_multi](https://developer.apple.com/documentation/kernel/1397894-ether_check_multi)

# ether_check_multi

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
errno_t ether_check_multi(ifnet_t ifp, const struct sockaddr *multicast);
```

## See Also

### ether

- [ether_family_init](1397889-ether_family_init.md)
- [ether_add_proto](1397885-ether_add_proto.md)
- [ether_del_proto](1397887-ether_del_proto.md)
- [ether_demux](1397896-ether_demux.md)
- [ether_frameout](1397892-ether_frameout.md)
- [ether_ioctl](1397890-ether_ioctl.md)
