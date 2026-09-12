> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/titlealignment-swift.enum](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/titlealignment-swift.enum)

# UIButton.Configuration.TitleAlignment

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Specifies how to align a button’s title and subtitle.

## Declaration

```swift
enum TitleAlignment
```

<a id="overview"></a>

## Overview

If your button displays both [title](title.md) and [subtitle](subtitle.md), use this enumeration to configure how the text aligns.

## Topics

### Title alignments

- [UIButton.Configuration.TitleAlignment.automatic](titlealignment-swift.enum/automatic.md): Aligns the title and subtitle based on other elements in the button configuration, like an image or activity indicator.
- [UIButton.Configuration.TitleAlignment.center](titlealignment-swift.enum/center.md): Aligns the title and subtitle on their horizontal centers.
- [UIButton.Configuration.TitleAlignment.leading](titlealignment-swift.enum/leading.md): Aligns the title and subtitle on their leading edges.
- [UIButton.Configuration.TitleAlignment.trailing](titlealignment-swift.enum/trailing.md): Aligns the title and subtitle on their trailing edges.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

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
- [titleLineBreakMode](titlelinebreakmode.md): The line break mode the button uses to lay out the button’s title.
- [subtitleLineBreakMode](subtitlelinebreakmode.md): The line break mode the button uses to lay out the button’s subtitle.
