> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/host](https://developer.apple.com/documentation/foundation/host)

# Host (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A representation of an individual host on the network.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
class Host
```

<a id="overview"></a>

## Overview

The [Host](host.md) class provides methods to access the network name and address information for a host. Instances of the [Host](host.md) class represent individual *hosts* on a network. Use [Host](host.md) objects  to get the current host’s names and addresses and to look up other hosts by name or by address.

To create an [Host](host.md) object, use the [current()](host/current%28%29.md), [init(address:)](host/init%28address_%29.md), or [init(name:)](host/init%28name_%29.md) class methods (don’t use `alloc` and `init`). These methods use available network administration services to discover all names and addresses for the host requested. They don’t attempt to contact the host itself, however. This approach avoids untimely delays due to a host being unavailable, but it may result in incomplete information about the host.

An [Host](host.md) object contains all of the network addresses and names discovered for a given host by the network administration services. Each [Host](host.md) object may contain several addresses and have more than one name. If an [Host](host.md) object has more than one name, the additional names are variations on the same name, typically the basic host name plus the fully qualified domain name. For example, with a host name `"sales"` in the domain `"anycorp.com"`, an [Host](host.md) object can hold both the names `"sales"` and `"sales.anycorp.com"`.

[Host](host.md) methods are thread-safe.

## Topics

### Creating Hosts

- [current()](host/current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [init(address:)](host/init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.
- [init(name:)](host/init%28name_%29.md): Deprecated. Returns a host with a specific name.

### Getting Host Information

- [address](host/address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](host/addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](host/name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](host/localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.
- [names](host/names.md): Deprecated. Returns all the hostnames of the receiver.

### Comparing Hosts

- [isEqual(to:)](host/isequal%28to_%29.md): Deprecated. Indicates whether the receiver represents the same host as another `NSHost` object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sockets

- [Port](port.md): An abstract class that represents a communication channel.
- [SocketPort](socketport.md): A port that represents a BSD socket.

# NSHost (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A representation of an individual host on the network.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
@interface NSHost : NSObject
```

<a id="overview"></a>

## Overview

The [NSHost](host.md) class provides methods to access the network name and address information for a host. Instances of the [NSHost](host.md) class represent individual *hosts* on a network. Use [NSHost](host.md) objects  to get the current host’s names and addresses and to look up other hosts by name or by address.

To create an [NSHost](host.md) object, use the [currentHost](host/current%28%29.md), [hostWithAddress:](host/init%28address_%29.md), or [hostWithName:](host/init%28name_%29.md) class methods (don’t use `alloc` and `init`). These methods use available network administration services to discover all names and addresses for the host requested. They don’t attempt to contact the host itself, however. This approach avoids untimely delays due to a host being unavailable, but it may result in incomplete information about the host.

An [NSHost](host.md) object contains all of the network addresses and names discovered for a given host by the network administration services. Each [NSHost](host.md) object may contain several addresses and have more than one name. If an [NSHost](host.md) object has more than one name, the additional names are variations on the same name, typically the basic host name plus the fully qualified domain name. For example, with a host name `"sales"` in the domain `"anycorp.com"`, an [NSHost](host.md) object can hold both the names `"sales"` and `"sales.anycorp.com"`.

[NSHost](host.md) methods are thread-safe.

## Topics

### Creating Hosts

- [currentHost](host/current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [hostWithAddress:](host/init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.
- [hostWithName:](host/init%28name_%29.md): Deprecated. Returns a host with a specific name.

### Getting Host Information

- [address](host/address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](host/addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](host/name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](host/localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.
- [names](host/names.md): Deprecated. Returns all the hostnames of the receiver.

### Comparing Hosts

- [isEqualToHost:](host/isequal%28to_%29.md): Deprecated. Indicates whether the receiver represents the same host as another `NSHost` object.

### Managing the Host Cache

- [isHostCacheEnabled](nshost/ishostcacheenabled.md): Deprecated. Indicates whether caching is turned on or off.
- [setHostCacheEnabled:](nshost/sethostcacheenabled_.md): Deprecated. Specifies whether the receiver is to cache instances as it creates them to avoid creating duplicate instances.
- [flushHostCache](nshost/flushhostcache.md): Deprecated. Releases the cache of existing `NSHost` objects so subsequent requests for `NSHost` objects create new ones.

### Instance Variables

- [addresses](nshost/addresses-c.ivar.md): Deprecated.
- [names](nshost/names-c.ivar.md): Deprecated.
- [reserved](nshost/reserved.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sockets

- [NSPort](port.md): An abstract class that represents a communication channel.
- [NSSocketPort](socketport.md): A port that represents a BSD socket.
