> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstatessresumedeadline

# kIOUSB30LinkStateSSResumeDeadline

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

The SuperSpeed resume deadline.

## Declaration

```objectivec
kIOUSB30LinkStateSSResumeDeadline = (kIOUSB30LinkStateU3WakeupRetryDelay /* accomodation for retimer */ + kIOUSB30LinkStateU3NoLFPSResponseTimeout + kIOUSB30LinkStateRecoveryActiveTimeout + kIOUSB30LinkStateRecoveryConfigurationTimeout + kIOUSB30LinkStateRecoveryIdleTimeout)
```
