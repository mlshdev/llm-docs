> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwbonjourserviceendpoint](https://developer.apple.com/documentation/networkextension/nwbonjourserviceendpoint)

# NWBonjourServiceEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A network endpoint specified as a Bonjour service name, type, and domain.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWBonjourServiceEndpoint
```

<a id="overview"></a>

## Overview

For example, the Bonjour service `MyMusicStudio._music._tcp.local.` has the name `"MyMusicStudio"`, the type `"_music._tcp"`, and the domain `"local"`.

## Topics

### Initializing Bonjour service endpoints

- [init(name:type:domain:)](nwbonjourserviceendpoint/init%28name_type_domain_%29.md): Deprecated. Create an endpoint with a Bonjour service name, type, and domain. All fields must be specified.

### Getting endpoint properties

- [name](nwbonjourserviceendpoint/name.md): Deprecated. The endpoint’s Bonjour service name.
- [type](nwbonjourserviceendpoint/type.md): Deprecated. The endpoint’s Bonjour service type.
- [domain](nwbonjourserviceendpoint/domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.

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

- [NWHostEndpoint](nwhostendpoint.md): Deprecated. A network endpoint specified by DNS name (or IP address) and port.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

# NWBonjourServiceEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A network endpoint specified as a Bonjour service name, type, and domain.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWBonjourServiceEndpoint : NWEndpoint
```

<a id="overview"></a>

## Overview

For example, the Bonjour service `MyMusicStudio._music._tcp.local.` has the name `"MyMusicStudio"`, the type `"_music._tcp"`, and the domain `"local"`.

## Topics

### Initializing Bonjour service endpoints

- [endpointWithName:type:domain:](nwbonjourserviceendpoint/init%28name_type_domain_%29.md): Deprecated. Create an endpoint with a Bonjour service name, type, and domain. All fields must be specified.

### Getting endpoint properties

- [name](nwbonjourserviceendpoint/name.md): Deprecated. The endpoint’s Bonjour service name.
- [type](nwbonjourserviceendpoint/type.md): Deprecated. The endpoint’s Bonjour service type.
- [domain](nwbonjourserviceendpoint/domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.

## Relationships

### Inherits From

- [NWEndpoint](nwendpoint.md)

## See Also

### Endpoints

- [NWHostEndpoint](nwhostendpoint.md): Deprecated. A network endpoint specified by DNS name (or IP address) and port.
- [NWEndpoint](nwendpoint.md): Deprecated. An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.
