> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest](https://developer.apple.com/documentation/foundation/nsurlrequest)

# NSURLRequest (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL load request that is independent of protocol or URL scheme.

## Declaration

```swift
class NSURLRequest
```

<a id="overview"></a>

## Overview

Use this type in Swift when you need reference semantics or other Foundation-specific behavior.

[NSURLRequest](nsurlrequest.md) encapsulates two essential properties of a load request: the URL to load and the policies used to load it. In addition, for HTTP and HTTPS requests, [URLRequest](urlrequest.md) includes the HTTP method (`GET`, `POST`, and so on) and the HTTP headers. Finally, custom protocols can support custom properties as explained in [Custom protocol properties](nsurlrequest.md#Custom-protocol-properties).

[NSURLRequest](nsurlrequest.md) only represents information about the request. Use other classes, such as [URLSession](urlsession.md), to send the request to a server. See [Fetching website data into memory](fetching-website-data-into-memory.md) and [Uploading data to a website](uploading-data-to-a-website.md) for an introduction to these techniques.

The mutable subclass of [NSURLRequest](nsurlrequest.md) is [NSMutableURLRequest](nsmutableurlrequest.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [URLRequest](urlrequest.md) structure, which bridges to the [NSURLRequest](nsurlrequest.md) class and its mutable subclass, [NSMutableURLRequest](nsmutableurlrequest.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Reserved-HTTP-headers"></a>

### Reserved HTTP headers

The URL Loading System handles various aspects of the HTTP protocol for you (HTTP/1.1 persistent connections, proxies, authentication, and so on). As part of this support, the URL Loading System takes responsibility for certain HTTP headers:

- `Content-Length`
- `Authorization`
- `Connection`
- `Host`
- `Proxy-Authenticate`
- `Proxy-Authorization`
- `WWW-Authenticate`

If you set a value for one of these reserved headers, the system may ignore the value you set, or overwrite it with its own value, or simply not send it. Moreover, the exact behavior may change over time. To avoid confusing problems like this, do not set these headers directly.

The URL Loading System sets the `Content-Length` header based on whether the request body has a known length:

- If so, it uses the identity transfer encoding and sets the `Content-Length` header to that known length. You see this when you set the request body to a data object.
- If not, it uses the chunked transfer encoding and omits the `Content-Length` header. You see this when you set the request body to a stream.

<a id="Custom-protocol-properties"></a>

### Custom protocol properties

If you implement a custom URL protocol by subclassing [URLProtocol](urlprotocol.md), and it needs protocol-specific properties, extend [NSURLRequest](nsurlrequest.md) with accessor methods for those custom properties. In your accessor methods, call [property(forKey:in:)](urlprotocol/property%28forkey_in_%29.md) and [setProperty(\_:forKey:in:)](urlprotocol/setproperty%28__forkey_in_%29.md) to associate property values with the request.

## Topics

### Creating requests

- [init(url:)](nsurlrequest/init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.
- [init(url:cachePolicy:timeoutInterval:)](nsurlrequest/init%28url_cachepolicy_timeoutinterval_%29-2giyj.md): Creates a URL request with the specified URL, cache policy, and timeout values.

### Working with a cache policy

- [cachePolicy](nsurlrequest/cachepolicy-swift.property.md): The request’s cache policy.
- [NSURLRequest.CachePolicy](nsurlrequest/cachepolicy-swift.enum.md): The constants used to specify interaction with the cached responses.

### Accessing request components

- [httpMethod](nsurlrequest/httpmethod.md): The HTTP request method.
- [url](nsurlrequest/url.md): The URL being requested.
- [httpBody](nsurlrequest/httpbody.md): The request body.
- [httpBodyStream](nsurlrequest/httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](nsurlrequest/maindocumenturl.md): The main document URL associated with the request.

### Getting header fields

- [allHTTPHeaderFields](nsurlrequest/allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [value(forHTTPHeaderField:)](nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Controlling request behavior

- [timeoutInterval](nsurlrequest/timeoutinterval.md): The request’s timeout interval, in seconds.
- [httpShouldHandleCookies](nsurlrequest/httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [httpShouldUsePipelining](nsurlrequest/httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](nsurlrequest/allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

### Supporting limited modes

- [allowsConstrainedNetworkAccess](nsurlrequest/allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [allowsExpensiveNetworkAccess](nsurlrequest/allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

### Accessing the service type

- [networkServiceType](nsurlrequest/networkservicetype-swift.property.md): The network service type of the request.
- [NSURLRequest.NetworkServiceType](nsurlrequest/networkservicetype-swift.enum.md): Constants that specify how a request uses network resources.

### Supporting secure coding

- [supportsSecureCoding](nsurlrequest/supportssecurecoding.md): A Boolean value indicating whether the [NSURLRequest](nsurlrequest.md) implements the [NSSecureCoding](nssecurecoding.md) protocol.

### Indicating the source of the request

- [attribution](nsurlrequest/attribution-swift.property.md): The entity that initiates the network request.
- [NSURLRequest.Attribution](nsurlrequest/attribution-swift.enum.md): The entities that can make a network request.

### Initializers

- [init(URL:)](nsurlrequest/init%28url_%29-9mck0.md)
- [init(URL:)](nsurlrequest/init%28url_%29-9plp8.md)
- [init(URL:cachePolicy:timeoutInterval:)](nsurlrequest/init%28url_cachepolicy_timeoutinterval_%29-59r40.md)
- [init(URL:cachePolicy:timeoutInterval:)](nsurlrequest/init%28url_cachepolicy_timeoutinterval_%29-7xiv0.md)
- [init(coder:)](nsurlrequest/init%28coder_%29.md)

### Instance Properties

- [allowsPersistentDNS](nsurlrequest/allowspersistentdns.md): A Boolean value that indicates whether storing and usage of DNS answers in a persistent per-process cache is allowed.
- [allowsUltraConstrainedNetworkAccess](nsurlrequest/allowsultraconstrainednetworkaccess.md): A Boolean value that indicates whether a connection created with this request is allowed to use network interfaces which have been marked as ultra constrained.
- [assumesHTTP3Capable](nsurlrequest/assumeshttp3capable.md): A Boolean value that indicates whether the server is assumed to support HTTP/3.
- [cookiePartitionIdentifier](nsurlrequest/cookiepartitionidentifier.md)
- [requiresDNSSECValidation](nsurlrequest/requiresdnssecvalidation.md): A Boolean value that indicates whether a request requires DNSSEC validation during DNS lookup.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableURLRequest](nsmutableurlrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Requests and responses

- [URLRequest](urlrequest.md): A URL load request that is independent of protocol or URL scheme.
- [NSMutableURLRequest](nsmutableurlrequest.md): A mutable URL load request that is independent of protocol or URL scheme.
- [URLResponse](urlresponse.md): The metadata associated with the response to a URL load request, independent of protocol and URL scheme.
- [HTTPURLResponse](httpurlresponse.md): The metadata associated with the response to an HTTP protocol URL load request.

# NSURLRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL load request that is independent of protocol or URL scheme.

## Declaration

```objectivec
@interface NSURLRequest : NSObject
```

<a id="overview"></a>

## Overview

Use this type in Swift when you need reference semantics or other Foundation-specific behavior.

[NSURLRequest](nsurlrequest.md) encapsulates two essential properties of a load request: the URL to load and the policies used to load it. In addition, for HTTP and HTTPS requests, [URLRequest](urlrequest.md) includes the HTTP method (`GET`, `POST`, and so on) and the HTTP headers. Finally, custom protocols can support custom properties as explained in [Custom protocol properties](nsurlrequest.md#Custom-protocol-properties).

[NSURLRequest](nsurlrequest.md) only represents information about the request. Use other classes, such as [NSURLSession](urlsession.md), to send the request to a server. See [Fetching website data into memory](fetching-website-data-into-memory.md) and [Uploading data to a website](uploading-data-to-a-website.md) for an introduction to these techniques.

The mutable subclass of [NSURLRequest](nsurlrequest.md) is [NSMutableURLRequest](nsmutableurlrequest.md).

> **Important**

>  The Swift overlay to the Foundation framework provides the [URLRequest](urlrequest.md) structure, which bridges to the [NSURLRequest](nsurlrequest.md) class and its mutable subclass, [NSMutableURLRequest](nsmutableurlrequest.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Reserved-HTTP-headers"></a>

### Reserved HTTP headers

The URL Loading System handles various aspects of the HTTP protocol for you (HTTP/1.1 persistent connections, proxies, authentication, and so on). As part of this support, the URL Loading System takes responsibility for certain HTTP headers:

- `Content-Length`
- `Authorization`
- `Connection`
- `Host`
- `Proxy-Authenticate`
- `Proxy-Authorization`
- `WWW-Authenticate`

If you set a value for one of these reserved headers, the system may ignore the value you set, or overwrite it with its own value, or simply not send it. Moreover, the exact behavior may change over time. To avoid confusing problems like this, do not set these headers directly.

The URL Loading System sets the `Content-Length` header based on whether the request body has a known length:

- If so, it uses the identity transfer encoding and sets the `Content-Length` header to that known length. You see this when you set the request body to a data object.
- If not, it uses the chunked transfer encoding and omits the `Content-Length` header. You see this when you set the request body to a stream.

<a id="Custom-protocol-properties"></a>

### Custom protocol properties

If you implement a custom URL protocol by subclassing [NSURLProtocol](urlprotocol.md), and it needs protocol-specific properties, extend [NSURLRequest](nsurlrequest.md) with accessor methods for those custom properties. In your accessor methods, call [propertyForKey:inRequest:](urlprotocol/property%28forkey_in_%29.md) and [setProperty:forKey:inRequest:](urlprotocol/setproperty%28__forkey_in_%29.md) to associate property values with the request.

## Topics

### Creating requests

- [requestWithURL:](nsurlrequest/requestwithurl_.md): Creates and returns a URL request for a specified URL.
- [initWithURL:](nsurlrequest/init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.
- [requestWithURL:cachePolicy:timeoutInterval:](nsurlrequest/requestwithurl_cachepolicy_timeoutinterval_.md): Creates and returns an initialized URL request with specified URL, cache policy, and timeout values.
- [initWithURL:cachePolicy:timeoutInterval:](nsurlrequest/init%28url_cachepolicy_timeoutinterval_%29-2giyj.md): Creates a URL request with the specified URL, cache policy, and timeout values.

### Working with a cache policy

- [cachePolicy](nsurlrequest/cachepolicy-swift.property.md): The request’s cache policy.
- [NSURLRequestCachePolicy](nsurlrequest/cachepolicy-swift.enum.md): The constants used to specify interaction with the cached responses.

### Accessing request components

- [HTTPMethod](nsurlrequest/httpmethod.md): The HTTP request method.
- [URL](nsurlrequest/url.md): The URL being requested.
- [HTTPBody](nsurlrequest/httpbody.md): The request body.
- [HTTPBodyStream](nsurlrequest/httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](nsurlrequest/maindocumenturl.md): The main document URL associated with the request.

### Getting header fields

- [allHTTPHeaderFields](nsurlrequest/allhttpheaderfields.md): A dictionary containing all of the HTTP header fields for a request.
- [valueForHTTPHeaderField:](nsurlrequest/value%28forhttpheaderfield_%29.md): Returns the value of the specified HTTP header field.

### Controlling request behavior

- [timeoutInterval](nsurlrequest/timeoutinterval.md): The request’s timeout interval, in seconds.
- [HTTPShouldHandleCookies](nsurlrequest/httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [HTTPShouldUsePipelining](nsurlrequest/httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](nsurlrequest/allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

### Supporting limited modes

- [allowsConstrainedNetworkAccess](nsurlrequest/allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [allowsExpensiveNetworkAccess](nsurlrequest/allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

### Accessing the service type

- [networkServiceType](nsurlrequest/networkservicetype-swift.property.md): The network service type of the request.
- [NSURLRequestNetworkServiceType](nsurlrequest/networkservicetype-swift.enum.md): Constants that specify how a request uses network resources.

### Supporting secure coding

- [supportsSecureCoding](nsurlrequest/supportssecurecoding.md): A Boolean value indicating whether the [NSURLRequest](nsurlrequest.md) implements the [NSSecureCoding](nssecurecoding.md) protocol.

### Indicating the source of the request

- [attribution](nsurlrequest/attribution-swift.property.md): The entity that initiates the network request.
- [NSURLRequestAttribution](nsurlrequest/attribution-swift.enum.md): The entities that can make a network request.

### Instance Properties

- [allowsPersistentDNS](nsurlrequest/allowspersistentdns.md): A Boolean value that indicates whether storing and usage of DNS answers in a persistent per-process cache is allowed.
- [allowsUltraConstrainedNetworkAccess](nsurlrequest/allowsultraconstrainednetworkaccess.md): A Boolean value that indicates whether a connection created with this request is allowed to use network interfaces which have been marked as ultra constrained.
- [assumesHTTP3Capable](nsurlrequest/assumeshttp3capable.md): A Boolean value that indicates whether the server is assumed to support HTTP/3.
- [cookiePartitionIdentifier](nsurlrequest/cookiepartitionidentifier.md)
- [requiresDNSSECValidation](nsurlrequest/requiresdnssecvalidation.md): A Boolean value that indicates whether a request requires DNSSEC validation during DNS lookup.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableURLRequest](nsmutableurlrequest.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Requests and responses

- [NSMutableURLRequest](nsmutableurlrequest.md): A mutable URL load request that is independent of protocol or URL scheme.
- [NSURLResponse](urlresponse.md): The metadata associated with the response to a URL load request, independent of protocol and URL scheme.
- [NSHTTPURLResponse](httpurlresponse.md): The metadata associated with the response to an HTTP protocol URL load request.
