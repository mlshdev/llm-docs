> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iondrvframebuffer/1580209-doi2crequest

# doI2CRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn doI2CRequest(UInt32 bus, IOI2CBusTiming *timing, IOI2CRequest *request);
```
