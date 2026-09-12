> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/components](https://developer.apple.com/documentation/applenews/components)

# Components

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** API Collection

Understand the types of components that can make up an article.

<a id="overview"></a>

## Overview

Components are some of the main objects you use to build your article, along with layouts and styles. Components hold the content of your article and are always in an array called `components`.

Each component in your article has a function that is expressed by a property called `role`. For example, the value of the `role` property might be `title`, `body`, `pullquote`, or `heading`. A component’s role determines what type of component it is. That is, when a component’s `role` is `body`, that type of component is referred to as a `body` component.  See [JSON Concepts and Article Structure](json-concepts-and-article-structure.md).

The following table gives you an overview of the components you can use to create an article in Apple News Format.

| **Component category** | **Component types** |
| --- | --- |
| Text | [Body](../applenewsformat/body.md), [Title](../applenewsformat/title.md), [Heading](../applenewsformat/heading.md) (heading1, heading2, heading3, heading4, heading5, heading6), [ArticleTitle](../applenewsformat/articletitle.md), [Intro](../applenewsformat/intro.md), [Caption](../applenewsformat/caption.md), [Author](../applenewsformat/author.md), [Byline](../applenewsformat/byline.md), [Illustrator](../applenewsformat/illustrator.md), [Photographer](../applenewsformat/photographer.md), [Quote](../applenewsformat/quote.md), [PullQuote](../applenewsformat/pullquote.md) |
| Images | [Image](../applenewsformat/image.md), [Photo](../applenewsformat/photo.md), [Figure](../applenewsformat/figure.md), [Portrait](../applenewsformat/portrait.md), [Logo](../applenewsformat/logo.md),  [ArticleThumbnail](../applenewsformat/articlethumbnail.md) |
| Galleries and Mosaic | [Gallery](../applenewsformat/gallery.md), [Mosaic](../applenewsformat/mosaic.md) |
| Audio and Video | [Audio](../applenewsformat/audio.md), [EmbedWebVideo](../applenewsformat/embedwebvideo.md), [Music](../applenewsformat/music.md), [Podcast](../applenewsformat/podcast.md), [Video](../applenewsformat/video.md) |
| Location | [Map](../applenewsformat/map.md), [Place](../applenewsformat/place.md) |
| Social Media | [FacebookPost](../applenewsformat/facebookpost.md), [Instagram](../applenewsformat/instagram.md), [TikTok](../applenewsformat/tiktok.md), [Tweet](../applenewsformat/tweet.md) |
| Tables | [DataTable](../applenewsformat/datatable.md), [HTMLTable](../applenewsformat/htmltable.md) |
| Advertisements | [ReplicaAdvertisement](../applenewsformat/replicaadvertisement.md) |
| Article Structure | [Container](../applenewsformat/container.md), [Section](../applenewsformat/section.md), [Chapter](../applenewsformat/chapter.md), [Aside](../applenewsformat/aside.md), [Header](../applenewsformat/header.md), [Divider](../applenewsformat/divider.md), [ArticleLink](../applenewsformat/articlelink.md), [LinkButton](../applenewsformat/linkbutton.md) |
| Augmented Reality | [ARKit](../applenewsformat/arkit.md) |

> **Note**

> Choosing the component `role` that best describes your content is important for better voice-over and for facilitating Siri suggestions. For example, instead of styling text in a `body` component to make it look like a heading, use a `heading` component for that text instead.

## Topics

### First Steps

- [Adding Components](adding-components.md): Learn the basics for adding components to your article.
- [Component](../applenewsformat/component.md): Properties shared by all component types.

### Text

- [Using HTML with Apple News Format](using-html-with-apple-news-format.md): Use HTML formatting for text components.
- [Using Markdown with Apple News Format](using-markdown-with-apple-news-format.md): Use Markdown formatting for text components.
- [Body](../applenewsformat/body.md): The component for adding body text.
- [Title](../applenewsformat/title.md): The component for adding an article title.
- [Heading](../applenewsformat/heading.md): The text component for adding a heading.
- [Intro](../applenewsformat/intro.md): The component for adding introductory text.
- [Caption](../applenewsformat/caption.md): The component for adding caption text.
- [Author](../applenewsformat/author.md): The component for adding the name of the author.
- [Byline](../applenewsformat/byline.md): The component for adding the publication date or contributor credits, especially for articles with multiple contributors.
- [Illustrator](../applenewsformat/illustrator.md): The component for adding illustrator credit.
- [Photographer](../applenewsformat/photographer.md): The component for adding a photographer credit.
- [Quote](../applenewsformat/quote.md): The component for including a quote.
- [PullQuote](../applenewsformat/pullquote.md): The component for including a pull quote.
- [Text](../applenewsformat/text.md): Properties shared by all text component types.

### Images

- [Image](../applenewsformat/image.md): The component for displaying JPEG, WebP, PNG, or GIF images.
- [Photo](../applenewsformat/photo.md): The component for including a photograph.
- [Figure](../applenewsformat/figure.md): The component for including a figure.
- [Portrait](../applenewsformat/portrait.md): The component for including an image of a person.
- [Logo](../applenewsformat/logo.md): The component for including a logo image.
- [ReplicaAdvertisement](../applenewsformat/replicaadvertisement.md): The component for delivering digital versions of print advertisements.
- [CaptionDescriptor](../applenewsformat/captiondescriptor.md): The object you use in image components for displaying captions when the image is full-screen.

### Galleries and Mosaics

- [Gallery](../applenewsformat/gallery.md): The component for displaying a sequence of images in a specific order as a horizontal strip.
- [Mosaic](../applenewsformat/mosaic.md): The component for displaying a set of images as tiles in no particular order.
- [GalleryItem](../applenewsformat/galleryitem.md): An object used in a gallery or mosaic component for displaying an individual image.

### Audio and Video

- [Audio](../applenewsformat/audio.md): The component for adding a playable audio clip.
- [Music](../applenewsformat/music.md): The component for adding a playable music file.
- [Podcast](../applenewsformat/podcast.md): The component for adding a Podcast show or episode.
- [Video](../applenewsformat/video.md): The component for adding a video.
- [EmbedWebVideo](../applenewsformat/embedwebvideo.md): The component for adding a web video from Dailymotion, Vimeo, or YouTube.

### Location

- [Map](../applenewsformat/map.md): The component for adding a map.
- [MapItem](../applenewsformat/mapitem.md): An object used in a map component for specifying the location of a map pin.
- [MapSpan](../applenewsformat/mapspan.md): An object used in a map or place component for defining the visible area of the map.
- [Place](../applenewsformat/place.md): The component for adding a map with a specific point of interest.

### Social Media

- [Instagram](../applenewsformat/instagram.md): The component for adding an Instagram post.
- [FacebookPost](../applenewsformat/facebookpost.md): The component for adding a Facebook post.
- [TikTok](../applenewsformat/tiktok.md): The component for adding a TikTok post.
- [Tweet](../applenewsformat/tweet.md): The component for adding a Tweet that was posted to Twitter.

### Augmented Reality

- [ARKit](../applenewsformat/arkit.md): The component for adding an augmented reality (AR) experience to your article.

### Tables

- [Tables in an Article](tables-in-an-article.md): Add a JSON or HTML data table, and understand the options for changing the look of your table.

### Advertisements

- [BannerAdvertisement](../applenewsformat/banneradvertisement.md): Deprecated. The component for adding a full-width banner ad.
- [MediumRectangleAdvertisement](../applenewsformat/mediumrectangleadvertisement.md): Deprecated. The component for adding a medium, fixed-size rectangle ad.

### Article Structure

- [Nesting Components in an Article](nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
- [Adding a Scene to a Chapter or a Section Header](adding-a-scene-to-a-chapter-or-a-section-header.md): Add a scene to your article to create special effects.
- [Creating an Article Link](creating-an-article-link.md): Link to an article by using the article-linking container component.
- [Displaying Components Side By Side](displaying-components-side-by-side.md): Configure a side-by-side, horizontal arrangement of components for your article.
- [Header](../applenewsformat/header.md): The component for defining the top area of an article, chapter, or section.
- [Container](../applenewsformat/container.md): Properties shared by all container types.
- [Section](../applenewsformat/section.md): The component for organizing an article into sections.
- [Chapter](../applenewsformat/chapter.md): The component for organizing an article into chapters.
- [Aside](../applenewsformat/aside.md): The component for setting apart content that is not directly related to the article, such as promotional content.
- [CollectionDisplay](../applenewsformat/collectiondisplay.md): An object used in any container component type to define how the collection of child components is presented.
- [HorizontalStackDisplay](../applenewsformat/horizontalstackdisplay.md): The object for displaying components side by side in a Container component.
- [FlexibleSpacer](../applenewsformat/flexiblespacer.md): The component for redistributing empty space inside a horizontal stack collection.
- [Divider](../applenewsformat/divider.md): The component for defining a horizontal line to visually divide parts of your article.
- [ArticleLink](../applenewsformat/articlelink.md): The container component for creating a link to an article.
- [SupportedArticleIdentifier](../applenewsformat/supportedarticleidentifier.md): The patterns supported for article identifiers in UUID format.
- [PublisherArticleIdentifier](../applenewsformat/publisherarticleidentifier.md): The identifier provided by the publisher.
- [ArticleTitle](../applenewsformat/articletitle.md): The component for displaying an article title in the ArticleLink component.
- [ArticleThumbnail](../applenewsformat/articlethumbnail.md): The component for displaying a thumbnail image with an article link.
- [LinkButton](../applenewsformat/linkbutton.md): The component for opening a link in a button.

### Animations

- [About Component Animations](about-component-animations.md): Learn how to affect the way in which components come into view.
- [ComponentAnimation](../applenewsformat/componentanimation.md): Properties that all types of animations share.
- [AppearAnimation](../applenewsformat/appearanimation.md): An animation type whereby a component appears on the screen.
- [FadeInAnimation](../applenewsformat/fadeinanimation.md): The animation whereby a component fades into view.
- [MoveInAnimation](../applenewsformat/moveinanimation.md): The animation whereby a component moves in from the side of the screen.
- [ScaleFadeAnimation](../applenewsformat/scalefadeanimation.md): The animation in which a component scales up and fades into view.

### Behaviors

- [About Component Behaviors](about-component-behaviors.md): Learn how to affect components’ reactions to device motion and scrolling.
- [Behavior](../applenewsformat/behavior.md): Properties shared by all the behaviors you can use to affect how components react to device motion and scrolling.
- [BackgroundMotion](../applenewsformat/backgroundmotion.md): The behavior whereby the background of a component moves in the opposite direction from the motion of the device.
- [BackgroundParallax](../applenewsformat/backgroundparallax.md): The behavior whereby the background of a component moves slightly slower than a person’s scroll speed.
- [Motion](../applenewsformat/motion.md): The behavior whereby a component reacts to the motion of the person’s device.
- [Parallax](../applenewsformat/parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
- [Springy](../applenewsformat/springy.md): The behavior whereby a component acts as if it’s on a short spring.

### Links

- [LinkAddition](../applenewsformat/linkaddition.md): The addition object for defining links in text components that don’t use HTML or Markdown formatting.
- [ComponentLink](../applenewsformat/componentlink.md): The component addition object for making a component interactive and opening a link to another location in News.
- [Addition](../applenewsformat/addition.md): Properties that all addition types share.
- [ComponentAddition](../applenewsformat/componentaddition.md): Properties that all types of component additions share.
- [SupportedURLs](../applenewsformat/supportedurls.md): Links that go to Apple News, other Apple apps, and external sites.
- [SupportedInternalURLs](../applenewsformat/supportedinternalurls.md): Links that go to Apple News and other Apple apps.
