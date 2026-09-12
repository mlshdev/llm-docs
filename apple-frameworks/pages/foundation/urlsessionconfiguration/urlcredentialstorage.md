> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/urlcredentialstorage](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/urlcredentialstorage)

# urlCredentialStorage (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A credential store that provides credentials for authentication.

## Declaration

```swift
var urlCredentialStorage: URLCredentialStorage? { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the credential storage object used by tasks within sessions based on this configuration.

If you don’t want to use a credential store, set this property to `nil`.

For default and background sessions, the default value is the [shared](../urlcredentialstorage/shared.md) credential store object.

For [ephemeral](ephemeral.md) sessions, the default value is a private credential store object that stores data in memory only, and is destroyed when you invalidate the session.

## See Also

### Setting security policies

- [tlsMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [tlsMaximumSupportedProtocolVersion](tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [tlsMinimumSupportedProtocol](tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [tlsMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)

# URLCredentialStorage (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A credential store that provides credentials for authentication.

## Declaration

```objectivec
@property (retain, nullable) NSURLCredentialStorage * URLCredentialStorage;
```

<a id="Discussion"></a>

## Discussion

This property determines the credential storage object used by tasks within sessions based on this configuration.

If you don’t want to use a credential store, set this property to `nil`.

For default and background sessions, the default value is the [sharedCredentialStorage](../urlcredentialstorage/shared.md) credential store object.

For [ephemeralSessionConfiguration](ephemeral.md) sessions, the default value is a private credential store object that stores data in memory only, and is destroyed when you invalidate the session.

## See Also

### Setting security policies

- [TLSMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [TLSMaximumSupportedProtocolVersion](tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [TLSMinimumSupportedProtocol](tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [TLSMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)
