> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/linkedarticle](https://developer.apple.com/documentation/applenewsformat/linkedarticle)

# LinkedArticle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

A relationship between your article and another Apple News article.

## Declaration

```
object LinkedArticle
```

## Properties

- `relationship` — `string` (required): The type of relationship between the article and the linked document.

  Valid values:

  - `related`. The linked article is an article on the same topic, part of the same dossier, or provides more information about the subjects discussed.
  - `promoted`. The linked article isn’t directly related, but deserves additional promotion because the article covers another important topic. This value also puts the article at the top of the channel feed.  
  **Allowed values:** `related`, `promoted`
- `URL` — `uri` (required): The URL for the link, which can be either an Apple News link, like `https://apple.news/[article_id]`, or a link to an article on your website, if the website link matches the `canonicalURL` metadata property of the linked article. For more information about `canonicalURL`, see [Metadata](metadata.md).

## Mentioned In

- [Creating an Article: Main Steps](../applenews/creating-an-article-main-steps.md)

<a id="Discussion"></a>

## Discussion

You can control lists of links that people see in articles by using the `links` array in [Metadata](metadata.md). If you are linking to a sponsored article, ensure that the [Create an Article](../applenewsapi/post-channels-_channelid_-articles.md) request uses the `isSponsored` flag.

<a id="Example"></a>

### Example

```json
{
  "metadata": {
    "excerpt": "This is a sample sports article.",
    "thumbnailURL": "bundle://Football.jpg",
    "datePublished": "2018-09-09T14:45:45+00:00",
    "dateCreated": "2018-09-08T12:41:00+00:00",
    "dateModified": "2018-09-10T12:41:00+00:00",
    "authors": [
      "Anne Johnson"
    ],
    "campaignData": {
      "sport": [
        "football"
      ],
      "event": [
        "Football"
      ],
      "author": [
        "John Appleseed"
      ]
    },
    "generatorName": "Generator",
    "generatorVersion": "1.0",
    "canonicalURL": "https://example.com/articles/2015/original-article.html",
    "links": [
      {
        "URL": "https://apple.news/AT6kNQslCQy6EE4bF8hpOoQ",
        "relationship": "related"
      }
    ]
  }
}
```

## See Also

### Article Metadata

- [Metadata](metadata.md): Information about your article, including author name, creation date, publication date, keywords, and excerpt.
- [Issue](issue.md): The object for defining information about an issue.
