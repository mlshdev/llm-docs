> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/expectedcontentlength](https://developer.apple.com/documentation/foundation/urlresponse/expectedcontentlength)

# expectedContentLength (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The expected length of the response’s content.

## Declaration

```swift
var expectedContentLength: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md) if the length can’t be determined.

Some protocol implementations report the content length as part of the response, but not all protocols guarantee to deliver that amount of data. Your app should be prepared to deal with more or less data.

## See Also

### Getting the response properties

- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [mimeType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [url](url.md): The URL for the response.

# expectedContentLength (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The expected length of the response’s content.

## Declaration

```objectivec
@property (readonly) long long expectedContentLength;
```

<a id="Discussion"></a>

## Discussion

This property’s value is [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md) if the length can’t be determined.

Some protocol implementations report the content length as part of the response, but not all protocols guarantee to deliver that amount of data. Your app should be prepared to deal with more or less data.

## See Also

### Getting the response properties

- [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [MIMEType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [URL](url.md): The URL for the response.
