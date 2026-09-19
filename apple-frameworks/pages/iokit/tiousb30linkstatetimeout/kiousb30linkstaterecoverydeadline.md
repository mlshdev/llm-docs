> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/tiousb30linkstatetimeout/kiousb30linkstaterecoverydeadline

# kIOUSB30LinkStateRecoveryDeadline

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
kIOUSB30LinkStateRecoveryDeadline = (kIOUSB30LinkStateRecoveryActiveTimeout + kIOUSB30LinkStateRecoveryConfigurationTimeout + kIOUSB30LinkStateRecoveryIdleTimeout + 1 /* margin */)
```
