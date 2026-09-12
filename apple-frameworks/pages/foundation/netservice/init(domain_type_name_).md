> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/init(domain:type:name:)](https://developer.apple.com/documentation/foundation/netservice/init(domain:type:name:))

# init(domain:type:name:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the receiver, initialized as a network service of a given type and sets the initial host information.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
convenience init(domain: String, type: String, name: String)
```

## Parameters

- `domain`: The domain for the service. To resolve in the default domains, pass in an empty string (`@""`). To limit resolution to the local domain, use `@"local."`.

  If you are creating this object to resolve a service whose information your app stored previously, you should set this to the domain in which the service was originally discovered.

  You can also use a `NSNetServiceBrowser` object to obtain a list of possible domains in which you can discover and resolve services.
- `type`: The network service type.

  `type` must contain both the service type and transport layer information. To ensure that the mDNS responder searches for services, as opposed to hosts, prefix both the service name and transport layer name with an underscore character (”\_”). For example, to search for an HTTP service on TCP, you would use the type string “`_http._tcp.`”. Note that the period character at the end of the string, which indicates that the domain name is an absolute name, is required.
- `name`: The name of the service to resolve.

<a id="return-value"></a>

## Return Value

The receiver, initialized as a network service named `name` of type `type` in the domain `domain`.

<a id="Discussion"></a>

## Discussion

This method is the appropriate initializer to use to resolve a service—to publish a service, use [init(domain:type:name:port:)](init%28domain_type_name_port_%29.md).

If you know the values for `domain`, `type`, and `name` of the service you wish to connect to, you can create an `NSNetService` object using this initializer and call [resolve(withTimeout:)](resolve%28withtimeout_%29.md) on the result.

You cannot use this initializer to publish a service. This initializer passes an invalid port number to the designated initializer, which prevents the service from being registered. Calling [publish()](publish%28%29.md) on an `NSNetService` object initialized with this method generates a call to your delegate’s [netService(\_:didNotPublish:)](../netservicedelegate/netservice%28__didnotpublish_%29.md) method with an [NetService.ErrorCode.badArgumentError](errorcode-swift.enum/badargumenterror.md) error.

## See Also

### Related Documentation

- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)
- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)

### Creating Network Services

- [init(domain:type:name:port:)](init%28domain_type_name_port_%29.md): Deprecated. Initializes the receiver for publishing a network service of type `type` at the socket location specified by `domain`, `name`, and `port`.

# initWithDomain:type:name: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the receiver, initialized as a network service of a given type and sets the initial host information.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (instancetype) initWithDomain:(NSString *) domain type:(NSString *) type name:(NSString *) name;
```

## Parameters

- `domain`: The domain for the service. To resolve in the default domains, pass in an empty string (`@""`). To limit resolution to the local domain, use `@"local."`.

  If you are creating this object to resolve a service whose information your app stored previously, you should set this to the domain in which the service was originally discovered.

  You can also use a `NSNetServiceBrowser` object to obtain a list of possible domains in which you can discover and resolve services.
- `type`: The network service type.

  `type` must contain both the service type and transport layer information. To ensure that the mDNS responder searches for services, as opposed to hosts, prefix both the service name and transport layer name with an underscore character (”\_”). For example, to search for an HTTP service on TCP, you would use the type string “`_http._tcp.`”. Note that the period character at the end of the string, which indicates that the domain name is an absolute name, is required.
- `name`: The name of the service to resolve.

<a id="return-value"></a>

## Return Value

The receiver, initialized as a network service named `name` of type `type` in the domain `domain`.

<a id="Discussion"></a>

## Discussion

This method is the appropriate initializer to use to resolve a service—to publish a service, use [initWithDomain:type:name:port:](init%28domain_type_name_port_%29.md).

If you know the values for `domain`, `type`, and `name` of the service you wish to connect to, you can create an `NSNetService` object using this initializer and call [resolveWithTimeout:](resolve%28withtimeout_%29.md) on the result.

You cannot use this initializer to publish a service. This initializer passes an invalid port number to the designated initializer, which prevents the service from being registered. Calling [publish](publish%28%29.md) on an `NSNetService` object initialized with this method generates a call to your delegate’s [netService:didNotPublish:](../netservicedelegate/netservice%28__didnotpublish_%29.md) method with an [NSNetServicesBadArgumentError](errorcode-swift.enum/badargumenterror.md) error.

## See Also

### Related Documentation

- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)
- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)

### Creating Network Services

- [initWithDomain:type:name:port:](init%28domain_type_name_port_%29.md): Deprecated. Initializes the receiver for publishing a network service of type `type` at the socket location specified by `domain`, `name`, and `port`.
