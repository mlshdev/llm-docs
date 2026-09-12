> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpurlresponse/init(url:statuscode:httpversion:headerfields:)-21j4x](https://developer.apple.com/documentation/foundation/httpurlresponse/init(url:statuscode:httpversion:headerfields:)-21j4x)

# init(url:statusCode:httpVersion:headerFields:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an HTTP URL response object with a status code, protocol version, and response headers.

## Declaration

```swift
init?(url: URL, statusCode: Int, httpVersion HTTPVersion: String?, headerFields: [String : String]?)
```

## Parameters

- `url`: The URL from which the response was generated.
- `statusCode`: The HTTP status code to return (`404`, for example). See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.
- `HTTPVersion`: The version of the HTTP response as returned by the server. This is typically represented as “HTTP/1.1”.
- `headerFields`: A dictionary representing the keys and values from the server’s response header.

<a id="return-value"></a>

## Return Value

An initialized [HTTPURLResponse](../httpurlresponse.md) object or `nil` if an error occurred during initialization.

# initWithURL:statusCode:HTTPVersion:headerFields: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an HTTP URL response object with a status code, protocol version, and response headers.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url statusCode:(NSInteger) statusCode HTTPVersion:(NSString *) HTTPVersion headerFields:(NSDictionary<NSString *,NSString *> *) headerFields;
```

## Parameters

- `url`: The URL from which the response was generated.
- `statusCode`: The HTTP status code to return (`404`, for example). See [RFC 2616](http://www.ietf.org/rfc/rfc2616.txt) for details.
- `HTTPVersion`: The version of the HTTP response as returned by the server. This is typically represented as “HTTP/1.1”.
- `headerFields`: A dictionary representing the keys and values from the server’s response header.

<a id="return-value"></a>

## Return Value

An initialized [NSHTTPURLResponse](../httpurlresponse.md) object or `nil` if an error occurred during initialization.
