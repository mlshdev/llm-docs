> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/httpmethod](https://developer.apple.com/documentation/foundation/urlrequest/httpmethod)

# httpMethod

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The HTTP request method.

## Declaration

```swift
var httpMethod: String? { get set }
```

## Mentioned In

- [Uploading data to a website](../uploading-data-to-a-website.md)

<a id="Discussion"></a>

## Discussion

The default HTTP method is “GET”.

## See Also

### Accessing request components

- [url](url.md): The URL of the request.
- [httpBody](httpbody.md): The data sent as the message body of a request, such as for an HTTP POST request.
- [httpBodyStream](httpbodystream.md): The stream used to deliver the HTTP body.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with this request.
