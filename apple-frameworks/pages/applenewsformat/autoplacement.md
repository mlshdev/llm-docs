> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/autoplacement](https://developer.apple.com/documentation/applenewsformat/autoplacement)

# AutoPlacement

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.9+ (deprecated in 1.25)

The object for automatically placing components within Apple News Format articles.

## Declaration

```
object AutoPlacement
```

## Properties

- `advertisement` — `AdvertisementAutoPlacement`: The automatic placement of advertisement components. By default, no advertising is automatically inserted.

## Mentioned In

- [Apple News Format Release Notes](../applenews/apple-news-format-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the `AutoPlacement` object to define the metadata, appearance, and placement of advertising components within Apple News Format articles.

<a id="Example"></a>

### Example

```json
{
  "version": "1.9",
  "identifier": "SampleArticle",
  "language": "en",
  "title": "Apple News",
  "layout": {
    "columns": 20,
    "width": 1024,
    "margin": 60,
    "gutter": 20
  },
  "autoplacement": {
    "advertisement": {
      "enabled": true,
      "bannerType": "any",
      "distanceFromMedia": "10vh",
      "frequency": 10,
      "layout": {
        "margin": 10
      }
    }
  },
  …
}
```

## Relationships

### Inherited By

- [AdvertisementAutoPlacement](advertisementautoplacement.md)

## See Also

### Dynamic Advertising

- [Managing Advertisements in Your Channel](../applenews/managing-advertisements-in-your-channel.md): Set the layout and frequency of ads automatically inserted in an article.
- [AdvertisementAutoPlacement](advertisementautoplacement.md): Deprecated. The object for defining the automatic placement of advertisements.
- [AdvertisingSettings](advertisingsettings.md): Deprecated. The object for defining properties that affect the frequency and placement with which banner advertisements and medium rectangle advertisements are automatically placed in your article.
