> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocksproxyconfiguration](https://developer.apple.com/documentation/foundation/streamsocksproxyconfiguration)

# StreamSOCKSProxyConfiguration (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct StreamSOCKSProxyConfiguration
```

## Topics

### Type Properties

- [hostKey](streamsocksproxyconfiguration/hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [passwordKey](streamsocksproxyconfiguration/passwordkey.md): Value is an `NSString` object containing the user’s password.
- [portKey](streamsocksproxyconfiguration/portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [userKey](streamsocksproxyconfiguration/userkey.md): Value is an `NSString` object containing the user’s name.
- [versionKey](streamsocksproxyconfiguration/versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

### Initializers

- [init(rawValue:)](streamsocksproxyconfiguration/init%28rawvalue_%29.md)

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
- [StreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [StreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [Stream.PropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](stream/property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# NSStreamSOCKSProxyConfiguration (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef NSString * NSStreamSOCKSProxyConfiguration;
```

## Topics

### Type Properties

- [NSStreamSOCKSProxyHostKey](streamsocksproxyconfiguration/hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [NSStreamSOCKSProxyPasswordKey](streamsocksproxyconfiguration/passwordkey.md): Value is an `NSString` object containing the user’s password.
- [NSStreamSOCKSProxyPortKey](streamsocksproxyconfiguration/portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [NSStreamSOCKSProxyUserKey](streamsocksproxyconfiguration/userkey.md): Value is an `NSString` object containing the user’s name.
- [NSStreamSOCKSProxyVersionKey](streamsocksproxyconfiguration/versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

## See Also

### Constants

- [NSStreamStatus](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [NSStreamEvent](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [NSStreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamPropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](stream/property%28forkey_%29.md) and setting properties with [setProperty:forKey:](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
