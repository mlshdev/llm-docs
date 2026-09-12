> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kwsfaultcode](https://developer.apple.com/documentation/coreservices/kwsfaultcode)

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
