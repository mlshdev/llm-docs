> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/init(data:oftype:)](https://developer.apple.com/documentation/uikit/nstextattachment/init(data:oftype:))

# init(data:ofType:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

- [init(fileWrapper:)](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [init(image:)](init%28image_%29.md): Creates a text attachment object to contain the specified image.

# initWithData:ofType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

- [initWithFileWrapper:](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [textAttachmentWithImage:](init%28image_%29.md): Creates a text attachment object to contain the specified image.
