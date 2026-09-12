> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/creating-an-article-link](https://developer.apple.com/documentation/applenews/creating-an-article-link)

# Creating an Article Link

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Link to an article by using the article-linking container component.

<a id="overview"></a>

## Overview

Use the [ArticleLink](../applenewsformat/articlelink.md) component to create a link to another Apple News Format article. To create a link, nest child components inside the `ArticleLink` component. You can use these child components to provide content, styling, and layout, like you do with any other Apple News Format component.

The two special components that you can use inside an `ArticleLink` container are [ArticleThumbnail](../applenewsformat/articlethumbnail.md) and [ArticleTitle](../applenewsformat/articletitle.md).  VoiceOver uses these components to make Apple News content more accessible. Apple News automatically populates their content; for example, if you define the `ArticleTitle` component without explicitly defining the `text` property,  Apple News uses the title of the linked article.

## See Also

### Article Structure

- [Nesting Components in an Article](nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
- [Adding a Scene to a Chapter or a Section Header](adding-a-scene-to-a-chapter-or-a-section-header.md): Add a scene to your article to create special effects.
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
