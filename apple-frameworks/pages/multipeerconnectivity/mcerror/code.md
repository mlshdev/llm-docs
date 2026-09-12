> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcerror/code](https://developer.apple.com/documentation/multipeerconnectivity/mcerror/code)

# MCError.Code (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Error codes found in [MCErrorDomain](../mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.

> Use Network Framework instead

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [MCError.Code.unknown](code/unknown.md): Deprecated. An unknown error occurred.
- [MCError.Code.notConnected](code/notconnected.md): Deprecated. Your app attempted to send data to a peer that is not connected.
- [MCError.Code.invalidParameter](code/invalidparameter.md): Deprecated. Your app passed an invalid value as a parameter.
- [MCError.Code.unsupported](code/unsupported.md): Deprecated. The operation is unsupported. For example, this error is returned if you call [sendResource(at:withName:toPeer:withCompletionHandler:)](../mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) with a URL that is neither a local file nor a web URL.
- [MCError.Code.timedOut](code/timedout.md): Deprecated. The connection attempt timed out.
- [MCError.Code.cancelled](code/cancelled.md): Deprecated. The operation was cancelled by the user.
- [MCError.Code.unavailable](code/unavailable.md): Deprecated. Multipeer connectivity is currently unavailable.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MCSessionSendDataMode](../mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCSessionState](../mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](../mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [Multipeer Connectivity Error Domain](../multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](../minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

# MCErrorCode (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Error codes found in [MCErrorDomain](../mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.

> Use Network Framework instead

## Declaration

```objectivec
enum MCErrorCode : NSInteger;
```

## Topics

### Constants

- [MCErrorUnknown](code/unknown.md): Deprecated. An unknown error occurred.
- [MCErrorNotConnected](code/notconnected.md): Deprecated. Your app attempted to send data to a peer that is not connected.
- [MCErrorInvalidParameter](code/invalidparameter.md): Deprecated. Your app passed an invalid value as a parameter.
- [MCErrorUnsupported](code/unsupported.md): Deprecated. The operation is unsupported. For example, this error is returned if you call [sendResourceAtURL:withName:toPeer:withCompletionHandler:](../mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) with a URL that is neither a local file nor a web URL.
- [MCErrorTimedOut](code/timedout.md): Deprecated. The connection attempt timed out.
- [MCErrorCancelled](code/cancelled.md): Deprecated. The operation was cancelled by the user.
- [MCErrorUnavailable](code/unavailable.md): Deprecated. Multipeer connectivity is currently unavailable.

## See Also

### Constants

- [MCSessionSendDataMode](../mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCSessionState](../mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](../mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [Multipeer Connectivity Error Domain](../multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](../minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.
