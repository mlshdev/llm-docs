> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/apple-news-format-release-notes](https://developer.apple.com/documentation/applenews/apple-news-format-release-notes)

# Apple News Format Release Notes

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Learn about new features that require iOS 26, iPadOS 26, and macOS 26.

<a id="overview"></a>

## Overview

This feature was added for the latest Apple News Format release:

- In the [Metadata](../applenewsformat/metadata.md) object, use `syndicated` to indicate a syndication or wire service produced the content.

These features were added in a previous Apple News Format release:

- You can embed a Facebook reel in your article using the `URL` property in the [FacebookPost](../applenewsformat/facebookpost.md) object.
- In the [Condition](../applenewsformat/condition.md) object, use `following` to indicate whether the person viewing the article is following the channel that published the article.

<a id="Deprecated-Objects-and-Properties"></a>

### Deprecated Objects and Properties

This property was deprecated in the latest Apple News Format release:

- The `transparentToolbar` property in the [Metadata](../applenewsformat/metadata.md) object was deprecated.

These objects were deprecated in a previous Apple News Format release:

- [AutoPlacement](../applenewsformat/autoplacement.md), [AdvertisementAutoPlacement](../applenewsformat/advertisementautoplacement.md), [ConditionalAutoPlacement](../applenewsformat/conditionalautoplacement.md), and [AutoPlacementLayout](../applenewsformat/autoplacementlayout.md) objects are deprecated because you can only control advertisement settings via News Publisher.
- [MediumRectangleAdvertisement](../applenewsformat/mediumrectangleadvertisement.md) and [BannerAdvertisement](../applenewsformat/banneradvertisement.md) objects are deprecated because Apple News no longer supports manual ads.

## See Also

### Release Notes

- [Apple News Format Version History](apple-news-format-version-history.md): Learn how Apple News Format versions map to iOS, iPadOS, macOS, and visionOS releases.
