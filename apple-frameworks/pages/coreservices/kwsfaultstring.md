> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kwsfaultstring

# kWSFaultString

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.8)

If the result is a fault, this key returns a CFString with the fault type. If the fault type is `kWSNetworkStreamFaultString`, then the fault is a network error. In the case of a network error, `kWSFaultCode` should be ignored, and `kWSFaultExtra` returns a dictionary indicating the network error.

## Declaration

```objectivec
CFStringRef kWSFaultString;
```
