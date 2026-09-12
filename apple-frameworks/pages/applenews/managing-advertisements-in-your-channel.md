> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenews/managing-advertisements-in-your-channel](https://developer.apple.com/documentation/applenews/managing-advertisements-in-your-channel)

# Managing Advertisements in Your Channel

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Article

Set the layout and frequency of ads automatically inserted in an article.

<a id="overview"></a>

## Overview

Apple News places ads in any of the following locations:

- Between two `body` components
- Between two paragraphs inside a `body` component
- Between containers
- After the last component — even if the article is shorter than one screen

Ads can’t appear in these locations:

- Between anchored components
- In the first screen of an article

In addition to the location requirements, Apple News makes decisions about ad placement for your articles:

- Both the size of your article and the arrangement of the components affect ad placement.
- Two ads can’t appear in the same viewport, which is the section of the article that’s currently visible within a person’s device frame.

<a id="Adjust-Your-Ads-Settings"></a>

### Adjust Your Ads Settings

To control the placement of ads in your channel, use News Publisher. For more information, see [Apple News and ads](https://support.apple.com/guide/adguide/apple-news-and-ads-apd070650e01/icloud) in the Ads on Apple News User Guide.

## See Also

### Dynamic Advertising

- [AutoPlacement](../applenewsformat/autoplacement.md): Deprecated. The object for automatically placing components within Apple News Format articles.
- [AdvertisementAutoPlacement](../applenewsformat/advertisementautoplacement.md): Deprecated. The object for defining the automatic placement of advertisements.
- [AdvertisingSettings](../applenewsformat/advertisingsettings.md): Deprecated. The object for defining properties that affect the frequency and placement with which banner advertisements and medium rectangle advertisements are automatically placed in your article.
