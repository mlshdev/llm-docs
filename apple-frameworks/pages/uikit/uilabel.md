> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel](https://developer.apple.com/documentation/uikit/uilabel)

# UILabel (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that displays one or more lines of informational text.

## Declaration

```swift
@MainActor class UILabel
```

## Mentioned In

- [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md)
- [About app development with UIKit](about-app-development-with-uikit.md)
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md)

<a id="overview"></a>

## Overview

You can configure the overall appearance of a label’s text, and use attributed strings to customize the appearance of substrings within the text. Add and customize labels in your interface programmatically, or with the Attributes inspector in Interface Builder.

Follow these steps to add a label to your interface:

- Supply either a string or an attributed string that represents the content.
- If you’re using a nonattributed string, configure the appearance of the label.
- Set up Auto Layout rules to govern the size and position of the label in your interface.
- Provide accessibility information and localized strings.

<a id="Customize-the-labels-appearance"></a>

### Customize the label’s appearance

You provide the content for a label by assigning either a [NSString](../foundation/nsstring.md) object to the [text](uilabel/text.md) property, or an [NSAttributedString](../foundation/nsattributedstring.md) object to the [attributedText](uilabel/attributedtext.md) property. The label displays the property set most recently.

The [attributedText](uilabel/attributedtext.md) property allows you to control the appearance of individual characters and groups of characters, using the [NSAttributedString](../foundation/nsattributedstring.md) API. The following image shows a label displaying an [NSAttributedString](../foundation/nsattributedstring.md) that includes attributes to customize the font, color, and alignment of the string.

![A screenshot of a label showing text aligned to the left and formatted with different attributes. The first attribute changes the text color of the second word to a color different from the rest of the text. The second attribute applies a bold font to the fifth word. The third and final attribute highlights the last four words that the label displays. The display text ends with an ellipsis indicating that the label truncates the full text at the end due to its line break mode. ](https://developer.apple.com/images/com.apple.uikit/media-2759882@2x.png)

If you want to format the label’s text in a uniform fashion, set the [text](uilabel/text.md) property to an [NSString](../foundation/nsstring.md) object containing the content, and configure the [font](uilabel/font.md), [textColor](uilabel/textcolor.md), [textAlignment](uilabel/textalignment.md), and [lineBreakMode](uilabel/linebreakmode.md) properties. The following image shows a label displaying an [NSString](../foundation/nsstring.md) with a custom font, color, and alignment.

![A screenshot of a label displaying text with a center alignment and truncated in the middle, showing the beginning and ending of the full text, separated with an ellipsis.](https://developer.apple.com/images/com.apple.uikit/media-2759883@2x.png)

If you set these appearance properties on a label that displays the content of the [attributedText](uilabel/attributedtext.md) property, the label overrides the appropriate attributes and displays the attributed string with a uniform appearance. The following image shows the label from the first image with the [textColor](uilabel/textcolor.md) property set to green.

![A screenshot of a label showing left aligned text. The color of the text is green.](https://developer.apple.com/images/com.apple.uikit/media-2759884@2x.png)

Specify the maximum number of lines for the label to use when laying out the text with the [numberOfLines](uilabel/numberoflines.md) property. Setting a value of `0` allows the label to use as many lines as necessary to lay out the text within the label’s width. Use the [lineBreakMode](uilabel/linebreakmode.md) property to control how the label splits the text into multiple lines, and the truncation behavior associated with the final line.

Use Auto Layout to position and optionally size the label. The intrinsic content size for a label defaults to the size that displays the entirety of the content on a single line. If you provide Auto Layout constraints that define the width of the label but not the height, the label’s intrinsic content size adjusts the height to display the text completely.

When the label has its size completely defined externally, you can specify how it handles the situation when its content doesn’t fit within the bounds. To reduce the font size, set the [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md) property to [true](https://developer.apple.com/documentation/swift/true) and set the [minimumScaleFactor](uilabel/minimumscalefactor.md) property to a value between `0` and `1`. The latter of these properties represents how much smaller than the requested font size the label scales the text. Setting the [allowsDefaultTighteningForTruncation](uilabel/allowsdefaulttighteningfortruncation.md) property to [true](https://developer.apple.com/documentation/swift/true) instructs the label to reduce the spacing between characters before truncating the string. The following image shows a label that uses [minimumScaleFactor](uilabel/minimumscalefactor.md) and [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md) to display the content of an entire string that would otherwise have overflowed.

![A screenshot showing two labels containing the same text, displayed side by side. The label on the left side truncates the text at the end. The label on the right side displays the full text in an adjusted, smaller font that fits within the display area of the label.](https://developer.apple.com/images/com.apple.uikit/media-2759885@2x.png)

<a id="Design-labels-for-a-wide-audience"></a>

### Design labels for a wide audience

Labels provide valuable information to your users. To make sure that information reaches a wide audience, internationalize text and support accessibility in your labels. For information about how to implement internationalization and localization, see [Internationalization](https://developer.apple.com/internationalization/). Labels are accessible to VoiceOver by default. The default accessibility traits for a label are Static Text and User Interaction Enabled. For more information, see [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md). To learn about using text styles to support Dynamic Type, see [Scaling fonts automatically](scaling-fonts-automatically.md).

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/labels/).

## Topics

### Accessing the text attributes

- [text](uilabel/text.md): The text that the label displays.
- [attributedText](uilabel/attributedtext.md): The styled text that the label displays.
- [font](uilabel/font.md): The font of the text.
- [textColor](uilabel/textcolor.md): The color of the text.
- [textAlignment](uilabel/textalignment.md): The technique for aligning the text.
- [lineBreakMode](uilabel/linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](uilabel/linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [isEnabled](uilabel/isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](uilabel/enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](uilabel/showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](uilabel/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](uilabel/baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](uilabel/minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](uilabel/numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

### Managing highlight values

- [highlightedTextColor](uilabel/highlightedtextcolor.md): The highlight color for the label’s text.
- [isHighlighted](uilabel/ishighlighted.md): A Boolean value that determines whether the label draws its text with a highlight.

### Managing vibrancy

- [preferredVibrancy](uilabel/preferredvibrancy.md)
- [UILabelVibrancy](uilabelvibrancy.md)

### Drawing a shadow

- [shadowColor](uilabel/shadowcolor.md): The shadow color of the text.
- [shadowOffset](uilabel/shadowoffset.md): The shadow offset, in points, for the text.

### Drawing and positioning overrides

- [textRect(forBounds:limitedToNumberOfLines:)](uilabel/textrect%28forbounds_limitedtonumberoflines_%29.md): Returns the drawing rectangle for the label’s text.
- [drawText(in:)](uilabel/drawtext%28in_%29.md): Draws the label’s text, or its shadow, in the specified rectangle.

### Getting the layout constraints

- [preferredMaxLayoutWidth](uilabel/preferredmaxlayoutwidth.md): The preferred maximum width, in points, for a multiline label.

### Accessing additional attributes

- [isUserInteractionEnabled](uilabel/isuserinteractionenabled.md): A Boolean value that determines whether the system ignores and removes user events for this label from the event queue.
- [clipsToBounds](uilabel-clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.

### Supporting types

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UILetterformAwareAdjusting](uiletterformawareadjusting.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Text views

- [UITextField](uitextfield.md): An object that displays an editable text area in your interface.
- [UITextView](uitextview.md): A scrollable, multiline text region.
- [Drag and drop customization](drag-and-drop-customization.md): Extend the standard drag and drop support for text views to include custom types of content.

# UILabel (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that displays one or more lines of informational text.

## Declaration

```objectivec
@interface UILabel : UIView
```

## Mentioned In

- [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md)
- [About app development with UIKit](about-app-development-with-uikit.md)
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md)

<a id="overview"></a>

## Overview

You can configure the overall appearance of a label’s text, and use attributed strings to customize the appearance of substrings within the text. Add and customize labels in your interface programmatically, or with the Attributes inspector in Interface Builder.

Follow these steps to add a label to your interface:

- Supply either a string or an attributed string that represents the content.
- If you’re using a nonattributed string, configure the appearance of the label.
- Set up Auto Layout rules to govern the size and position of the label in your interface.
- Provide accessibility information and localized strings.

<a id="Customize-the-labels-appearance"></a>

### Customize the label’s appearance

You provide the content for a label by assigning either a [NSString](../foundation/nsstring.md) object to the [text](uilabel/text.md) property, or an [NSAttributedString](../foundation/nsattributedstring.md) object to the [attributedText](uilabel/attributedtext.md) property. The label displays the property set most recently.

The [attributedText](uilabel/attributedtext.md) property allows you to control the appearance of individual characters and groups of characters, using the [NSAttributedString](../foundation/nsattributedstring.md) API. The following image shows a label displaying an [NSAttributedString](../foundation/nsattributedstring.md) that includes attributes to customize the font, color, and alignment of the string.

![A screenshot of a label showing text aligned to the left and formatted with different attributes. The first attribute changes the text color of the second word to a color different from the rest of the text. The second attribute applies a bold font to the fifth word. The third and final attribute highlights the last four words that the label displays. The display text ends with an ellipsis indicating that the label truncates the full text at the end due to its line break mode. ](https://developer.apple.com/images/com.apple.uikit/media-2759882@2x.png)

If you want to format the label’s text in a uniform fashion, set the [text](uilabel/text.md) property to an [NSString](../foundation/nsstring.md) object containing the content, and configure the [font](uilabel/font.md), [textColor](uilabel/textcolor.md), [textAlignment](uilabel/textalignment.md), and [lineBreakMode](uilabel/linebreakmode.md) properties. The following image shows a label displaying an [NSString](../foundation/nsstring.md) with a custom font, color, and alignment.

![A screenshot of a label displaying text with a center alignment and truncated in the middle, showing the beginning and ending of the full text, separated with an ellipsis.](https://developer.apple.com/images/com.apple.uikit/media-2759883@2x.png)

If you set these appearance properties on a label that displays the content of the [attributedText](uilabel/attributedtext.md) property, the label overrides the appropriate attributes and displays the attributed string with a uniform appearance. The following image shows the label from the first image with the [textColor](uilabel/textcolor.md) property set to green.

![A screenshot of a label showing left aligned text. The color of the text is green.](https://developer.apple.com/images/com.apple.uikit/media-2759884@2x.png)

Specify the maximum number of lines for the label to use when laying out the text with the [numberOfLines](uilabel/numberoflines.md) property. Setting a value of `0` allows the label to use as many lines as necessary to lay out the text within the label’s width. Use the [lineBreakMode](uilabel/linebreakmode.md) property to control how the label splits the text into multiple lines, and the truncation behavior associated with the final line.

Use Auto Layout to position and optionally size the label. The intrinsic content size for a label defaults to the size that displays the entirety of the content on a single line. If you provide Auto Layout constraints that define the width of the label but not the height, the label’s intrinsic content size adjusts the height to display the text completely.

When the label has its size completely defined externally, you can specify how it handles the situation when its content doesn’t fit within the bounds. To reduce the font size, set the [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md) property to [true](https://developer.apple.com/documentation/swift/true) and set the [minimumScaleFactor](uilabel/minimumscalefactor.md) property to a value between `0` and `1`. The latter of these properties represents how much smaller than the requested font size the label scales the text. Setting the [allowsDefaultTighteningForTruncation](uilabel/allowsdefaulttighteningfortruncation.md) property to [true](https://developer.apple.com/documentation/swift/true) instructs the label to reduce the spacing between characters before truncating the string. The following image shows a label that uses [minimumScaleFactor](uilabel/minimumscalefactor.md) and [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md) to display the content of an entire string that would otherwise have overflowed.

![A screenshot showing two labels containing the same text, displayed side by side. The label on the left side truncates the text at the end. The label on the right side displays the full text in an adjusted, smaller font that fits within the display area of the label.](https://developer.apple.com/images/com.apple.uikit/media-2759885@2x.png)

<a id="Design-labels-for-a-wide-audience"></a>

### Design labels for a wide audience

Labels provide valuable information to your users. To make sure that information reaches a wide audience, internationalize text and support accessibility in your labels. For information about how to implement internationalization and localization, see [Internationalization](https://developer.apple.com/internationalization/). Labels are accessible to VoiceOver by default. The default accessibility traits for a label are Static Text and User Interaction Enabled. For more information, see [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md). To learn about using text styles to support Dynamic Type, see [Scaling fonts automatically](scaling-fonts-automatically.md).

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/labels/).

## Topics

### Accessing the text attributes

- [text](uilabel/text.md): The text that the label displays.
- [attributedText](uilabel/attributedtext.md): The styled text that the label displays.
- [font](uilabel/font.md): The font of the text.
- [textColor](uilabel/textcolor.md): The color of the text.
- [textAlignment](uilabel/textalignment.md): The technique for aligning the text.
- [lineBreakMode](uilabel/linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](uilabel/linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [enabled](uilabel/isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](uilabel/enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](uilabel/showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](uilabel/adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](uilabel/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](uilabel/baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](uilabel/minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](uilabel/numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [adjustsLetterSpacingToFitWidth](uilabel/adjustsletterspacingtofitwidth.md): Deprecated. A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.
- [minimumFontSize](uilabel/minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.

### Managing highlight values

- [highlightedTextColor](uilabel/highlightedtextcolor.md): The highlight color for the label’s text.
- [highlighted](uilabel/ishighlighted.md): A Boolean value that determines whether the label draws its text with a highlight.

### Managing vibrancy

- [preferredVibrancy](uilabel/preferredvibrancy.md)
- [UILabelVibrancy](uilabelvibrancy.md)

### Drawing a shadow

- [shadowColor](uilabel/shadowcolor.md): The shadow color of the text.
- [shadowOffset](uilabel/shadowoffset.md): The shadow offset, in points, for the text.

### Drawing and positioning overrides

- [textRectForBounds:limitedToNumberOfLines:](uilabel/textrect%28forbounds_limitedtonumberoflines_%29.md): Returns the drawing rectangle for the label’s text.
- [drawTextInRect:](uilabel/drawtext%28in_%29.md): Draws the label’s text, or its shadow, in the specified rectangle.

### Getting the layout constraints

- [preferredMaxLayoutWidth](uilabel/preferredmaxlayoutwidth.md): The preferred maximum width, in points, for a multiline label.

### Accessing additional attributes

- [userInteractionEnabled](uilabel/isuserinteractionenabled.md): A Boolean value that determines whether the system ignores and removes user events for this label from the event queue.
- [clipsToBounds](uilabel-clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.

### Supporting types

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md)
- [UILetterformAwareAdjusting](uiletterformawareadjusting.md)

## See Also

### Text views

- [UITextField](uitextfield.md): An object that displays an editable text area in your interface.
- [UITextView](uitextview.md): A scrollable, multiline text region.
- [Drag and drop customization](drag-and-drop-customization.md): Extend the standard drag and drop support for text views to include custom types of content.
