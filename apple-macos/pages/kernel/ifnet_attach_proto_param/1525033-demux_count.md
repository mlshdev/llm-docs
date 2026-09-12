> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ifnet_attach_proto_param/1525033-demux_count](https://developer.apple.com/documentation/kernel/ifnet_attach_proto_param/1525033-demux_count)

# demux_count

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The number of entries in the demux_array array.

## Declaration

```objectivec
u_int32_t demux_count;
```

## See Also

### Fields

- [demux_array](1525038-demux_array.md): An array of ifnet_demux_desc structures describing the protocol.
- [input](1524849-input.md): The function to be called for inbound packets.
- [pre_output](1524845-pre_output.md): The function to be called for outbound packets.
- [event](1524843-event.md): The function to be called for interface events.
- [ioctl](1525050-ioctl.md): The function to be called for ioctls.
- [detached](1524863-detached.md): The function to be called for handling the detach.
