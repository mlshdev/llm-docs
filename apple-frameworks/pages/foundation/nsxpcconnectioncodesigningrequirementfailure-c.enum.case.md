> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnectioncodesigningrequirementfailure-c.enum.case](https://developer.apple.com/documentation/foundation/nsxpcconnectioncodesigningrequirementfailure-c.enum.case)

# NSXPCConnectionCodeSigningRequirementFailure

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A code-signing requirement check failed.

## Declaration

```objectivec
NSXPCConnectionCodeSigningRequirementFailure
```

<a id="Discussion"></a>

## Discussion

This error represents a failure to meet the requirement set by a call to [NSXPCConnection](nsxpcconnection.md)‘s [setCodeSigningRequirement:](nsxpcconnection/setcodesigningrequirement%28__%29.md) method, or NSXPCConnectionListener’s [setConnectionCodeSigningRequirement:](nsxpclistener/setconnectioncodesigningrequirement%28__%29.md) method.

## See Also

### Error codes

- [NSXPCConnectionInterrupted](nsxpcconnectioninterrupted-c.enum.case.md): The XPC connection was interrupted.
- [NSXPCConnectionInvalid](nsxpcconnectioninvalid-c.enum.case.md): The XPC connection was invalid.
- [NSXPCConnectionReplyInvalid](nsxpcconnectionreplyinvalid-c.enum.case.md): The XPC connection reply was invalid.
- [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-c.enum.case.md): The lower bounds of XPC connection error code values.
- [NSXPCConnectionErrorMaximum](nsxpcconnectionerrormaximum-c.enum.case.md): The upper bounds of XPC connection error code values.
