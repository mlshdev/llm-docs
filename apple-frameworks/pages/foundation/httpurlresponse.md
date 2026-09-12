> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpurlresponse](https://developer.apple.com/documentation/foundation/httpurlresponse)

# HTTPURLResponse (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata associated with the response to an HTTP protocol URL load request.

## Declaration

```swift
class HTTPURLResponse
```

<a id="overview"></a>

## Overview

The [HTTPURLResponse](httpurlresponse.md) class is a subclass of [URLResponse](urlresponse.md) that provides methods for accessing information specific to HTTP protocol responses. Whenever you make HTTP URL load requests, any response objects you get back from the [URLSession](urlsession.md), [NSURLConnection](nsurlconnection.md), or [NSURLDownload](nsurldownload.md) class are instances of the [HTTPURLResponse](httpurlresponse.md) class.

## Topics

### Initializing a response object

- [init(url:statusCode:httpVersion:headerFields:)](httpurlresponse/init%28url_statuscode_httpversion_headerfields_%29-21j4x.md): Initializes an HTTP URL response object with a status code, protocol version, and response headers.

### Getting HTTP response headers

- [allHeaderFields](httpurlresponse/allheaderfields.md): All HTTP header fields of the response.
- [value(forHTTPHeaderField:)](httpurlresponse/value%28forhttpheaderfield_%29.md): Returns the value that corresponds to the given header field.

### Getting response status codes

- [localizedString(forStatusCode:)](httpurlresponse/localizedstring%28forstatuscode_%29.md): Returns a localized string corresponding to a specified HTTP status code.
- [statusCode](httpurlresponse/statuscode.md): The response’s HTTP status code.

### Initializers

- [init(URL:statusCode:HTTPVersion:headerFields:)](httpurlresponse/init%28url_statuscode_httpversion_headerfields_%29-3kiww.md)

## Relationships

### Inherits From

- [URLResponse](urlresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requests and responses

- [URLRequest](urlrequest.md): A URL load request that is independent of protocol or URL scheme.
- [NSURLRequest](nsurlrequest.md): A URL load request that is independent of protocol or URL scheme.
- [NSMutableURLRequest](nsmutableurlrequest.md): A mutable URL load request that is independent of protocol or URL scheme.
- [URLResponse](urlresponse.md): The metadata associated with the response to a URL load request, independent of protocol and URL scheme.

# NSHTTPURLResponse (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata associated with the response to an HTTP protocol URL load request.

## Declaration

```objectivec
@interface NSHTTPURLResponse : NSURLResponse
```

<a id="overview"></a>

## Overview

The [NSHTTPURLResponse](httpurlresponse.md) class is a subclass of [NSURLResponse](urlresponse.md) that provides methods for accessing information specific to HTTP protocol responses. Whenever you make HTTP URL load requests, any response objects you get back from the [NSURLSession](urlsession.md), [NSURLConnection](nsurlconnection.md), or [NSURLDownload](nsurldownload.md) class are instances of the [NSHTTPURLResponse](httpurlresponse.md) class.

## Topics

### Initializing a response object

- [initWithURL:statusCode:HTTPVersion:headerFields:](httpurlresponse/init%28url_statuscode_httpversion_headerfields_%29-21j4x.md): Initializes an HTTP URL response object with a status code, protocol version, and response headers.

### Getting HTTP response headers

- [allHeaderFields](httpurlresponse/allheaderfields.md): All HTTP header fields of the response.
- [valueForHTTPHeaderField:](httpurlresponse/value%28forhttpheaderfield_%29.md): Returns the value that corresponds to the given header field.

### Getting response status codes

- [localizedStringForStatusCode:](httpurlresponse/localizedstring%28forstatuscode_%29.md): Returns a localized string corresponding to a specified HTTP status code.
- [statusCode](httpurlresponse/statuscode.md): The response’s HTTP status code.

## Relationships

### Inherits From

- [NSURLResponse](urlresponse.md)

## See Also

### Requests and responses

- [NSURLRequest](nsurlrequest.md): A URL load request that is independent of protocol or URL scheme.
- [NSMutableURLRequest](nsmutableurlrequest.md): A mutable URL load request that is independent of protocol or URL scheme.
- [NSURLResponse](urlresponse.md): The metadata associated with the response to a URL load request, independent of protocol and URL scheme.
