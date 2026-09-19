> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmbitmap/1560543-pixelsize

# pixelSize

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

The number of bits per pixel. The pixel size should correspond to the packing size specified in the `space` field. This requirement is not enforced as of ColorSync version 2.5, but it may be enforced in future versions.

## Declaration

```objectivec
size_t pixelSize;
```
