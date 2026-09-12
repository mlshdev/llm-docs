> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/wrapping-text-around-a-component](https://developer.apple.com/documentation/applenews/wrapping-text-around-a-component)

# Wrapping Text Around a Component

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Define the layout of a text component to wrap around another component.

<a id="overview"></a>

## Overview

You can wrap the text of one body component around another component by using the `targetAnchorPosition` property of the [Anchor](../applenewsformat/anchor.md) object. For example, you can wrap body text around a pull quote. You can include an `Anchor` object in a text component to vertically align that component to the position of a text character in a body component. If they also share columns, these components would then overlap. In the case of overlap, the text would automatically wrap around the component that contains the `Anchor` object.

Consider the following figure:

- The article has a 7-column layout.
- A `body` component starts in column 0 and spans 5 columns.
- A `pullquote` component starts in column 4 and spans 3 columns.
- A `pullquote` component contains an `Ancho`r object that aligns the pull quote with a character range in the second paragraph of the body component.

![Screenshot of an article layout with body and pull quote.](https://developer.apple.com/images/com.apple.applenews/media-4087468@2x.png)

> **Tip**

>  For a step-by-step process for creating an inset pull quote, see [Advanced Design Tutorial 2: Layout and Positioning](apple-news-format-tutorials.md#Advanced-Design-Tutorial-2-Layout-and-Positioning). Get started at [Setting Up the Advanced Tutorials](setting-up-the-advanced-tutorials.md).

## See Also

### Article Layout

- [Planning the Layout for Your Article](planning-the-layout-for-your-article.md): Define a layout that supports the look you want for your article.
- [Positioning the Content in Your Article](positioning-the-content-in-your-article.md): Align article components with columns in your layout.
- [Layout](../applenewsformat/layout.md): The object for defining columns, gutters, and margins for your article’s designed width.
- [ComponentLayout](../applenewsformat/componentlayout.md): The object for defining the positioning for a specific component within the article’s column system.
- [Anchor](../applenewsformat/anchor.md): The object for anchoring one component to another component in your article’s layout.
- [Margin](../applenewsformat/margin.md): The object for defining the space above and below a component.
- [AutoPlacementLayout](../applenewsformat/autoplacementlayout.md): Deprecated. The object for defining the margin above and below advertising components.
- [AdvertisingLayout](../applenewsformat/advertisinglayout.md): Deprecated. The object for defining the margin above and below advertising components.
