> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ifnet_stats_param/1524933-errors_in](https://developer.apple.com/documentation/kernel/ifnet_stats_param/1524933-errors_in)

# errors_in

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The number of receive errors.

## Declaration

```objectivec
u_int64_t errors_in;
```

## See Also

### Fields

- [packets_in](1524989-packets_in.md): The number of packets received.
- [bytes_in](1524883-bytes_in.md): The number of bytes received.
- [packets_out](1525128-packets_out.md): The number of packets transmitted.
- [bytes_out](1525110-bytes_out.md): The number of bytes transmitted.
- [errors_out](1524902-errors_out.md): The number of transmission errors.
- [collisions](1525096-collisions.md): The number of collisions seen by this interface.
- [dropped](1525094-dropped.md): The number of packets dropped.
