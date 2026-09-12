> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/init(url:mimetype:expectedcontentlength:textencodingname:)-4s2s1](https://developer.apple.com/documentation/foundation/urlresponse/init(url:mimetype:expectedcontentlength:textencodingname:)-4s2s1)

# init(url:mimeType:expectedContentLength:textEncodingName:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an initialized [URLResponse](../urlresponse.md) object with the URL, MIME type, length, and text encoding set to given values.

## Declaration

```swift
init(url URL: URL, mimeType MIMEType: String?, expectedContentLength length: Int, textEncodingName name: String?)
```

## Parameters

- `URL`: The URL for the new object.
- `MIMEType`: The MIME type.
- `length`: The expected content length.This value should be `–1` if the expected length is undetermined
- `name`: The text encoding name. This value may be `nil`.

<a id="return-value"></a>

## Return Value

The initialized URL response.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for [URLResponse](../urlresponse.md).

## See Also

### Related Documentation

- [init(url:statusCode:httpVersion:headerFields:)](../httpurlresponse/init%28url_statuscode_httpversion_headerfields_%29-21j4x.md): Initializes an HTTP URL response object with a status code, protocol version, and response headers.

# initWithURL:MIMEType:expectedContentLength:textEncodingName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an initialized [NSURLResponse](../urlresponse.md) object with the URL, MIME type, length, and text encoding set to given values.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL MIMEType:(NSString *) MIMEType expectedContentLength:(NSInteger) length textEncodingName:(NSString *) name;
```

## Parameters

- `URL`: The URL for the new object.
- `MIMEType`: The MIME type.
- `length`: The expected content length.This value should be `–1` if the expected length is undetermined
- `name`: The text encoding name. This value may be `nil`.

<a id="return-value"></a>

## Return Value

The initialized URL response.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for [NSURLResponse](../urlresponse.md).

## See Also

### Related Documentation

- [initWithURL:statusCode:HTTPVersion:headerFields:](../httpurlresponse/init%28url_statuscode_httpversion_headerfields_%29-21j4x.md): Initializes an HTTP URL response object with a status code, protocol version, and response headers.
