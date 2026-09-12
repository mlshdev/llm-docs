> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagetemplatelayout/trailingcaption](https://developer.apple.com/documentation/messages/msmessagetemplatelayout/trailingcaption)

# trailingCaption (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A right-aligned caption for the message bubble.

## Declaration

```swift
var trailingCaption: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The trailing caption is drawn using black text and is positioned at the bottom-right corner of the message bubble, just below the image or media file. This text is right aligned and positioned on the same line as the caption. The trailing caption can wrap to three lines before being truncated. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.

# trailingCaption (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A right-aligned caption for the message bubble.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * trailingCaption;
```

<a id="Discussion"></a>

## Discussion

The trailing caption is drawn using black text and is positioned at the bottom-right corner of the message bubble, just below the image or media file. This text is right aligned and positioned on the same line as the caption. The trailing caption can wrap to three lines before being truncated. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [mediaFileURL](mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.
