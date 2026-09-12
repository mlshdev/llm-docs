> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/maindocumenturl](https://developer.apple.com/documentation/foundation/nsurlrequest/maindocumenturl)

# mainDocumentURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main document URL associated with the request.

## Declaration

```swift
var mainDocumentURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This URL is used for the cookie “same domain as main document” policy.

## See Also

### Related Documentation

- [mainDocumentURL](../nsmutableurlrequest/maindocumenturl.md): The main document URL.

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBody](httpbody.md): The request body.
- [httpBodyStream](httpbodystream.md): The request body as an input stream.

# mainDocumentURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main document URL associated with the request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * mainDocumentURL;
```

<a id="Discussion"></a>

## Discussion

This URL is used for the cookie “same domain as main document” policy.

## See Also

### Related Documentation

- [mainDocumentURL](../nsmutableurlrequest/maindocumenturl.md): The main document URL.

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBody](httpbody.md): The request body.
- [HTTPBodyStream](httpbodystream.md): The request body as an input stream.
