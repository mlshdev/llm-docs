> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessionstate](https://developer.apple.com/documentation/multipeerconnectivity/mcsessionstate)

# MCSessionState (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates the current state of a given peer within a session.

> Use Network Framework instead

## Declaration

```swift
enum MCSessionState
```

## Topics

### Constants

- [MCSessionState.notConnected](mcsessionstate/notconnected.md): Deprecated. The peer is not (or is no longer) in this session.
- [MCSessionState.connecting](mcsessionstate/connecting.md): Deprecated. A connection to the peer is currently being established.
- [MCSessionState.connected](mcsessionstate/connected.md): Deprecated. The peer is connected to this session.

### Initializers

- [init(rawValue:)](mcsessionstate/init%28rawvalue_%29.md): Deprecated.

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

- [MCSessionSendDataMode](mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCError.Code](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

# MCSessionState (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates the current state of a given peer within a session.

> Use Network Framework instead

## Declaration

```objectivec
enum MCSessionState : NSInteger;
```

## Topics

### Constants

- [MCSessionStateNotConnected](mcsessionstate/notconnected.md): Deprecated. The peer is not (or is no longer) in this session.
- [MCSessionStateConnecting](mcsessionstate/connecting.md): Deprecated. A connection to the peer is currently being established.
- [MCSessionStateConnected](mcsessionstate/connected.md): Deprecated. The peer is connected to this session.

## See Also

### Constants

- [MCSessionSendDataMode](mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCErrorCode](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.
