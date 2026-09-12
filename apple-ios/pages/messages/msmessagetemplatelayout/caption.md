> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagetemplatelayout/caption](https://developer.apple.com/documentation/messages/msmessagetemplatelayout/caption)

# caption (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A left-aligned caption for the message bubble.

## Declaration

```swift
var caption: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The caption is drawn using black text and is positioned at the bottom-left corner of the message bubble, just below the image or media file. The caption can wrap to three lines before being truncated. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.

# caption (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A left-aligned caption for the message bubble.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * caption;
```

<a id="Discussion"></a>

## Discussion

The caption is drawn using black text and is positioned at the bottom-left corner of the message bubble, just below the image or media file. The caption can wrap to three lines before being truncated. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.
