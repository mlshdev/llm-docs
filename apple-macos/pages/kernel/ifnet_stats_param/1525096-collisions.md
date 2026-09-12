> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ifnet_stats_param/1525096-collisions](https://developer.apple.com/documentation/kernel/ifnet_stats_param/1525096-collisions)

# collisions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The number of collisions seen by this interface.

## Declaration

```objectivec
u_int64_t collisions;
```

## See Also

### Fields

- [packets_in](1524989-packets_in.md): The number of packets received.
- [bytes_in](1524883-bytes_in.md): The number of bytes received.
- [errors_in](1524933-errors_in.md): The number of receive errors.
- [packets_out](1525128-packets_out.md): The number of packets transmitted.
- [bytes_out](1525110-bytes_out.md): The number of bytes transmitted.
- [errors_out](1524902-errors_out.md): The number of transmission errors.
- [dropped](1525094-dropped.md): The number of packets dropped.
