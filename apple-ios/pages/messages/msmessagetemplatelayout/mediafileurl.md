> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagetemplatelayout/mediafileurl](https://developer.apple.com/documentation/messages/msmessagetemplatelayout/mediafileurl)

# mediaFileURL (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A media file used to represent the message in the transcript.

## Declaration

```swift
var mediaFileURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The media file URL must be a file URL. For video files, the system crops the left and right edges of the media file by 6 points, and rounds its corners. For audio files, it shows a graphical representation of the audio’s waveform.

The template can have either an image or a media file. This property is ignored if the template has a non-`nil` [image](image.md) property. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.

# mediaFileURL (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A media file used to represent the message in the transcript.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * mediaFileURL;
```

<a id="Discussion"></a>

## Discussion

The media file URL must be a file URL. For video files, the system crops the left and right edges of the media file by 6 points, and rounds its corners. For audio files, it shows a graphical representation of the audio’s waveform.

The template can have either an image or a media file. This property is ignored if the template has a non-`nil` [image](image.md) property. This property defaults to `nil`.

## See Also

### Assigning Visual Elements

- [image](image.md): An image used to represent the message in the transcript.
- [imageTitle](imagetitle.md): The title for the image or media file.
- [imageSubtitle](imagesubtitle.md): The subtitle for the image or media file.
- [caption](caption.md): A left-aligned caption for the message bubble.
- [subcaption](subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](trailingsubcaption.md): A right-aligned subcaption for the message bubble.
