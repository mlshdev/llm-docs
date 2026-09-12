> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagetemplatelayout/image](https://developer.apple.com/documentation/messages/msmessagetemplatelayout/image)

# image (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An image used to represent the message in the transcript.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The system crops the left and right edges of the image by 6 points, and rounds the image’s corners.

The template can have either an image or a media file. If this property is set to a non-`nil` value, the [mediaFileURL](mediafileurl.md) property is ignored. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.

# image (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An image used to represent the message in the transcript.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The system crops the left and right edges of the image by 6 points, and rounds the image’s corners.

The template can have either an image or a media file. If this property is set to a non-`nil` value, the [mediaFileURL](mediafileurl.md) property is ignored. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.
