> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/titlealignment](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/titlealignment)

# titleAlignment

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The text alignment the button uses to lay out the title and subtitle.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIButtonConfigurationTitleAlignment titleAlignment;
```

<a id="Discussion"></a>

## Discussion

The title aligment can align the title and subtitle labels along the leading or trailing edges, or center them relative to each other.

## See Also

### Configuring titles

- [title](title.md): The text of the title label the button displays.
- [subtitle](subtitle.md): The text the subtitle label of the button displays.
- [attributedTitle](attributedtitle.md): The text and style attributes for the button’s title label.
- [attributedSubtitle](attributedsubtitle.md): The text and style attributes for the button’s subtitle label.
- [titleTextAttributesTransformer](titletextattributestransformer.md): A transformer to update the attributed title when the button state changes.
- [subtitleTextAttributesTransformer](subtitletextattributestransformer.md): A transformer to update the attributed subtitle when the button state changes.
- [UIConfigurationTextAttributesTransformer](../uiconfigurationtextattributestransformer-c.typealias.md): Defines a text transformation that can affect the visual appearance of a string.
- [titlePadding](titlepadding.md): The distance between the title and subtitle labels.
- [UIButtonConfigurationTitleAlignment](../uibuttonconfigurationtitlealignment.md): Specifies how to align a button’s title and subtitle.
- [titleLineBreakMode](titlelinebreakmode.md): The line break mode the button uses to lay out the button’s title.
- [subtitleLineBreakMode](subtitlelinebreakmode.md): The line break mode the button uses to lay out the button’s subtitle.
