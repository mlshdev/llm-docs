> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstatessresumedeadline](https://developer.apple.com/documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstatessresumedeadline)

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
