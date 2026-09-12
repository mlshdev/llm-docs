> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessionsenddatamode](https://developer.apple.com/documentation/multipeerconnectivity/mcsessionsenddatamode)

# MCSessionSendDataMode (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether delivery of data should be guaranteed.

> Use Network Framework instead

## Declaration

```swift
enum MCSessionSendDataMode
```

## Topics

### Constants

- [MCSessionSendDataMode.reliable](mcsessionsenddatamode/reliable.md): Deprecated. The framework should guarantee delivery of each message, enqueueing and retransmitting data as needed, and ensuring in-order delivery.
- [MCSessionSendDataMode.unreliable](mcsessionsenddatamode/unreliable.md): Deprecated. Messages to peers should be sent immediately without socket-level queueing. If a message cannot be sent immediately, it should be dropped. The order of messages is not guaranteed.

### Initializers

- [init(rawValue:)](mcsessionsenddatamode/init%28rawvalue_%29.md): Deprecated.

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

- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCError.Code](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

# MCSessionSendDataMode (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether delivery of data should be guaranteed.

> Use Network Framework instead

## Declaration

```objectivec
enum MCSessionSendDataMode : NSInteger;
```

## Topics

### Constants

- [MCSessionSendDataReliable](mcsessionsenddatamode/reliable.md): Deprecated. The framework should guarantee delivery of each message, enqueueing and retransmitting data as needed, and ensuring in-order delivery.
- [MCSessionSendDataUnreliable](mcsessionsenddatamode/unreliable.md): Deprecated. Messages to peers should be sent immediately without socket-level queueing. If a message cannot be sent immediately, it should be dropped. The order of messages is not guaranteed.

## See Also

### Constants

- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCErrorCode](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.
