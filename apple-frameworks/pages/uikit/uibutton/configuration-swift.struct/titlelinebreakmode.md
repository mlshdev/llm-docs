> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/titlelinebreakmode](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/titlelinebreakmode)

# titleLineBreakMode

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

The line break mode the button uses to lay out the button’s title.

## Declaration

```swift
var titleLineBreakMode: NSLineBreakMode { get set }
```

<a id="Discussion"></a>

## Discussion

Word and character wrapping modes enable multiline text, while other modes restrict the text to a single line.

The default value is [NSLineBreakMode.byWordWrapping](../../nslinebreakmode/bywordwrapping.md).

## See Also

### Configuring titles

- [title](title.md): The text of the title label the button displays.
- [subtitle](subtitle.md): The text the subtitle label of the button displays.
- [attributedTitle](attributedtitle.md): The text and style attributes for the button’s title label.
- [attributedSubtitle](attributedsubtitle.md): The text and style attributes for the button’s subtitle label.
- [titleTextAttributesTransformer](titletextattributestransformer.md): A structure to update the attributed title when the button state changes.
- [subtitleTextAttributesTransformer](subtitletextattributestransformer.md): A structure to update the attributed subtitle when the button state changes.
- [UIConfigurationTextAttributesTransformer](../../uiconfigurationtextattributestransformer-swift.struct.md): Defines a text transformation that can affect the visual appearance of a string.
- [titlePadding](titlepadding.md): The distance between the title and subtitle labels.
- [titleAlignment](titlealignment-swift.property.md): The text alignment the button uses to lay out the title and subtitle.
- [UIButton.Configuration.TitleAlignment](titlealignment-swift.enum.md): Specifies how to align a button’s title and subtitle.
- [subtitleLineBreakMode](subtitlelinebreakmode.md): The line break mode the button uses to lay out the button’s subtitle.
