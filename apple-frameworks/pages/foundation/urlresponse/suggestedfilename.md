> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/suggestedfilename](https://developer.apple.com/documentation/foundation/urlresponse/suggestedfilename)

# suggestedFilename (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A suggested filename for the response data.

## Declaration

```swift
var suggestedFilename: String? { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this property attempts to generate a filename using the following information, in order:

1. A filename specified using the content disposition header.
2. The last path component of the URL.
3. The host of the URL.

If the host of URL can’t be converted to a valid filename, the filename “unknown” is used.

In most cases, this property appends the proper file extension based on the MIME type. Accessing this property always returns a valid filename regardless of whether the resource is saved to disk.

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [mimeType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [url](url.md): The URL for the response.

# suggestedFilename (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A suggested filename for the response data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * suggestedFilename;
```

<a id="Discussion"></a>

## Discussion

Accessing this property attempts to generate a filename using the following information, in order:

1. A filename specified using the content disposition header.
2. The last path component of the URL.
3. The host of the URL.

If the host of URL can’t be converted to a valid filename, the filename “unknown” is used.

In most cases, this property appends the proper file extension based on the MIME type. Accessing this property always returns a valid filename regardless of whether the resource is saved to disk.

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [MIMEType](mimetype.md): The MIME type of the response.
- [textEncodingName](textencodingname.md): The name of the text encoding provided by the response’s originating source.
- [URL](url.md): The URL for the response.
