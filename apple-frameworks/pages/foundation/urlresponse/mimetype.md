> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/mimetype](https://developer.apple.com/documentation/foundation/urlresponse/mimetype)

# mimeType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The MIME type of the response.

## Declaration

```swift
var mimeType: String? { get }
```

<a id="Discussion"></a>

## Discussion

The MIME type is often provided by the response’s originating source. However, that value may be changed or corrected by a protocol implementation if it can be determined that the response’s source reported the information incorrectly.

If the response’s originating source does not provide a MIME type, an attempt to guess the MIME type may be made.

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [url](url.md): The URL for the response.

# MIMEType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The MIME type of the response.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * MIMEType;
```

<a id="Discussion"></a>

## Discussion

The MIME type is often provided by the response’s originating source. However, that value may be changed or corrected by a protocol implementation if it can be determined that the response’s source reported the information incorrectly.

If the response’s originating source does not provide a MIME type, an attempt to guess the MIME type may be made.

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [URL](url.md): The URL for the response.
