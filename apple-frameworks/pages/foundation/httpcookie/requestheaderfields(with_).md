> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/requestheaderfields(with:)](https://developer.apple.com/documentation/foundation/httpcookie/requestheaderfields(with:))

# requestHeaderFields(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts an array of cookies to a dictionary of header fields.

## Declaration

```swift
class func requestHeaderFields(with cookies: [HTTPCookie]) -> [String : String]
```

## Parameters

- `cookies`: The cookies from which the header fields are created.

<a id="return-value"></a>

## Return Value

The dictionary of header fields created from the provided cookies.

<a id="Discussion"></a>

## Discussion

To send these headers as part of a URL request to a remote server, create an [NSMutableURLRequest](../nsmutableurlrequest.md) object, then call the [allHTTPHeaderFields](../nsmutableurlrequest/allhttpheaderfields.md) or [setValue(\_:forHTTPHeaderField:)](../nsmutableurlrequest/setvalue%28__forhttpheaderfield_%29.md) method to set the provided headers for the request. Finally, initialize and start an [URLSessionTask](../urlsessiontask.md) instance based on that request object.

# requestHeaderFieldsWithCookies: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts an array of cookies to a dictionary of header fields.

## Declaration

```objectivec
+ (NSDictionary<NSString *,NSString *> *) requestHeaderFieldsWithCookies:(NSArray<NSHTTPCookie *> *) cookies;
```

## Parameters

- `cookies`: The cookies from which the header fields are created.

<a id="return-value"></a>

## Return Value

The dictionary of header fields created from the provided cookies.

<a id="Discussion"></a>

## Discussion

To send these headers as part of a URL request to a remote server, create an [NSMutableURLRequest](../nsmutableurlrequest.md) object, then call the [allHTTPHeaderFields](../nsmutableurlrequest/allhttpheaderfields.md) or [setValue:forHTTPHeaderField:](../nsmutableurlrequest/setvalue%28__forhttpheaderfield_%29.md) method to set the provided headers for the request. Finally, initialize and start an [NSURLSessionTask](../urlsessiontask.md) instance based on that request object.
