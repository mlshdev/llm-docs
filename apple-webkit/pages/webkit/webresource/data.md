> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresource/data](https://developer.apple.com/documentation/webkit/webresource/data)

# data (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s data.

## Declaration

```swift
var data: Data! { get }
```

## See Also

### Getting attributes

- [url](url.md): The receiver’s URL.
- [mimeType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.
- [frameName](framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.

# data (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s data.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * data;
```

## See Also

### Getting attributes

- [URL](url.md): The receiver’s URL.
- [MIMEType](mimetype.md): The receiver’s MIME type.
- [textEncodingName](textencodingname.md): The receiver’s text encoding name.
- [frameName](framename.md): The name of the frame. If the receiver does not represent the contents of an entire HTML frame, this is `nil`.
