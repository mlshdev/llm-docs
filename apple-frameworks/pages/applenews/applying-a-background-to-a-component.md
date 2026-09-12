> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/applying-a-background-to-a-component](https://developer.apple.com/documentation/applenews/applying-a-background-to-a-component)

# Applying a Background to a Component

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Change the appearance of the backgrounds in your article.

<a id="overview"></a>

## Overview

You can specify a background, or `fill`, that Apple News Format applies on top of a componentʼs background color. The fill can be an image, a repeatable image, a linear gradient, or a video. For each of these options, you can set properties that determine how Apple News Format displays the background and how the background behaves.

To set a background for a component, use the `fill` property in the [ComponentStyle](../applenewsformat/componentstyle.md) object the component uses. Apple News Format lets you choose from these types of fills for your backgrounds:

- [ImageFill](../applenewsformat/imagefill.md). Use an image as your background.
- [RepeatableImageFill](../applenewsformat/repeatableimagefill.md). Use an image that can be repeated as your background.
- [VideoFill](../applenewsformat/videofill.md). Use a video that starts automatically as your background.
- [LinearGradientFill](../applenewsformat/lineargradientfill.md). Transition from one color at the top of the component to another color at the bottom. You can set the colors (and percentages) as well as the angle of the gradient fill. An angle of 90 degrees transitions from left to right instead of top to bottom.

## See Also

### Backgrounds for Components

- [ImageFill](../applenewsformat/imagefill.md): The object for adding an image background fill to a component.
- [RepeatableImageFill](../applenewsformat/repeatableimagefill.md): The object for adding a background image that Apple News can repeat.
- [VideoFill](../applenewsformat/videofill.md): The object for adding a video background fill to a component.
- [LinearGradientFill](../applenewsformat/lineargradientfill.md): The object for displaying a linear gradient as a component background.
- [GradientFill](../applenewsformat/gradientfill.md): The properties all gradient fill types share.
- [Fill](../applenewsformat/fill.md): The object for setting a fill type and attachment for a component’s background fill.
- [ColorStop](../applenewsformat/colorstop.md): The object for specifying the color and location for a color stop in a gradient.
