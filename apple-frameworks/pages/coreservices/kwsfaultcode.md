> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kwsfaultcode

# kWSFaultCode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.8)

If the result is a fault, this key returns a CFNumber with the fault code, unless the fault is a network error, in which case this field should be ignored.

## Declaration

```objectivec
CFStringRef kWSFaultCode;
```
