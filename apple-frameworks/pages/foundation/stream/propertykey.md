> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/propertykey](https://developer.apple.com/documentation/foundation/stream/propertykey)

# Stream.PropertyKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](setproperty%28__forkey_%29.md):

## Declaration

```swift
struct PropertyKey
```

## Topics

### Type Properties

- [dataWrittenToMemoryStreamKey](propertykey/datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [fileCurrentOffsetKey](propertykey/filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [networkServiceType](propertykey/networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [socketSecurityLevelKey](propertykey/socketsecuritylevelkey.md)
- [socksProxyConfigurationKey](propertykey/socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

### Initializers

- [init(\_:)](propertykey/init%28__%29.md)
- [init(rawValue:)](propertykey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Stream.Status](status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](../stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](streamstatus.md).
- [Stream.Event](event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream(\_:handle:)](../streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [StreamNetworkServiceTypeValue](../streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [StreamSOCKSProxyConfiguration](../streamsocksproxyconfiguration.md)
- [StreamSOCKSProxyVersion](../streamsocksproxyversion.md)
- [StreamSocketSecurityLevel](../streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamSocketSSLErrorDomain](../nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](../nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# NSStreamPropertyKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](property%28forkey_%29.md) and setting properties with [setProperty:forKey:](setproperty%28__forkey_%29.md):

## Declaration

```objectivec
typedef NSString * NSStreamPropertyKey;
```

## Topics

### Type Properties

- [NSStreamDataWrittenToMemoryStreamKey](propertykey/datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [NSStreamFileCurrentOffsetKey](propertykey/filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [NSStreamNetworkServiceType](propertykey/networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [NSStreamSocketSecurityLevelKey](propertykey/socketsecuritylevelkey.md)
- [NSStreamSOCKSProxyConfigurationKey](propertykey/socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

## See Also

### Constants

- [NSStreamStatus](status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](../stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](streamstatus.md).
- [NSStreamEvent](event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](../streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](../streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](../streamsocksproxyconfiguration.md)
- [NSStreamSOCKSProxyVersion](../streamsocksproxyversion.md)
- [NSStreamSocketSecurityLevel](../streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamSocketSSLErrorDomain](../nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](../nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
