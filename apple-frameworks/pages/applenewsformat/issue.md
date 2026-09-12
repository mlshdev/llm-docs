> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/issue](https://developer.apple.com/documentation/applenewsformat/issue)

# Issue

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.11+

The object for defining information about an issue.

## Declaration

```
object Issue
```

## Properties

- `identifier` — `string` (required): A string that references an issue.
- `order` — `number`: A number, supporting floats, that suggests the order in which the article should appear in the issue.
- `tocByline` — `string`: A string that represents a byline for the entire article. This string is displayed in the table of contents.

<a id="Discussion"></a>

## Discussion

An *issue* is an ordered collection of articles and advertisements, with other elements that you provide, including a title and a cover image. Use the `Issue` object to provide additional information about an Apple News Format issue.

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
    ],
    "issue": {
      "identifier": "September 2018",
      "order": 5,
      "tocByline": "Anne Johnson"
    }
  }
}
```

## See Also

### Article Metadata

- [Metadata](metadata.md): Information about your article, including author name, creation date, publication date, keywords, and excerpt.
- [LinkedArticle](linkedarticle.md): A relationship between your article and another Apple News article.
