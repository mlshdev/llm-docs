> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/adding-a-scene-to-a-chapter-or-a-section-header](https://developer.apple.com/documentation/applenews/adding-a-scene-to-a-chapter-or-a-section-header)

# Adding a Scene to a Chapter or a Section Header

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Add a scene to your article to create special effects.

<a id="overview"></a>

## Overview

Apple News Format provides animations (see [About Component Animations](about-component-animations.md)) and behaviors (see [About Component Behaviors](about-component-behaviors.md)) to use with individual components in your article, but you can also use a *scene* — a combination of animations and behaviors — to control how a section or chapter of your article comes into view.

A scene combines animations and behaviors to create special effects that you can use with the headers in `section` and `chapter` components. Apple News Format has two scenes you can use to add interest to your article:

- [FadingStickyHeader](../applenewsformat/fadingstickyheader.md). Causes the header to briefly “stick” to the top of the screen and then fade to a defined color.
- [ParallaxScaleHeader](../applenewsformat/parallaxscaleheader.md). Causes the header to zoom out and scroll more slowly than the user is scrolling, giving the impression of a parallax effect.

To add a scene, do the following:

1. In  the components array of your [Section](../applenewsformat/section.md) or [Chapter](../applenewsformat/chapter.md), add a [Header](../applenewsformat/header.md).
2. In the `scene` property of the section or chapter component, specify which scene you want to use (`fading_sticky_header` or `parallax_scale`). See the example code in [FadingStickyHeader](../applenewsformat/fadingstickyheader.md).

## Topics

### Scene Types

- [Scene](../applenewsformat/scene.md): A combination of animations and behaviors to use in sections and chapters that have headers.
- [FadingStickyHeader](../applenewsformat/fadingstickyheader.md): The scene that briefly keeps a header at the top of the screen as the person scrolls through the article.
- [ParallaxScaleHeader](../applenewsformat/parallaxscaleheader.md): The scene that gives the impression of a parallax effect by zooming out and scrolling slightly more slowly than the person’s action.

## See Also

### Article Structure

- [Nesting Components in an Article](nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
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
