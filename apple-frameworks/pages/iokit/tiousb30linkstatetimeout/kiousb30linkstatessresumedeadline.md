> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/tiousb30linkstatetimeout/kiousb30linkstatessresumedeadline

# kIOUSB30LinkStateSSResumeDeadline

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```objectivec
kIOUSB30LinkStateSSResumeDeadline = (kIOUSB30LinkStateU3WakeupRetryDelay /* accomodation for retimer */ + kIOUSB30LinkStateU3NoLFPSResponseTimeout + kIOUSB30LinkStateRecoveryActiveTimeout + kIOUSB30LinkStateRecoveryConfigurationTimeout + kIOUSB30LinkStateRecoveryIdleTimeout)
```
