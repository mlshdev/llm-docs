> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresource/url](https://developer.apple.com/documentation/webkit/webresource/url)

# url (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s URL.

## Declaration

```swift
var url: URL! { get }
```

## See Also

### Getting attributes

- [data](data.md): The receiver’s data.
- [mimeType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.
- [frameName](framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

# URL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s URL.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSURL * URL;
```

## See Also

### Getting attributes

- [data](data.md): The receiver’s data.
- [MIMEType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.
- [frameName](framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.
