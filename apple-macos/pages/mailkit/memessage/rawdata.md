> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/rawdata](https://developer.apple.com/documentation/mailkit/memessage/rawdata)

# rawData (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The raw RFC 2822 header and body content of the message.

## Declaration

```swift
var rawData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The content is available after MailKit downloads the message. MailKit provides the content as unprocessed data. For details about the format of the data, see [RFC 2822](https://tools.ietf.org/html/rfc2822).

> **Note**

>  This property includes the full content of the message, and contains both the headers and the message body. If you only need the headers in the message, use [headers](headers.md) instead.

## See Also

### Accessing Message Content

- [headers](headers.md): A dictionary that contains the message’s header values.

# rawData (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The raw RFC 2822 header and body content of the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * rawData;
```

<a id="Discussion"></a>

## Discussion

The content is available after MailKit downloads the message. MailKit provides the content as unprocessed data. For details about the format of the data, see [RFC 2822](https://tools.ietf.org/html/rfc2822).

> **Note**

>  This property includes the full content of the message, and contains both the headers and the message body. If you only need the headers in the message, use [headers](headers.md) instead.

## See Also

### Accessing Message Content

- [headers](headers.md): A dictionary that contains the message’s header values.
