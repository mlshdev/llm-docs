> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct)

# UIButton.Configuration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A configuration that specifies the appearance and behavior of a button and its contents.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

You can configure and update a button with a [UIButton.Configuration](configuration-swift.struct.md). A button configuration contains all the customization options available with other methods, such as [setTitle(\_:for:)](settitle%28__for_%29.md), and can serve as a replacement for those methods. Alternatively, you can use a configuration in combination with these other methods and adopt new button behaviors and appearance without rewriting your customized [UIButton](../uibutton.md) code.

## Topics

### Creating configurations

- [plain()](configuration-swift.struct/plain%28%29.md): Creates a configuration for a button with a transparent background.
- [gray()](configuration-swift.struct/gray%28%29.md): Creates a configuration for a button with a gray background.
- [tinted()](configuration-swift.struct/tinted%28%29.md): Creates a configuration for a button with a tinted background color.
- [filled()](configuration-swift.struct/filled%28%29.md): Creates a configuration for a button with a background filled with the button’s tint color.
- [borderless()](configuration-swift.struct/borderless%28%29.md): Creates a configuration for a button that has a borderless style.
- [bordered()](configuration-swift.struct/bordered%28%29.md): Creates a configuration for a button that has a bordered style.
- [borderedTinted()](configuration-swift.struct/borderedtinted%28%29.md): Creates a configuration for a button that has a tinted, bordered style.
- [borderedProminent()](configuration-swift.struct/borderedprominent%28%29.md): Creates a configuration for a button that has a prominent, bordered style.
- [glass()](configuration-swift.struct/glass%28%29.md): Creates a configuration for a button that has a Liquid Glass style.
- [prominentGlass()](configuration-swift.struct/prominentglass%28%29.md): Creates a configuration for a button that has a prominent Liquid Glass style.
- [clearGlass()](configuration-swift.struct/clearglass%28%29.md): Creates a configuration for a button that has a clear Liquid Glass style.
- [prominentClearGlass()](configuration-swift.struct/prominentclearglass%28%29.md): Creates a configuration for a button that has a prominent, clear Liquid Glass style.
- [updated(for:)](configuration-swift.struct/updated%28for_%29.md): Returns a copy of the configuration, updated for the given button.

### Configuring titles

- [title](configuration-swift.struct/title.md): The text of the title label the button displays.
- [subtitle](configuration-swift.struct/subtitle.md): The text the subtitle label of the button displays.
- [attributedTitle](configuration-swift.struct/attributedtitle.md): The text and style attributes for the button’s title label.
- [attributedSubtitle](configuration-swift.struct/attributedsubtitle.md): The text and style attributes for the button’s subtitle label.
- [titleTextAttributesTransformer](configuration-swift.struct/titletextattributestransformer.md): A structure to update the attributed title when the button state changes.
- [subtitleTextAttributesTransformer](configuration-swift.struct/subtitletextattributestransformer.md): A structure to update the attributed subtitle when the button state changes.
- [UIConfigurationTextAttributesTransformer](../uiconfigurationtextattributestransformer-swift.struct.md): Defines a text transformation that can affect the visual appearance of a string.
- [titlePadding](configuration-swift.struct/titlepadding.md): The distance between the title and subtitle labels.
- [titleAlignment](configuration-swift.struct/titlealignment-swift.property.md): The text alignment the button uses to lay out the title and subtitle.
- [UIButton.Configuration.TitleAlignment](configuration-swift.struct/titlealignment-swift.enum.md): Specifies how to align a button’s title and subtitle.
- [titleLineBreakMode](configuration-swift.struct/titlelinebreakmode.md): The line break mode the button uses to lay out the button’s title.
- [subtitleLineBreakMode](configuration-swift.struct/subtitlelinebreakmode.md): The line break mode the button uses to lay out the button’s subtitle.

### Configuring images

- [image](configuration-swift.struct/image.md): The foreground image the button displays.
- [imagePadding](configuration-swift.struct/imagepadding.md): The distance between the button’s image and text.
- [imagePlacement](configuration-swift.struct/imageplacement.md): The edge against which the button places the image.
- [imageReservation](configuration-swift.struct/imagereservation.md): A value that reserves space for the image in the same axis as the edge against which the button places the image.
- [imageColorTransformer](configuration-swift.struct/imagecolortransformer.md): A block that transforms the image color when the button state changes.
- [preferredSymbolConfigurationForImage](configuration-swift.struct/preferredsymbolconfigurationforimage.md): A requested configuration object for the button symbol image.

### Configuring layout

- [buttonSize](configuration-swift.struct/buttonsize.md): A size that requests a preferred size for the button.
- [UIButton.Configuration.Size](configuration-swift.struct/size.md): A predefined size for button elements.
- [contentInsets](configuration-swift.struct/contentinsets.md): The distance from the button’s content area to its bounds.
- [setDefaultContentInsets()](configuration-swift.struct/setdefaultcontentinsets%28%29.md): Restores the default content insets.

### Configuring button colors

- [baseBackgroundColor](configuration-swift.struct/basebackgroundcolor.md): The untransformed color for background views.
- [baseForegroundColor](configuration-swift.struct/baseforegroundcolor.md): The untransformed color for foreground views.

### Configuring the button background

- [background](configuration-swift.struct/background.md): The configuration to customize the button background.
- [cornerStyle](configuration-swift.struct/cornerstyle-swift.property.md): The button style that controls the display behavior of the background corner radius.
- [UIButton.Configuration.CornerStyle](configuration-swift.struct/cornerstyle-swift.enum.md): Settings that determine the appearance of the background corner radius.

### Configuring the indicator

- [indicator](configuration-swift.struct/indicator-swift.property.md): The style of the indicator that appears on the button.
- [UIButton.Configuration.Indicator](configuration-swift.struct/indicator-swift.enum.md): Constants that determine the style of the indicator that appears on a button.
- [indicatorColorTransformer](configuration-swift.struct/indicatorcolortransformer.md): The color transformer for resolving the indicator color.

### Configuring the activity indicator

- [showsActivityIndicator](configuration-swift.struct/showsactivityindicator.md): A Boolean value that determines whether the button displays an activity indicator instead of an image.
- [activityIndicatorColorTransformer](configuration-swift.struct/activityindicatorcolortransformer.md): The color transformer for resolving the color of the activity indicator.

### Configuring selection behavior

- [automaticallyUpdateForSelection](configuration-swift.struct/automaticallyupdateforselection.md): A Boolean value that determines whether the style automatically updates when the button is in a selected state.

### Configuring the appearance on macOS

- [macIdiomStyle](configuration-swift.struct/macidiomstyle-swift.property.md): The style to use when this button appears in macOS.
- [UIButton.Configuration.MacIdiomStyle](configuration-swift.struct/macidiomstyle-swift.enum.md): The button style your app uses when running in macOS.

### Instance Properties

- [symbolContentTransition](configuration-swift.struct/symbolcontenttransition.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating buttons from a configuration object

- [init(configuration:primaryAction:)](init%28configuration_primaryaction_%29.md): Creates a new button with the specified configuration and registers the primary action event.
