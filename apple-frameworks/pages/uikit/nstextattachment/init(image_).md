> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/init(image:)](https://developer.apple.com/documentation/uikit/nstextattachment/init(image:))

# init(image:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a text attachment object to contain the specified image.

## Declaration

```swift
init(image: UIImage)
```

## Parameters

- `image`: The image for the attachment.

<a id="return-value"></a>

## Return Value

A new text attachment object initialized with the image.

<a id="Discussion"></a>

## Discussion

Attachments created with this method automatically adapt to the surrounding font and color attributes in attributed strings.

For example, the following code creates a text attachment from the [UIImage](../uiimage.md) class using an SF symbol in a blue headline style and embeds it at the end of the [NSMutableAttributedString](../../foundation/nsmutableattributedstring.md) class:

```swift
let content = NSMutableAttributedString(string: "Open ")
guard let lockImage = UIImage(systemName: "lock") else {
    return
}
let attributes: [NSAttributedString.Key: Any] = [
    .foregroundColor: UIColor.blue,
    .font: UIFont.preferredFont(forTextStyle: .headline)
]
let lockSymbol = NSMutableAttributedString(
    attachment: NSTextAttachment(image: lockImage)
)
lockSymbol.addAttributes(attributes, 
                         range: NSRange(location: 0, length: 1))
content.insert(lockSymbol, at: 5)

```

## See Also

### Initializing a text attachment

- [init(fileWrapper:)](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [init(data:ofType:)](init%28data_oftype_%29.md): Creates a text attachment object with the specified data.

# textAttachmentWithImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a text attachment object to contain the specified image.

## Declaration

```objectivec
+ (NSTextAttachment *) textAttachmentWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image for the attachment.

<a id="return-value"></a>

## Return Value

A new text attachment object initialized with the image.

<a id="Discussion"></a>

## Discussion

Attachments created with this method automatically adapt to the surrounding font and color attributes in attributed strings.

For example, the following code creates a text attachment from the [UIImage](../uiimage.md) class using an SF symbol in a blue headline style and embeds it at the end of the [NSMutableAttributedString](../../foundation/nsmutableattributedstring.md) class:

```swift
let content = NSMutableAttributedString(string: "Open ")
guard let lockImage = UIImage(systemName: "lock") else {
    return
}
let attributes: [NSAttributedString.Key: Any] = [
    .foregroundColor: UIColor.blue,
    .font: UIFont.preferredFont(forTextStyle: .headline)
]
let lockSymbol = NSMutableAttributedString(
    attachment: NSTextAttachment(image: lockImage)
)
lockSymbol.addAttributes(attributes, 
                         range: NSRange(location: 0, length: 1))
content.insert(lockSymbol, at: 5)

```

## See Also

### Initializing a text attachment

- [initWithFileWrapper:](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [initWithData:ofType:](init%28data_oftype_%29.md): Creates a text attachment object with the specified data.
