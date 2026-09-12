> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstaterecoverydeadline](https://developer.apple.com/documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstaterecoverydeadline)

# kIOUSB30LinkStateRecoveryDeadline

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kIOUSB30LinkStateRecoveryDeadline = (kIOUSB30LinkStateRecoveryActiveTimeout + kIOUSB30LinkStateRecoveryConfigurationTimeout + kIOUSB30LinkStateRecoveryIdleTimeout + 1 /* margin */)
```
