> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iff_filter/1589948-iff_ioctl](https://developer.apple.com/documentation/kernel/iff_filter/1589948-iff_ioctl)

# iff_ioctl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The filter function to handle interface ioctls, may be null.

## Declaration

```objectivec
iff_ioctl_func iff_ioctl;
```

## See Also

### Fields

- [iff_cookie](1589954-iff_cookie.md): A kext defined cookie that will be passed to all filter functions.
- [iff_name](1589945-iff_name.md): A filter name used for debugging purposes.
- [iff_protocol](1589949-iff_protocol.md): The protocol of the packets this filter is interested in. If you specify zero, packets from all protocols will be passed to the filter.
- [iff_input](1589946-iff_input.md): The filter function to handle inbound packets, may be NULL.
- [iff_output](1589942-iff_output.md): The filter function to handle outbound packets, may be NULL.
- [iff_event](1589952-iff_event.md): The filter function to handle interface events, may be null.
- [iff_detached](1589944-iff_detached.md): The filter function used to notify the filter that it has been detached.
