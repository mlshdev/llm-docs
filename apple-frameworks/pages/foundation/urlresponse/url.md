> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/url](https://developer.apple.com/documentation/foundation/urlresponse/url)

# url (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL for the response.

## Declaration

```swift
var url: URL? { get }
```

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [mimeType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.

# URL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL for the response.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [MIMEType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
