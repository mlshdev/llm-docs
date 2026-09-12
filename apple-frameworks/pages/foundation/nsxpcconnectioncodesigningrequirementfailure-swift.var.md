> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnectioncodesigningrequirementfailure-swift.var](https://developer.apple.com/documentation/foundation/nsxpcconnectioncodesigningrequirementfailure-swift.var)

# NSXPCConnectionCodeSigningRequirementFailure

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A code-signing requirement check failed.

## Declaration

```swift
var NSXPCConnectionCodeSigningRequirementFailure: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error represents a failure to meet the requirement set by a call to [NSXPCConnection](nsxpcconnection.md)‘s [setCodeSigningRequirement(\_:)](nsxpcconnection/setcodesigningrequirement%28__%29.md) method, or NSXPCConnectionListener’s [setConnectionCodeSigningRequirement(\_:)](nsxpclistener/setconnectioncodesigningrequirement%28__%29.md) method.

## See Also

### Error codes

- [NSXPCConnectionInterrupted](nsxpcconnectioninterrupted-swift.var.md): The XPC connection was interrupted.
- [NSXPCConnectionInvalid](nsxpcconnectioninvalid-swift.var.md): The XPC connection was invalid.
- [NSXPCConnectionReplyInvalid](nsxpcconnectionreplyinvalid-swift.var.md): The XPC connection reply was invalid.
- [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-swift.var.md): The lower bounds of XPC connection error code values.
- [NSXPCConnectionErrorMaximum](nsxpcconnectionerrormaximum-swift.var.md): The upper bounds of XPC connection error code values.
