> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/bonjour/endpoint](https://developer.apple.com/documentation/network/bonjour/endpoint)

# Bonjour.Endpoint

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An endpoint for a discovered Bonjour service.

## Declaration

```swift
struct Endpoint
```

## Topics

### Operators

- [==(\_:\_:)](endpoint/==%28____%29.md): Compare two endpoints for equality.

### Instance Properties

- [description](endpoint/description.md): A description of this endpoint to be used for logging and debugging purposes.
- [domain](endpoint/domain.md): The Bonjour domain of the endpoint.
- [id](endpoint/id.md): A unique identifer for the endpoint.
- [name](endpoint/name.md): The Bonjour name of the endpoint.
- [nwEndpoint](endpoint/nwendpoint.md): The NWEndpoint to use when connecting to this result.
- [result](endpoint/result.md): A snapshot of the endpoint at some point in time on the network.
- [txtRecord](endpoint/txtrecord.md): TXT records provide additional information about an endpoint during advertisement or discovery.
- [type](endpoint/type.md): The Bonjour type of the endpoint.

## Relationships

### Conforms To

- [Connectable](../connectable.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
