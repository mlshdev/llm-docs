> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/event](https://developer.apple.com/documentation/foundation/stream/event)

# Stream.Event (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream(\_:handle:)](../streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.

## Declaration

```swift
struct Event
```

## Topics

### Constants

- [openCompleted](event/opencompleted.md): The open has completed successfully.
- [hasBytesAvailable](event/hasbytesavailable.md): The stream has bytes to be read.
- [hasSpaceAvailable](event/hasspaceavailable.md): The stream can accept bytes for writing.
- [errorOccurred](event/erroroccurred.md): An error has occurred on the stream.
- [endEncountered](event/endencountered.md): The end of the stream has been reached.

### Initializers

- [init(rawValue:)](event/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [Stream.Status](status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](../stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](streamstatus.md).
- [StreamNetworkServiceTypeValue](../streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [StreamSOCKSProxyConfiguration](../streamsocksproxyconfiguration.md)
- [StreamSOCKSProxyVersion](../streamsocksproxyversion.md)
- [StreamSocketSecurityLevel](../streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [Stream.PropertyKey](propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](../nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](../nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

# NSStreamEvent (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](../streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.

## Declaration

```objectivec
enum NSStreamEvent : NSUInteger;
```

## Topics

### Constants

- [NSStreamEventOpenCompleted](event/opencompleted.md): The open has completed successfully.
- [NSStreamEventHasBytesAvailable](event/hasbytesavailable.md): The stream has bytes to be read.
- [NSStreamEventHasSpaceAvailable](event/hasspaceavailable.md): The stream can accept bytes for writing.
- [NSStreamEventErrorOccurred](event/erroroccurred.md): An error has occurred on the stream.
- [NSStreamEventEndEncountered](event/endencountered.md): The end of the stream has been reached.
- [NSStreamEventNone](../nsstreamevent/nsstreameventnone.md): No event has occurred.

## See Also

### Constants

- [NSStreamStatus](status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](../stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](streamstatus.md).
- [NSStreamNetworkServiceTypeValue](../streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](../streamsocksproxyconfiguration.md)
- [NSStreamSOCKSProxyVersion](../streamsocksproxyversion.md)
- [NSStreamSocketSecurityLevel](../streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamPropertyKey](propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](property%28forkey_%29.md) and setting properties with [setProperty:forKey:](setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](../nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](../nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.
