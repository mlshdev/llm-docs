> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnectionerrormaximum-swift.var](https://developer.apple.com/documentation/foundation/nsxpcconnectionerrormaximum-swift.var)

# NSXPCConnectionErrorMaximum

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The upper bounds of XPC connection error code values.

## Declaration

```swift
var NSXPCConnectionErrorMaximum: Int { get }
```

<a id="Discussion"></a>

## Discussion

All XPC error codes have values between [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-swift.var.md) and [NSXPCConnectionErrorMaximum](nsxpcconnectionerrormaximum-swift.var.md), exclusive. This constant does not correspond to any particular error.

## See Also

### Error codes

- [NSXPCConnectionInterrupted](nsxpcconnectioninterrupted-swift.var.md): The XPC connection was interrupted.
- [NSXPCConnectionInvalid](nsxpcconnectioninvalid-swift.var.md): The XPC connection was invalid.
- [NSXPCConnectionReplyInvalid](nsxpcconnectionreplyinvalid-swift.var.md): The XPC connection reply was invalid.
- [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-swift.var.md): The lower bounds of XPC connection error code values.
- [NSXPCConnectionCodeSigningRequirementFailure](nsxpcconnectioncodesigningrequirementfailure-swift.var.md): A code-signing requirement check failed.
