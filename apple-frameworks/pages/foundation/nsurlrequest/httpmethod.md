> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/httpmethod](https://developer.apple.com/documentation/foundation/nsurlrequest/httpmethod)

# httpMethod (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The HTTP request method.

## Declaration

```swift
var httpMethod: String? { get }
```

<a id="Discussion"></a>

## Discussion

The default HTTP method is “GET”.

## See Also

### Related Documentation

- [httpMethod](../nsmutableurlrequest/httpmethod.md): The HTTP request method.

### Accessing request components

- [url](url.md): The URL being requested.
- [httpBody](httpbody.md): The request body.
- [httpBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.

# HTTPMethod (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The HTTP request method.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * HTTPMethod;
```

<a id="Discussion"></a>

## Discussion

The default HTTP method is “GET”.

## See Also

### Related Documentation

- [HTTPMethod](../nsmutableurlrequest/httpmethod.md): The HTTP request method.

### Accessing request components

- [URL](url.md): The URL being requested.
- [HTTPBody](httpbody.md): The request body.
- [HTTPBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.
