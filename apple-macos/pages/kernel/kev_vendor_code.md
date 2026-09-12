> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kev_vendor_code](https://developer.apple.com/documentation/kernel/kev_vendor_code)

# kev_vendor_code

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.9+

## Declaration

```objectivec
struct kev_vendor_code {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure is used with the SIOCGKEVVENDOR ioctl to convert from a string identifying a kext or vendor, in the form of a bundle identifier, to a vendor code.

## Topics

### Fields

- [vendor_code](kev_vendor_code/1446971-vendor_code.md): After making the SIOCGKEVVENDOR ioctl call, this will be filled in with the vendor code if there is one.
- [vendor_string](kev_vendor_code/1446951-vendor_string.md): A bundle style identifier.
