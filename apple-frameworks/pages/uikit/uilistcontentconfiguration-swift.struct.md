> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct)

# UIListContentConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A content configuration for a list-based content view.

## Declaration

```swift
struct UIListContentConfiguration
```

<a id="overview"></a>

## Overview

A list content configuration describes the styling and content for an individual element that might appear in a list, like a cell, header, or footer. Using a list content configuration, you can obtain system default styling for a variety of different view states. You fill the configuration with your content, and then assign it directly to cells, headers, and footers in [UICollectionView](uicollectionview.md) and [UITableView](uitableview.md), or to your own custom list content view ([UIListContentView](uilistcontentview.md)).

For views like cells, headers, and footers, use their [defaultContentConfiguration()](uicollectionviewlistcell/defaultcontentconfiguration%28%29.md) to get a list content configuration that has preconfigured default styling. Alternatively, you can create a list content configuration from one of the system default styles. After you get the configuration, you assign your content to it, customize any other properties, and assign it to your view as the current content configuration.

```swift
var content = cell.defaultContentConfiguration()

// Configure content.
content.image = UIImage(systemName: "star")
content.text = "Favorites"

// Customize appearance.
content.imageProperties.tintColor = .purple

cell.contentConfiguration = content
```

## Topics

### Creating default cell configurations

- [cell()](uilistcontentconfiguration-swift.struct/cell%28%29.md): Creates the default configuration you use to style a cell in a list.
- [subtitleCell()](uilistcontentconfiguration-swift.struct/subtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains subtitle text.
- [valueCell()](uilistcontentconfiguration-swift.struct/valuecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains side-by-side value text.
- [sidebarCell()](uilistcontentconfiguration-swift.struct/sidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [sidebarSubtitleCell()](uilistcontentconfiguration-swift.struct/sidebarsubtitlecell%28%29.md): Deprecated. Creates the default configuration you use to style a cell that’s in a sidebar list and contains subtitle text.
- [accompaniedSidebarCell()](uilistcontentconfiguration-swift.struct/accompaniedsidebarcell%28%29.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
- [accompaniedSidebarSubtitleCell()](uilistcontentconfiguration-swift.struct/accompaniedsidebarsubtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in an accompanied sidebar list and contains subtitle text.

### Creating header and footer configurations

- [plainHeader()](uilistcontentconfiguration-swift.struct/plainheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a plain list.
- [plainFooter()](uilistcontentconfiguration-swift.struct/plainfooter%28%29.md): Deprecated. Creates the default configuration you use to style a footer in a plain list.
- [groupedHeader()](uilistcontentconfiguration-swift.struct/groupedheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a grouped list.
- [groupedFooter()](uilistcontentconfiguration-swift.struct/groupedfooter%28%29.md): Deprecated. Creates the default configuration you use to style a footer in a grouped list.
- [prominentInsetGroupedHeader()](uilistcontentconfiguration-swift.struct/prominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style a prominent header in an inset grouped list.
- [extraProminentInsetGroupedHeader()](uilistcontentconfiguration-swift.struct/extraprominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style an extra prominent header in an inset grouped list.
- [sidebarHeader()](uilistcontentconfiguration-swift.struct/sidebarheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a sidebar list.

### Customizing content

- [image](uilistcontentconfiguration-swift.struct/image.md): The image to display.
- [text](uilistcontentconfiguration-swift.struct/text.md): The primary text.
- [attributedText](uilistcontentconfiguration-swift.struct/attributedtext.md): An attributed variant of the primary text.
- [secondaryText](uilistcontentconfiguration-swift.struct/secondarytext.md): The secondary text.
- [secondaryAttributedText](uilistcontentconfiguration-swift.struct/secondaryattributedtext.md): An attributed variant of the secondary text.

### Customizing appearance

- [imageProperties](uilistcontentconfiguration-swift.struct/imageproperties-swift.property.md): Properties for configuring the image.
- [textProperties](uilistcontentconfiguration-swift.struct/textproperties-swift.property.md): Properties for configuring the primary text.
- [secondaryTextProperties](uilistcontentconfiguration-swift.struct/secondarytextproperties.md): Properties for configuring the secondary text.
- [UIListContentConfiguration.ImageProperties](uilistcontentconfiguration-swift.struct/imageproperties-swift.struct.md): Properties that affect the list content configuration’s image.
- [UIListContentConfiguration.TextProperties](uilistcontentconfiguration-swift.struct/textproperties-swift.struct.md): Properties that affect the list content configuration’s text.

### Customizing layout

- [axesPreservingSuperviewLayoutMargins](uilistcontentconfiguration-swift.struct/axespreservingsuperviewlayoutmargins.md): A Boolean value that determines whether the content view preserves the layout margins that it inherits from its superview on the horizontal or vertical axes.
- [directionalLayoutMargins](uilistcontentconfiguration-swift.struct/directionallayoutmargins.md): The margins between the content and the edges of the content view.
- [prefersSideBySideTextAndSecondaryText](uilistcontentconfiguration-swift.struct/preferssidebysidetextandsecondarytext.md): A Boolean value that determines whether the configuration positions the text and secondary text side by side.
- [imageToTextPadding](uilistcontentconfiguration-swift.struct/imagetotextpadding.md): The padding between the image and text.
- [textToSecondaryTextHorizontalPadding](uilistcontentconfiguration-swift.struct/texttosecondarytexthorizontalpadding.md): The minimum horizontal padding between the text and secondary text.
- [textToSecondaryTextVerticalPadding](uilistcontentconfiguration-swift.struct/texttosecondarytextverticalpadding.md): The vertical padding between the text and secondary text.

### Instance Properties

- [alpha](uilistcontentconfiguration-swift.struct/alpha.md)

### Type Methods

- [footer()](uilistcontentconfiguration-swift.struct/footer%28%29.md)
- [header()](uilistcontentconfiguration-swift.struct/header%28%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [UIContentConfiguration](uicontentconfiguration-9eib5.md)

## See Also

### Content configurations

- [UIListContentView](uilistcontentview.md): A content view for displaying list-based content.
- [UIContentConfiguration](uicontentconfiguration-9eib5.md): The requirements for an object that provides the configuration for a content view.
- [UIContentView](uicontentview-5fh3z.md): The requirements for a content view that you create using a configuration.
