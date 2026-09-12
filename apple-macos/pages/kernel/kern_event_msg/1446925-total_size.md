> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kern_event_msg/1446925-total_size](https://developer.apple.com/documentation/kernel/kern_event_msg/1446925-total_size)

# total_size

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

Total size of the kernel event message including the header.

## Declaration

```objectivec
u_int32_t total_size;
```

## See Also

### Fields

- [vendor_code](1446929-vendor_code.md): The vendor code indicates which vendor generated the kernel event. This gives every vendor a unique set of classes and subclasses to use. Use the SIOCGKEVVENDOR ioctl to look up vendor codes for vendors other than Apple. Apple uses KEV_VENDOR_APPLE.
- [kev_class](1446955-kev_class.md): The class of the kernel event.
- [kev_subclass](1446935-kev_subclass.md): The subclass of the kernel event.
- [id](1446959-id.md): Monotonically increasing value.
- [event_code](1446927-event_code.md): The event code.
- [event_data](1446985-event_data.md): Any additional data about this event. Format will depend on the vendor_code, kev_class, kev_subclass, and event_code. The length of the event_data can be determined using total_size - KEV_MSG_HEADER_SIZE.
