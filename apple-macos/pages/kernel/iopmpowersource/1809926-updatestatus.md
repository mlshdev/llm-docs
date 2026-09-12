> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowersource/1809926-updatestatus](https://developer.apple.com/documentation/kernel/iopmpowersource/1809926-updatestatus)

# updateStatus

**Interface language:** Objective-C

**Framework:** Kernel

Must be called by physical battery controller when battery state has changed significantly.

## Declaration

```objectivec
virtual void updateStatus(
 void); 
```

<a id="overview"></a>

## Overview

The system will not poll this object for battery updates. Rather \\ the battery's controller must call updateStatus() every time state changes \\ and the settings will be relayed to higher levels of power management. \\ The subclassing driver should override this only if the driver needs to add \\ new settings to the base class.

## See Also

### Miscellaneous

- [powerSource](1809904-powersource.md): Creates a new IOPMPowerSource nub. Must be attached to IORegistry, and registered by provider.
- [setPSProperty](1809917-setpsproperty.md)
