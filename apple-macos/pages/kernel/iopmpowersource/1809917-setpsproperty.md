> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowersource/1809917-setpsproperty](https://developer.apple.com/documentation/kernel/iopmpowersource/1809917-setpsproperty)

# setPSProperty

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
void setPSProperty(
 const OSSymbol *,
 OSObject *); 
```

<a id="overview"></a>

## Overview

All of these methods funnel through the generic accessor method setPSProperty. Caller can pass in any arbitrary OSSymbol key, and that value will be stored in the PM settings dictionary, and relayed onto the IORegistry at update time.

## See Also

### Miscellaneous

- [powerSource](1809904-powersource.md): Creates a new IOPMPowerSource nub. Must be attached to IORegistry, and registered by provider.
- [updateStatus](1809926-updatestatus.md): Must be called by physical battery controller when battery state has changed significantly.
