> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstatepollingdeadline](https://developer.apple.com/documentation/kernel/tiousb30linkstatetimeout/kiousb30linkstatepollingdeadline)

# kIOUSB30LinkStatePollingDeadline

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

The polling deadline.

## Declaration

```objectivec
kIOUSB30LinkStatePollingDeadline = (kIOUSB30LinkStatePollingLFPSTimeout + 1 + kIOUSB30LinkStatePollingActiveTimeout + kIOUSB30LinkStatePollingConfigurationTimeout + kIOUSB30LinkStatePollingIdleTimeout)
```
