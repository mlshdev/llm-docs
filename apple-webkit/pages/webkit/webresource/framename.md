> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresource/framename](https://developer.apple.com/documentation/webkit/webresource/framename)

# frameName (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

## Declaration

```swift
var frameName: String! { get }
```

## See Also

### Getting attributes

- [data](data.md): The receiver’s data.
- [url](url.md): The receiver’s URL.
- [mimeType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.

# frameName (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * frameName;
```

## See Also

### Getting attributes

- [data](data.md): The receiver’s data.
- [URL](url.md): The receiver’s URL.
- [MIMEType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.
