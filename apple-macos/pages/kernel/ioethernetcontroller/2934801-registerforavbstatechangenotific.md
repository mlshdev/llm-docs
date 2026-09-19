> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934801-registerforavbstatechangenotific

# registerForAVBStateChangeNotifications

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
IOReturn registerForAVBStateChangeNotifications(avb_state_callback_t callback, void *context);
```
