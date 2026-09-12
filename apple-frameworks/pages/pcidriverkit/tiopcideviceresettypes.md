> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/tiopcideviceresettypes](https://developer.apple.com/documentation/pcidriverkit/tiopcideviceresettypes)

# tIOPCIDeviceResetTypes

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
typedef enum tIOPCIDeviceResetTypes : unsigned int { ... } tIOPCIDeviceResetTypes;
```

<a id="overview"></a>

## Overview

```
        This will issue a hot reset from its upstream bridge by setting the secondary bus reset bit in the bridge's control
        register.
```

```
        specific function exists.
```

```
        specific function exists. Upon completion, the device is unusable until the caller requests reset with type
        kIOPCIDeviceResetTypeWarmResetEnable.

        This type facilitates the generation of a cold reset, i.e. by removing power before using kIOPCIDeviceResetTypeWarmResetDisable
        and re-applying it before using kIOPCIDeviceResetTypeWarmResetEnable.
```

```
        (e.g. deassert PERST#). See kIOPCIDeviceResetTypeWarmResetDisable for more details.
```

## Topics

### Enumeration Cases

- [kIOPCIDeviceResetTypeFunctionReset](tiopcideviceresettypes/kiopcideviceresettypefunctionreset.md)
- [kIOPCIDeviceResetTypeHotReset](tiopcideviceresettypes/kiopcideviceresettypehotreset.md)
- [kIOPCIDeviceResetTypeWarmReset](tiopcideviceresettypes/kiopcideviceresettypewarmreset.md)
- [kIOPCIDeviceResetTypeWarmResetDisable](tiopcideviceresettypes/kiopcideviceresettypewarmresetdisable.md)
- [kIOPCIDeviceResetTypeWarmResetEnable](tiopcideviceresettypes/kiopcideviceresettypewarmresetenable.md)

## See Also

### Enumerations

- [Anonymous](anonymous-enum.md)
- [tIOPCIAccessOptions](tiopciaccessoptions.md)
- [tIOPCIDeviceResetOptions](tiopcideviceresetoptions.md)
- [tIOPCILinkSpeed](tiopcilinkspeed.md)
- [IOPCIBARType](iopcibartype.md)
- [IOPCILinkSpeed](iopcilinkspeed.md)
- [IOPCIMemoryRange](iopcimemoryrange.md)
- [IOPCISaveDeviceStateOptions](iopcisavedevicestateoptions.md)
- [tIOPCIAccessOptions](tiopciaccessoptions.md)
- [tIOPCIDeviceResetOptions](tiopcideviceresetoptions.md)
- [tIOPCILinkControlASPMBits](tiopcilinkcontrolaspmbits.md)
- [tIOPCILinkSpeed](tiopcilinkspeed.md)
- [Interrupt Types](interrupt-types-enum.md): Interrupt types that the device supports.
