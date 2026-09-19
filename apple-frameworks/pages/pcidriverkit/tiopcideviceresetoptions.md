> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pcidriverkit/tiopcideviceresetoptions

# tIOPCIDeviceResetOptions

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
typedef enum tIOPCIDeviceResetOptions : unsigned int { ... } tIOPCIDeviceResetOptions;
```

<a id="overview"></a>

## Overview

```
        any attached client drivers. Devices with reset-initiated personality changes should use this option.

        This option causes the reset function to initiate the asynchronous termination process, but not block on its completion.
```

## Topics

### Enumeration Cases

- [kIOPCIDeviceResetOptionNone](tiopcideviceresetoptions/kiopcideviceresetoptionnone.md)
- [kIOPCIDeviceResetOptionTerminate](tiopcideviceresetoptions/kiopcideviceresetoptionterminate.md)

## See Also

### Enumerations

- [Anonymous](anonymous-enum.md)
- [tIOPCIAccessOptions](tiopciaccessoptions.md)
- [tIOPCIDeviceResetTypes](tiopcideviceresettypes.md)
- [tIOPCILinkSpeed](tiopcilinkspeed.md)
- [IOPCIBARType](iopcibartype.md)
- [IOPCILinkSpeed](iopcilinkspeed.md)
- [IOPCIMemoryRange](iopcimemoryrange.md)
- [IOPCISaveDeviceStateOptions](iopcisavedevicestateoptions.md)
- [tIOPCIAccessOptions](tiopciaccessoptions.md)
- [tIOPCIDeviceResetTypes](tiopcideviceresettypes.md)
- [tIOPCILinkControlASPMBits](tiopcilinkcontrolaspmbits.md)
- [tIOPCILinkSpeed](tiopcilinkspeed.md)
- [Interrupt Types](interrupt-types-enum.md): Interrupt types that the device supports.
