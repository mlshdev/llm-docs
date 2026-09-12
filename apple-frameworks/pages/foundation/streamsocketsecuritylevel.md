> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocketsecuritylevel](https://developer.apple.com/documentation/foundation/streamsocketsecuritylevel)

# StreamSocketSecurityLevel (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.

## Declaration

```swift
struct StreamSocketSecurityLevel
```

<a id="Discussion"></a>

## Discussion

You access and set these values using the `NSStreamSocketSecurityLevelKey` property key.

## Topics

### Type Properties

- [negotiatedSSL](streamsocketsecuritylevel/negotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [none](streamsocketsecuritylevel/none.md): Specifies that no security level be set for a socket stream.
- [ssLv2](streamsocketsecuritylevel/sslv2.md): Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [ssLv3](streamsocketsecuritylevel/sslv3.md): Specifies that SSL version 3 be set as the security protocol for a socket stream.
- [tlSv1](streamsocketsecuritylevel/tlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.

### Initializers

- [init(rawValue:)](streamsocketsecuritylevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Stream.Status](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [Stream.Event](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream(\_:handle:)](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [StreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [StreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [StreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [Stream.PropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](stream/property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# NSStreamSocketSecurityLevel (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.

## Declaration

```objectivec
typedef NSString * NSStreamSocketSecurityLevel;
```

<a id="Discussion"></a>

## Discussion

You access and set these values using the `NSStreamSocketSecurityLevelKey` property key.

## Topics

### Type Properties

- [NSStreamSocketSecurityLevelNegotiatedSSL](streamsocketsecuritylevel/negotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [NSStreamSocketSecurityLevelNone](streamsocketsecuritylevel/none.md): Specifies that no security level be set for a socket stream.
- [NSStreamSocketSecurityLevelSSLv2](streamsocketsecuritylevel/sslv2.md): Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [NSStreamSocketSecurityLevelSSLv3](streamsocketsecuritylevel/sslv3.md): Specifies that SSL version 3 be set as the security protocol for a socket stream.
- [NSStreamSocketSecurityLevelTLSv1](streamsocketsecuritylevel/tlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.

## See Also

### Constants

- [NSStreamStatus](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [NSStreamEvent](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [NSStreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [NSStreamPropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](stream/property%28forkey_%29.md) and setting properties with [setProperty:forKey:](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
