> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/maindocumenturl](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/maindocumenturl)

# mainDocumentURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main document URL.

## Declaration

```swift
var mainDocumentURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The caller should set the main document URL to an appropriate main document, if known. For example, when loading a web page the URL of the HTML document for the top-level frame would be appropriate. This URL will be used for the “only from same domain as main document” cookie accept policy.

`nil` indicates no main document.

## See Also

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBody](httpbody.md): The request body.
- [httpBodyStream](httpbodystream.md): The request body as an input stream.

# mainDocumentURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main document URL.

## Declaration

```objectivec
@property (copy, nullable) NSURL * mainDocumentURL;
```

<a id="Discussion"></a>

## Discussion

The caller should set the main document URL to an appropriate main document, if known. For example, when loading a web page the URL of the HTML document for the top-level frame would be appropriate. This URL will be used for the “only from same domain as main document” cookie accept policy.

`nil` indicates no main document.

## See Also

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBody](httpbody.md): The request body.
- [HTTPBodyStream](httpbodystream.md): The request body as an input stream.
