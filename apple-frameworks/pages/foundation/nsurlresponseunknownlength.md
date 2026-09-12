> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlresponseunknownlength](https://developer.apple.com/documentation/foundation/nsurlresponseunknownlength)

# NSURLResponseUnknownLength

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The response length cannot be determined in advance of receiving the data from the server.

## Declaration

```objectivec
#define NSURLResponseUnknownLength
```

<a id="Discussion"></a>

## Discussion

For example, [NSURLResponseUnknownLength](nsurlresponseunknownlength.md) is returned when the server HTTP response does not include a `Content-Length` header.

## See Also

### Getting the response properties

- [expectedContentLength](urlresponse/expectedcontentlength.md): The expected length of the response’s content.
- [suggestedFilename](urlresponse/suggestedfilename.md): A suggested filename for the response data.
- [MIMEType](urlresponse/mimetype.md): The MIME type of the response.
- [textEncodingName](urlresponse/textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [URL](urlresponse/url.md): The URL for the response.
