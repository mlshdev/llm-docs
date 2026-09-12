> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/init(data:oftype:)](https://developer.apple.com/documentation/appkit/nstextattachment/init(data:oftype:))

# init(data:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates a text attachment object with the specified data.

## Declaration

```swift
init(data contentData: Data?, ofType uti: String?)
```

## Parameters

- `contentData`: Data to use for the text attachment contents. Can be `nil`.
- `uti`: A uniform type identifier specifying the data type of the attachment contents. Can be `nil`.

<a id="return-value"></a>

## Return Value

A new `NSTextAttachment` object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `NSTextAttachment` class on iOS.

When either `contentData` or `uti` is `nil`, TextKit considers the receiver to be an attachment without document contents. In this case, the `NSAttributedString` external file writing methods try to save the value of the [image](image.md) property instead.

## See Also

### Initializing a text attachment

- [init(fileWrapper:)](init%28filewrapper_%29.md): Creates a text attachment object to contain the specified file wrapper.

# initWithData:ofType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates a text attachment object with the specified data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) contentData ofType:(NSString *) uti;
```

## Parameters

- `contentData`: Data to use for the text attachment contents. Can be `nil`.
- `uti`: A uniform type identifier specifying the data type of the attachment contents. Can be `nil`.

<a id="return-value"></a>

## Return Value

A new `NSTextAttachment` object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `NSTextAttachment` class on iOS.

When either `contentData` or `uti` is `nil`, TextKit considers the receiver to be an attachment without document contents. In this case, the `NSAttributedString` external file writing methods try to save the value of the [image](image.md) property instead.

## See Also

### Initializing a text attachment

- [initWithFileWrapper:](init%28filewrapper_%29.md): Creates a text attachment object to contain the specified file wrapper.
