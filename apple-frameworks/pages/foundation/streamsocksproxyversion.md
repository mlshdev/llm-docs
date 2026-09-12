> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocksproxyversion](https://developer.apple.com/documentation/foundation/streamsocksproxyversion)

# StreamSOCKSProxyVersion (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct StreamSOCKSProxyVersion
```

## Topics

### Type Properties

- [version4](streamsocksproxyversion/version4.md): Possible value for `NSStreamSOCKSProxyVersionKey`.
- [version5](streamsocksproxyversion/version5.md): Possible value for `NSStreamSOCKSProxyVersionKey`.

### Initializers

- [init(rawValue:)](streamsocksproxyversion/init%28rawvalue_%29.md)

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
- [StreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [Stream.PropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](stream/property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# NSStreamSOCKSProxyVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef NSString * NSStreamSOCKSProxyVersion;
```

## Topics

### Type Properties

- [NSStreamSOCKSProxyVersion4](streamsocksproxyversion/version4.md): Possible value for `NSStreamSOCKSProxyVersionKey`.
- [NSStreamSOCKSProxyVersion5](streamsocksproxyversion/version5.md): Possible value for `NSStreamSOCKSProxyVersionKey`.

## See Also

### Constants

- [NSStreamStatus](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [NSStreamEvent](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [NSStreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamPropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](stream/property%28forkey_%29.md) and setting properties with [setProperty:forKey:](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
