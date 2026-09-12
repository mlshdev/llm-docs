> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kev_request/1446979-kev_subclass](https://developer.apple.com/documentation/kernel/kev_request/1446979-kev_subclass)

# kev_subclass

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

All kernel events that don't match this subclass will be ignored. KEV_ANY_SUBCLASS can be used to receive kernel events with any subclass.

## Declaration

```objectivec
u_int32_t kev_subclass;
```

## See Also

### Fields

- [total_size](1809281-total_size.md): Total size of the kernel event message including the header.
- [vendor_code](1446920-vendor_code.md): All kernel events that don't match this vendor code will be ignored. KEV_ANY_VENDOR can be used to receive kernel events with any vendor code.
- [kev_class](1446933-kev_class.md): All kernel events that don't match this class will be ignored. KEV_ANY_CLASS can be used to receive kernel events with any class.
