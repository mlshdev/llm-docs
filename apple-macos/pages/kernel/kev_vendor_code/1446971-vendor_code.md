> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kev_vendor_code/1446971-vendor_code](https://developer.apple.com/documentation/kernel/kev_vendor_code/1446971-vendor_code)

# vendor_code

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

After making the SIOCGKEVVENDOR ioctl call, this will be filled in with the vendor code if there is one.

## Declaration

```objectivec
u_int32_t vendor_code;
```

## See Also

### Fields

- [vendor_string](1446951-vendor_string.md): A bundle style identifier.
