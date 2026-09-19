> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbfamilyiooptionbit

# IOUSBFamilyIOOptionBit

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
enum {
   kIOUSBInterfaceOpenAlt = 0x00010000,
   kIOUSBInterfaceOpenAlternateInterfaceBit = 16,
   kUSBOptionBitOpenExclusivelyBit = 17,
   kIOUSBInterfaceOpenAlternateInterfaceMask = (
   1 << kIOUSBInterfaceOpenAlternateInterfaceBit),
   kUSBOptionBitOpenExclusivelyMask = (
   1 << kUSBOptionBitOpenExclusivelyBit)
};
```

<a id="overview"></a>

## Overview

Options used exclusively by the USB Family when calling calling IOService APIs, such as open() and close().

## Topics

### Constants

- [kIOUSBInterfaceOpenAlt](https://developer.apple.com/documentation/kernel/1646355-anonymous/kiousbinterfaceopenalt)
- [kUSBOptionBitOpenExclusivelyBit](https://developer.apple.com/documentation/kernel/1646355-anonymous/kusboptionbitopenexclusivelybit)
