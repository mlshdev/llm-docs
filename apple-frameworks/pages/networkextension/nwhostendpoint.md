> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwhostendpoint](https://developer.apple.com/documentation/networkextension/nwhostendpoint)

# NWHostEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A network endpoint specified by DNS name (or IP address) and port.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWHostEndpoint
```

## Topics

### Initializing host endpoints

- [init(hostname:port:)](nwhostendpoint/init%28hostname_port_%29.md): Deprecated. Create a host endpoint with a hostname and port.

### Getting endpoint properties

- [hostname](nwhostendpoint/hostname.md): Deprecated. The endpoint’s hostname.
- [port](nwhostendpoint/port.md): Deprecated. The endpoint’s port, represented as a string.

## Relationships

### Inherits From

- [NWEndpoint](nwendpoint.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Endpoints

- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

# NWHostEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A network endpoint specified by DNS name (or IP address) and port.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWHostEndpoint : NWEndpoint
```

## Topics

### Initializing host endpoints

- [endpointWithHostname:port:](nwhostendpoint/init%28hostname_port_%29.md): Deprecated. Create a host endpoint with a hostname and port.

### Getting endpoint properties

- [hostname](nwhostendpoint/hostname.md): Deprecated. The endpoint’s hostname.
- [port](nwhostendpoint/port.md): Deprecated. The endpoint’s port, represented as a string.

## Relationships

### Inherits From

- [NWEndpoint](nwendpoint.md)

## See Also

### Endpoints

- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.
