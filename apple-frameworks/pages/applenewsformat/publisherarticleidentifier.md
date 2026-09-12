> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/publisherarticleidentifier](https://developer.apple.com/documentation/applenewsformat/publisherarticleidentifier)

# PublisherArticleIdentifier

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Type  
**Availability:** Apple News Format 1.11+

The identifier provided by the publisher.

## Declaration

```
string PublisherArticleIdentifier
```

<a id="Discussion"></a>

## Discussion

You can create links to articles using the publisher’s article identifier. See `identifier` in [ArticleDocument](articledocument.md). The publisher’s article identifier maps to `articleId` for all articles.

If the current article and the linked article belong to the same channel, use `publisher-article://<article id>`.

If the linked article references a different channel, use `publisher-article://<channel id>/<article id>`.

## See Also

### Article Structure

- [Nesting Components in an Article](../applenews/nesting-components-in-an-article.md): Use container components to create the component hierarchies you need for special article designs.
- [Adding a Scene to a Chapter or a Section Header](../applenews/adding-a-scene-to-a-chapter-or-a-section-header.md): Add a scene to your article to create special effects.
- [Creating an Article Link](../applenews/creating-an-article-link.md): Link to an article by using the article-linking container component.
- [Displaying Components Side By Side](../applenews/displaying-components-side-by-side.md): Configure a side-by-side, horizontal arrangement of components for your article.
- [Header](header.md): The component for defining the top area of an article, chapter, or section.
- [Container](container.md): Properties shared by all container types.
- [Section](section.md): The component for organizing an article into sections.
- [Chapter](chapter.md): The component for organizing an article into chapters.
- [Aside](aside.md): The component for setting apart content that is not directly related to the article, such as promotional content.
- [CollectionDisplay](collectiondisplay.md): An object used in any container component type to define how the collection of child components is presented.
- [HorizontalStackDisplay](horizontalstackdisplay.md): The object for displaying components side by side in a Container component.
- [FlexibleSpacer](flexiblespacer.md): The component for redistributing empty space inside a horizontal stack collection.
- [Divider](divider.md): The component for defining a horizontal line to visually divide parts of your article.
- [ArticleLink](articlelink.md): The container component for creating a link to an article.
- [SupportedArticleIdentifier](supportedarticleidentifier.md): The patterns supported for article identifiers in UUID format.
