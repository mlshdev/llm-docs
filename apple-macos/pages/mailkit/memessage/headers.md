> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/headers](https://developer.apple.com/documentation/mailkit/memessage/headers)

# headers (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A dictionary that contains the message’s header values.

## Declaration

```swift
var headers: [String : [String]]? { get }
```

<a id="Discussion"></a>

## Discussion

If MailKit hasn’t downloaded the full message, this dictionary may only contain a subset of the message’s headers.

## See Also

### Accessing Message Content

- [rawData](rawdata.md): The raw RFC 2822 header and body content of the message.

# headers (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A dictionary that contains the message’s header values.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<NSString *,NSArray<NSString *> *> * headers;
```

<a id="Discussion"></a>

## Discussion

If MailKit hasn’t downloaded the full message, this dictionary may only contain a subset of the message’s headers.

## See Also

### Accessing Message Content

- [rawData](rawdata.md): The raw RFC 2822 header and body content of the message.
