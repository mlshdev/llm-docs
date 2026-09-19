> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlrequest/maindocumenturl

# mainDocumentURL

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main document URL associated with this request.

## Declaration

```swift
var mainDocumentURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

This URL is used for the cookie “same domain as main document” policy.

## See Also

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL of the request.
- [httpBody](httpbody.md): The data sent as the message body of a request, such as for an HTTP POST request.
- [httpBodyStream](httpbodystream.md): The stream used to deliver the HTTP body.
