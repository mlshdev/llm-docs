> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed](https://developer.apple.com/documentation/applemusicfeed)

# Apple Music Feed

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Web Service  
**Availability:** AppleMusicFeed 1.0+

Access the content of the Apple Music Catalog in bulk.

<a id="overview"></a>

## Overview

Apple Music Feed contains the catalog content of Apple Music products in bulk for consumption as feed exports. These bulk exports are appropriate for offline use cases, complementing Apple Music API, which is best for online use. Apple Music Feed includes content metadata for albums, songs, artists, and popularity charts, and fully refreshes every 24 hours. You access the Apple Music Feed using Apple Media Feed API to [request an export](applemusicfeed/requesting-a-feed-export.md) of a data set.

> **Important**

> Apple Music Feed, and all content and data accessed through Apple Music Feed, may be used only for the purpose of publicly promoting Apple Music content within your app. Using Apple Music Feed for any other purpose — including, but not limited to, powering or enhancing internal systems and tools, sharing data with third parties, or analyzing music- and artist-related information for reasons other than the promotion of Apple Music in your app — is strictly prohibited.

With access to the raw data and the information in this documentation, you can use Apple Music Feed in many ways. For example, if you want to build a discovery engine for Apple Music, your team can examine the data and determine endpoint requests to serve such an engine.

Apple Music Feed uses the Parquet format, which is an open-source columnar storage file format that optimizes the storage and processing of large datasets. The Parquet format improves query performance and reduces storage costs in scenarios where you need to read or process data selectively. It achieves this by using columns and storing the values of each column together, which allows efficient compression and encoding techniques that you can apply specifically to each column. Many large-scale data-processing frameworks, like Hadoop and Spark, use this format.

> **Note**

> Although the feed is in Parquet format, this documentation provides data examples in JSON format for illustrative purposes.

<a id="Use-sample-scripts"></a>

## Use sample scripts

You can find sample Java and Python scripts in the [music-feed-examples](https://github.com/apple/music-feed-examples) public GitHub repository that perform the following steps:

- Generate a developer token.
- Use the token to request metadata for the latest feed export for a specific data set.
- Use the token to request links to parts of the data for a feed export.
- Download the feed data to a specified output directory.
- Load the data files in Parquet and run a simple query.

## Topics

### Essentials

- [Generating developer tokens](applemusicfeed/generating-developer-tokens.md): Create a JSON Web Token to authorize your requests to Apple Media Feed API.
- [Requesting a feed export](applemusicfeed/requesting-a-feed-export.md): Create requests for Apple Music Catalog metadata.
- [Interpreting responses](applemusicfeed/interpreting-responses.md): Learn about responses from Apple Media Feed API to your Apple Music Feed requests.

### Objects

- [Album](applemusicfeed/album.md): The data structure that represents an Album resource.
- [Song](applemusicfeed/song.md): The data structure that represents a Song resource.
- [Artist](applemusicfeed/artist.md): The data structure that represents an Artist resource.
- [PopularityTopChartAlbums](applemusicfeed/popularitytopchartalbums.md): The data structure that represents an album popularity chart resource.
- [PopularityTopChartSongs](applemusicfeed/popularitytopchartsongs.md): The data structure that represents a song popularity chart resource.
