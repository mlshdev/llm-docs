> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcencryptionpreference](https://developer.apple.com/documentation/multipeerconnectivity/mcencryptionpreference)

# MCEncryptionPreference (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether a session should use encryption when communicating with nearby peers.

> Use Network Framework instead

## Declaration

```swift
enum MCEncryptionPreference
```

## Topics

### Constants

- [MCEncryptionPreference.optional](mcencryptionpreference/optional.md): Deprecated. The session prefers to use encryption, but accepts unencrypted connections. A connection uses encryption when all the peers choose either [MCEncryptionPreference.optional](mcencryptionpreference/optional.md) or [MCEncryptionPreference.required](mcencryptionpreference/required.md). If some peers choose [MCEncryptionPreference.none](mcencryptionpreference/none.md), then the session will not be encrypted. For this reason, if some peers running your app can be configured without encryption, you should always assume that the session is unencrypted.
- [MCEncryptionPreference.required](mcencryptionpreference/required.md): Deprecated. The session requires encryption.
- [MCEncryptionPreference.none](mcencryptionpreference/none.md): Deprecated. The session should not be encrypted.

### Initializers

- [init(rawValue:)](mcencryptionpreference/init%28rawvalue_%29.md): Deprecated.

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
- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCError.Code](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

# MCEncryptionPreference (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether a session should use encryption when communicating with nearby peers.

> Use Network Framework instead

## Declaration

```objectivec
enum MCEncryptionPreference : NSInteger;
```

## Topics

### Constants

- [MCEncryptionOptional](mcencryptionpreference/optional.md): Deprecated. The session prefers to use encryption, but accepts unencrypted connections. A connection uses encryption when all the peers choose either [MCEncryptionOptional](mcencryptionpreference/optional.md) or [MCEncryptionRequired](mcencryptionpreference/required.md). If some peers choose [MCEncryptionNone](mcencryptionpreference/none.md), then the session will not be encrypted. For this reason, if some peers running your app can be configured without encryption, you should always assume that the session is unencrypted.
- [MCEncryptionRequired](mcencryptionpreference/required.md): Deprecated. The session requires encryption.
- [MCEncryptionNone](mcencryptionpreference/none.md): Deprecated. The session should not be encrypted.

## See Also

### Constants

- [MCSessionSendDataMode](mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCErrorCode](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.
