> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstaterecoverydeadline

# kIOUSB30LinkStateRecoveryDeadline

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kIOUSB30LinkStateRecoveryDeadline = (kIOUSB30LinkStateRecoveryActiveTimeout + kIOUSB30LinkStateRecoveryConfigurationTimeout + kIOUSB30LinkStateRecoveryIdleTimeout + 1 /* margin */)
```
