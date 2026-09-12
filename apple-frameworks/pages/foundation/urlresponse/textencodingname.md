> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresponse/textencodingname](https://developer.apple.com/documentation/foundation/urlresponse/textencodingname)

# textEncodingName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the text encoding provided by the response’s originating source.

## Declaration

```swift
var textEncodingName: String? { get }
```

<a id="Discussion"></a>

## Discussion

If no text encoding was provided by the protocol, this property’s value is `nil`.

You can convert this string to a `CFStringEncoding` value by calling [CFStringConvertIANACharSetNameToEncoding(\_:)](../../corefoundation/cfstringconvertianacharsetnametoencoding%28__%29.md). You can subsequently convert that value to an `NSStringEncoding` value by calling [CFStringConvertEncodingToNSStringEncoding(\_:)](../../corefoundation/cfstringconvertencodingtonsstringencoding%28__%29.md).

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [mimeType](mimetype.md): The MIME type of the response.
- [url](url.md): The URL for the response.

# textEncodingName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the text encoding provided by the response’s originating source.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * textEncodingName;
```

<a id="Discussion"></a>

## Discussion

If no text encoding was provided by the protocol, this property’s value is `nil`.

You can convert this string to a `CFStringEncoding` value by calling [CFStringConvertIANACharSetNameToEncoding](../../corefoundation/cfstringconvertianacharsetnametoencoding%28__%29.md). You can subsequently convert that value to an `NSStringEncoding` value by calling [CFStringConvertEncodingToNSStringEncoding](../../corefoundation/cfstringconvertencodingtonsstringencoding%28__%29.md).

## See Also

### Getting the response properties

- [expectedContentLength](expectedcontentlength.md): The expected length of the response’s content.
- [NSURLResponseUnknownLength](../nsurlresponseunknownlength.md): The response length cannot be determined in advance of receiving the data from the server.
- [suggestedFilename](suggestedfilename.md): A suggested filename for the response data.
- [MIMEType](mimetype.md): The MIME type of the response.
- [URL](url.md): The URL for the response.
