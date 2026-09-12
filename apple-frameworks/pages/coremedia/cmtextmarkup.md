> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtextmarkup](https://developer.apple.com/documentation/coremedia/cmtextmarkup)

# CMTextMarkup

**Interface languages:** Swift, Objective-C

**Framework:** Core Media  
**Kind:** API Collection

Attributes that specify text markup in legible media.

<a id="overview"></a>

## Overview

Core Media supports legible media streams like subtitles and closed captions. In some cases, apps may need to specify style information to control rendering. In other cases, the framework indicates the text and styling to apply.

## Topics

### Fonts

- [kCMTextMarkupAttribute_FontFamilyName](kcmtextmarkupattribute_fontfamilyname.md): A name of a font family.
- [kCMTextMarkupAttribute_GenericFontFamilyName](kcmtextmarkupattribute_genericfontfamilyname.md): A generic font family name identifier.
- [kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight](kcmtextmarkupattribute_basefontsizepercentagerelativetovideoheight.md): A base font size as a percentage of the video height.
- [kCMTextMarkupAttribute_RelativeFontSize](kcmtextmarkupattribute_relativefontsize.md): A font size as a percentage of the current default font size.

### Styles

- [kCMTextMarkupAttribute_BoldStyle](kcmtextmarkupattribute_boldstyle.md): A bold font style.
- [kCMTextMarkupAttribute_ItalicStyle](kcmtextmarkupattribute_italicstyle.md): An italic font style.
- [kCMTextMarkupAttribute_UnderlineStyle](kcmtextmarkupattribute_underlinestyle.md): An underline font style.
- [kCMTextMarkupAttribute_CharacterEdgeStyle](kcmtextmarkupattribute_characteredgestyle.md): A style for character edges.

### Colors

- [kCMTextMarkupAttribute_ForegroundColorARGB](kcmtextmarkupattribute_foregroundcolorargb.md): A foreground color for the text.
- [kCMTextMarkupAttribute_BackgroundColorARGB](kcmtextmarkupattribute_backgroundcolorargb.md): A background color for the text.
- [kCMTextMarkupAttribute_CharacterBackgroundColorARGB](kcmtextmarkupattribute_characterbackgroundcolorargb.md): A background color for individual text characters.

### Layout

- [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md): The vertical layout of a text block.
- [kCMTextMarkupAttribute_Alignment](kcmtextmarkupattribute_alignment.md): The text alignment in the writing direction of the first line of text.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
- [kCMTextMarkupAttribute_WritingDirectionSizePercentage](kcmtextmarkupattribute_writingdirectionsizepercentage.md): The width or height as a percentage of the bounding box that contains the text.
