> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kwsfaultstring](https://developer.apple.com/documentation/coreservices/kwsfaultstring)

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
