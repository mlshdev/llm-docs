> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/kev_vendor_code/1446951-vendor_string

# vendor_string

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A bundle style identifier.

## Declaration

```objectivec
char vendor_string[200];
```

## See Also

### Fields

- [vendor_code](1446971-vendor_code.md): After making the SIOCGKEVVENDOR ioctl call, this will be filled in with the vendor code if there is one.
