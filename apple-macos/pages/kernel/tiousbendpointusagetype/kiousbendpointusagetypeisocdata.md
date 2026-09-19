> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/tiousbendpointusagetype/kiousbendpointusagetypeisocdata

# kIOUSBEndpointUsageTypeIsocData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15.1+

The isochronous data type.

## Declaration

```objectivec
kIOUSBEndpointUsageTypeIsocData = (kIOUSBEndpointDescriptorUsageTypeIsocData >> kIOUSBEndpointDescriptorUsageTypePhase)
```
