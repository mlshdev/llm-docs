> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kwsmethodinvocationresult](https://developer.apple.com/documentation/coreservices/kwsmethodinvocationresult)

# kWSMethodInvocationResult

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Dictionary entry if the invocation result is not a fault.  If you don't know what field to ask for, you can ask for this key.  You can also specify the name of a reply parameter in the invocation using `kWSMethodInvocationResultParameterName`. This will add an alias for the given name to the result dictionary so that this key will return the named parameter.

## Declaration

```objectivec
CFStringRef kWSMethodInvocationResult;
```
