> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/1427594-installinterruptforgpe

# installInterruptForGPE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SInt32 installInterruptForGPE(UInt32 gpeNumber, void *gpeBlockDevice, IOOptionBits options);
```
