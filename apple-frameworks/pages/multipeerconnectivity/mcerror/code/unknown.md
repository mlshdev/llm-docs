> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcerror/code/unknown](https://developer.apple.com/documentation/multipeerconnectivity/mcerror/code/unknown)

# MCError.Code.unknown (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An unknown error occurred.

> Use Network Framework instead

## Declaration

```swift
case unknown
```

## See Also

### Constants

- [MCError.Code.notConnected](notconnected.md): Deprecated. Your app attempted to send data to a peer that is not connected.
- [MCError.Code.invalidParameter](invalidparameter.md): Deprecated. Your app passed an invalid value as a parameter.
- [MCError.Code.unsupported](unsupported.md): Deprecated. The operation is unsupported. For example, this error is returned if you call [sendResource(at:withName:toPeer:withCompletionHandler:)](../../mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) with a URL that is neither a local file nor a web URL.
- [MCError.Code.timedOut](timedout.md): Deprecated. The connection attempt timed out.
- [MCError.Code.cancelled](cancelled.md): Deprecated. The operation was cancelled by the user.
- [MCError.Code.unavailable](unavailable.md): Deprecated. Multipeer connectivity is currently unavailable.

# MCErrorUnknown (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An unknown error occurred.

> Use Network Framework instead

## Declaration

```objectivec
MCErrorUnknown
```

## See Also

### Constants

- [MCErrorNotConnected](notconnected.md): Deprecated. Your app attempted to send data to a peer that is not connected.
- [MCErrorInvalidParameter](invalidparameter.md): Deprecated. Your app passed an invalid value as a parameter.
- [MCErrorUnsupported](unsupported.md): Deprecated. The operation is unsupported. For example, this error is returned if you call [sendResourceAtURL:withName:toPeer:withCompletionHandler:](../../mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) with a URL that is neither a local file nor a web URL.
- [MCErrorTimedOut](timedout.md): Deprecated. The connection attempt timed out.
- [MCErrorCancelled](cancelled.md): Deprecated. The operation was cancelled by the user.
- [MCErrorUnavailable](unavailable.md): Deprecated. Multipeer connectivity is currently unavailable.
