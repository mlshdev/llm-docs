> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/usbnotificationtypes/kusbnotificationpreforcedresume

# kUSBNotificationPreForcedResume

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

The system sends a notification before a resume, which occurs after a forced suspend.

## Declaration

```objectivec
kUSBNotificationPreForcedResume = (1 << kUSBNotificationPreForcedResumeBit)
```
