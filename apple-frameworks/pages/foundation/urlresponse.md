> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse](https://developer.apple.com/documentation/foundation/urlresponse)

# URLResponse (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata associated with the response to a URL load request, independent of protocol and URL scheme.

## Declaration

```swift
class URLResponse
```

## Mentioned In

- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)
- [Downloading files from websites](downloading-files-from-websites.md)

<a id="overview"></a>

## Overview

The related [HTTPURLResponse](httpurlresponse.md) class is a commonly used subclass of [URLResponse](urlresponse.md) whose objects represent a response to an HTTP URL load request and store additional protocol-specific information such as the response headers. Whenever you make an HTTP request, the [URLResponse](urlresponse.md) object you get back is actually an instance of the [HTTPURLResponse](httpurlresponse.md) class.

> **Note**

>  [URLResponse](urlresponse.md) objects don’t contain the actual bytes representing the content of a URL. Instead, the data is returned either a piece at a time through delegate calls or in its entirety when the request completes, depending on the method and class used to initiate the request.
>
> Read [Fetching website data into memory](fetching-website-data-into-memory.md) to learn various ways to receive the content data from a URL load.

## Topics

### Creating a response

- [init(url:mimeType:expectedContentLength:textEncodingName:)](urlresponse/init%28url_mimetype_expectedcontentlength_textencodingname_%29-4s2s1.md): Creates an initialized [URLResponse](urlresponse.md) object with the URL, MIME type, length, and text encoding set to given values.

### Getting the response properties

- [expectedContentLength](urlresponse/expectedcontentlength.md): The expected length of the response’s content.
- [suggestedFilename](urlresponse/suggestedfilename.md): A suggested filename for the response data.
- [mimeType](urlresponse/mimetype.md): The MIME type of the response.
- [textEncodingName](urlresponse/textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [url](urlresponse/url.md): The URL for the response.

### Initializers

- [init(URL:MIMEType:expectedContentLength:textEncodingName:)](urlresponse/init%28url_mimetype_expectedcontentlength_textencodingname_%29-3n1n4.md)
- [init(coder:)](urlresponse/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HTTPURLResponse](httpurlresponse.md)

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
- [HTTPURLResponse](httpurlresponse.md): The metadata associated with the response to an HTTP protocol URL load request.

# NSURLResponse (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata associated with the response to a URL load request, independent of protocol and URL scheme.

## Declaration

```objectivec
@interface NSURLResponse : NSObject
```

## Mentioned In

- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)
- [Downloading files from websites](downloading-files-from-websites.md)

<a id="overview"></a>

## Overview

The related [NSHTTPURLResponse](httpurlresponse.md) class is a commonly used subclass of [NSURLResponse](urlresponse.md) whose objects represent a response to an HTTP URL load request and store additional protocol-specific information such as the response headers. Whenever you make an HTTP request, the [NSURLResponse](urlresponse.md) object you get back is actually an instance of the [NSHTTPURLResponse](httpurlresponse.md) class.

> **Note**

>  [NSURLResponse](urlresponse.md) objects don’t contain the actual bytes representing the content of a URL. Instead, the data is returned either a piece at a time through delegate calls or in its entirety when the request completes, depending on the method and class used to initiate the request.
>
> Read [Fetching website data into memory](fetching-website-data-into-memory.md) to learn various ways to receive the content data from a URL load.

## Topics

### Creating a response

- [initWithURL:MIMEType:expectedContentLength:textEncodingName:](urlresponse/init%28url_mimetype_expectedcontentlength_textencodingname_%29-4s2s1.md): Creates an initialized [NSURLResponse](urlresponse.md) object with the URL, MIME type, length, and text encoding set to given values.

### Getting the response properties

- [expectedContentLength](urlresponse/expectedcontentlength.md): The expected length of the response’s content.
- [NSURLResponseUnknownLength](nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [suggestedFilename](urlresponse/suggestedfilename.md): A suggested filename for the response data.
- [MIMEType](urlresponse/mimetype.md): The MIME type of the response.
- [textEncodingName](urlresponse/textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [URL](urlresponse/url.md): The URL for the response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSHTTPURLResponse](httpurlresponse.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Requests and responses

- [NSURLRequest](nsurlrequest.md): A URL load request that is independent of protocol or URL scheme.
- [NSMutableURLRequest](nsmutableurlrequest.md): A mutable URL load request that is independent of protocol or URL scheme.
- [NSHTTPURLResponse](httpurlresponse.md): The metadata associated with the response to an HTTP protocol URL load request.
