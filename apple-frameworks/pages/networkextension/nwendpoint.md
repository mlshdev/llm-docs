> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwendpoint](https://developer.apple.com/documentation/networkextension/nwendpoint)

# NWEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWEndpoint
```

<a id="overview"></a>

## Overview

All endpoint objects are static collections of parameters that describe a network resource. They do not directly provide any resolution services, but instead must be used with other classes to be resolved and create connections.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md)
- [NWHostEndpoint](nwhostendpoint.md)

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
- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.

# NWEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An abstract base class, shared by [NWHostEndpoint](nwhostendpoint.md) or [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md), that represents the source or destination of a network connection.

> Use the [nw_endpoint_t](../network/nw_endpoint_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWEndpoint : NSObject
```

<a id="overview"></a>

## Overview

All endpoint objects are static collections of parameters that describe a network resource. They do not directly provide any resolution services, but instead must be used with other classes to be resolved and create connections.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md)
- [NWHostEndpoint](nwhostendpoint.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Endpoints

- [NWHostEndpoint](nwhostendpoint.md): Deprecated. A network endpoint specified by DNS name (or IP address) and port.
- [NWBonjourServiceEndpoint](nwbonjourserviceendpoint.md): Deprecated. A network endpoint specified as a Bonjour service name, type, and domain.
