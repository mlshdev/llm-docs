> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kwsfaultextra](https://developer.apple.com/documentation/coreservices/kwsfaultextra)

# kWSFaultExtra

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.8)

If the result is a fault, and the fault is a network error, the key returns a CFDictionary with the network error. This key may also return a CFString, or `NULL`.

## Declaration

```objectivec
CFStringRef kWSFaultExtra;
```
