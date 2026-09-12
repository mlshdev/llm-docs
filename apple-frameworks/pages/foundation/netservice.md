> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice](https://developer.apple.com/documentation/foundation/netservice)

# NetService (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A network service that broadcasts its availability using multicast DNS.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
class NetService
```

<a id="overview"></a>

## Overview

The [NetService](netservice.md) class represents a network service, either one your application publishes or is a client of. This class and the [NetServiceBrowser](netservicebrowser.md) class use multicast DNS to convey information about network services to and from your application. The API of [NetService](netservice.md) provides a convenient way to publish the services offered by your application and to resolve the socket address for a service.

The types of services you access using [NetService](netservice.md) are the same types that you access directly using BSD sockets. HTTP and FTP are two services commonly provided by systems. (For a list of common services and the ports used by those services, see the file `/etc/services`.) Applications can also define their own custom services to provide specific data to clients.

You can use the [NetService](netservice.md) class as either a publisher of a service or a client of a service. If your application publishes a service, your code must acquire a port and prepare a socket to communicate with clients. Once your socket is ready, you use the [NetService](netservice.md) class to notify clients that your service is ready. If your application is the client of a network service, you can either create an [NetService](netservice.md) object directly (if you know the exact host and port information) or use an [NetServiceBrowser](netservicebrowser.md) object to browse for services.

To publish a service, initialize your [NetService](netservice.md) object with the service name, domain, type, and port information. All of this information must be valid for the socket created by your application. Once initialized, call the [publish()](netservice/publish%28%29.md) method to broadcast your service information to the network.

When connecting to a service, use the [NetServiceBrowser](netservicebrowser.md) class to locate the service on the network and obtain the corresponding [NetService](netservice.md) object. Once you have the object, call the [resolve(withTimeout:)](netservice/resolve%28withtimeout_%29.md) method to verify that the service is available and ready for your application. If it is, the [addresses](netservice/addresses.md) property provides the socket information you can use to connect to the service.

The methods of [NetService](netservice.md) operate asynchronously so your application is not impacted by the speed of the network. All information about a service is returned to your application through the [NetService](netservice.md) object’s delegate. You must provide a delegate object to respond to messages and to handle errors appropriately.

## Topics

### Creating Network Services

- [init(domain:type:name:)](netservice/init%28domain_type_name_%29.md): Deprecated. Returns the receiver, initialized as a network service of a given type and sets the initial host information.
- [init(domain:type:name:port:)](netservice/init%28domain_type_name_port_%29.md): Deprecated. Initializes the receiver for publishing a network service of type `type` at the socket location specified by `domain`, `name`, and `port`.

### Configuring Network Services

- [data(fromTXTRecord:)](netservice/data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionary(fromTXTRecord:)](netservice/dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](netservice/addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](netservice/domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](netservice/includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream(\_:outputStream:)](netservice/getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](netservice/name.md): Deprecated. A string containing the name of this service.
- [type](netservice/type.md): Deprecated. The type of the published service.
- [txtRecordData()](netservice/txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecord(\_:)](netservice/settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](netservice/delegate.md): Deprecated. The delegate for the receiver.

### Managing Run Loops

- [schedule(in:forMode:)](netservice/schedule%28in_formode_%29.md): Deprecated. Adds the service to the specified run loop.
- [remove(from:forMode:)](netservice/remove%28from_formode_%29.md): Deprecated. Removes the service from the given run loop for a given mode.

### Using Network Services

- [publish()](netservice/publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publish(options:)](netservice/publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve()](netservice/resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolve(withTimeout:)](netservice/resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](netservice/port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring()](netservice/startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop()](netservice/stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring()](netservice/stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

### Obtaining the DNS Hostname

- [hostName](netservice/hostname.md): Deprecated. A string containing the DNS hostname for this service.

### Constants

- [NSNetServices Errors](nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NetService.ErrorCode](netservice/errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.
- [NetService.Options](netservice/options.md): These constants specify options for a network service.

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

### Local Network Services

- [NetServiceDelegate](netservicedelegate.md): The interface a net service uses to inform its delegate about the state of the service it offers.
- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.

# NSNetService (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A network service that broadcasts its availability using multicast DNS.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
@interface NSNetService : NSObject
```

<a id="overview"></a>

## Overview

The [NSNetService](netservice.md) class represents a network service, either one your application publishes or is a client of. This class and the [NSNetServiceBrowser](netservicebrowser.md) class use multicast DNS to convey information about network services to and from your application. The API of [NSNetService](netservice.md) provides a convenient way to publish the services offered by your application and to resolve the socket address for a service.

The types of services you access using [NSNetService](netservice.md) are the same types that you access directly using BSD sockets. HTTP and FTP are two services commonly provided by systems. (For a list of common services and the ports used by those services, see the file `/etc/services`.) Applications can also define their own custom services to provide specific data to clients.

You can use the [NSNetService](netservice.md) class as either a publisher of a service or a client of a service. If your application publishes a service, your code must acquire a port and prepare a socket to communicate with clients. Once your socket is ready, you use the [NSNetService](netservice.md) class to notify clients that your service is ready. If your application is the client of a network service, you can either create an [NSNetService](netservice.md) object directly (if you know the exact host and port information) or use an [NSNetServiceBrowser](netservicebrowser.md) object to browse for services.

To publish a service, initialize your [NSNetService](netservice.md) object with the service name, domain, type, and port information. All of this information must be valid for the socket created by your application. Once initialized, call the [publish](netservice/publish%28%29.md) method to broadcast your service information to the network.

When connecting to a service, use the [NSNetServiceBrowser](netservicebrowser.md) class to locate the service on the network and obtain the corresponding [NSNetService](netservice.md) object. Once you have the object, call the [resolveWithTimeout:](netservice/resolve%28withtimeout_%29.md) method to verify that the service is available and ready for your application. If it is, the [addresses](netservice/addresses.md) property provides the socket information you can use to connect to the service.

The methods of [NSNetService](netservice.md) operate asynchronously so your application is not impacted by the speed of the network. All information about a service is returned to your application through the [NSNetService](netservice.md) object’s delegate. You must provide a delegate object to respond to messages and to handle errors appropriately.

## Topics

### Creating Network Services

- [initWithDomain:type:name:](netservice/init%28domain_type_name_%29.md): Deprecated. Returns the receiver, initialized as a network service of a given type and sets the initial host information.
- [initWithDomain:type:name:port:](netservice/init%28domain_type_name_port_%29.md): Deprecated. Initializes the receiver for publishing a network service of type `type` at the socket location specified by `domain`, `name`, and `port`.

### Configuring Network Services

- [dataFromTXTRecordDictionary:](netservice/data%28fromtxtrecord_%29.md): Deprecated. Returns an `NSData` object representing a TXT record formed from a given dictionary.
- [dictionaryFromTXTRecordData:](netservice/dictionary%28fromtxtrecord_%29.md): Deprecated. Returns a dictionary representing a TXT record given as an `NSData` object.
- [addresses](netservice/addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.
- [domain](netservice/domain.md): Deprecated. A string containing the domain for this service.
- [includesPeerToPeer](netservice/includespeertopeer.md): Deprecated. Specifies whether to also publish, resolve, or monitor this service over peer-to-peer Bluetooth and Wi-Fi, if available.
- [getInputStream:outputStream:](netservice/getinputstream%28__outputstream_%29.md): Deprecated. Creates a pair of input and output streams for the receiver and returns a Boolean value that indicates whether they were retrieved successfully.
- [name](netservice/name.md): Deprecated. A string containing the name of this service.
- [type](netservice/type.md): Deprecated. The type of the published service.
- [TXTRecordData](netservice/txtrecorddata%28%29.md): Deprecated. Returns the TXT record for the receiver.
- [setTXTRecordData:](netservice/settxtrecord%28__%29.md): Deprecated. Sets the TXT record for the receiver, and returns a Boolean value that indicates whether the operation was successful.
- [delegate](netservice/delegate.md): Deprecated. The delegate for the receiver.

### Managing Run Loops

- [scheduleInRunLoop:forMode:](netservice/schedule%28in_formode_%29.md): Deprecated. Adds the service to the specified run loop.
- [removeFromRunLoop:forMode:](netservice/remove%28from_formode_%29.md): Deprecated. Removes the service from the given run loop for a given mode.

### Using Network Services

- [publish](netservice/publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publishWithOptions:](netservice/publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve](netservice/resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolveWithTimeout:](netservice/resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](netservice/port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring](netservice/startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop](netservice/stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring](netservice/stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

### Obtaining the DNS Hostname

- [hostName](netservice/hostname.md): Deprecated. A string containing the DNS hostname for this service.

### Constants

- [NSNetServices Errors](nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NSNetServicesError](netservice/errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.
- [NSNetServiceOptions](netservice/options.md): These constants specify options for a network service.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Local Network Services

- [NSNetServiceDelegate](netservicedelegate.md): The interface a net service uses to inform its delegate about the state of the service it offers.
- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
