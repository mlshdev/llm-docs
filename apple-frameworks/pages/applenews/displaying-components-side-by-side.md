> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/displaying-components-side-by-side](https://developer.apple.com/documentation/applenews/displaying-components-side-by-side)

# Displaying Components Side By Side

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Configure a side-by-side, horizontal arrangement of components for your article.

<a id="overview"></a>

## Overview

In Apple News Format, you can display child components of [Container](../applenewsformat/container.md), [Chapter](../applenewsformat/chapter.md), [Section](../applenewsformat/section.md), and [Aside](../applenewsformat/aside.md), side by side and horizontally by using the `contentDisplay` type [HorizontalStackDisplay](../applenewsformat/horizontalstackdisplay.md). The child components are sized to match the `minimumWidth` and `maximumWidth` values defined in the [ComponentLayout](../applenewsformat/componentlayout.md) object of these components. To redistribute the empty space inside a horizontal stack collection, use the [FlexibleSpacer](../applenewsformat/flexiblespacer.md) object. This object provides flexible space between components in a container only when its `contentDisplay` value is set to `horizontal_stack`.

> **Note**

> In versions of iOS before iOS 12, child components are vertically stacked if the container’s `contentDisplay` property is defined as the new `horizontal_stack` type.

## See Also

### Article Structure

- [Nesting Components in an Article](nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
- [Adding a Scene to a Chapter or a Section Header](adding-a-scene-to-a-chapter-or-a-section-header.md): Add a scene to your article to create special effects.
- [Creating an Article Link](creating-an-article-link.md): Link to an article by using the article-linking container component.
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
