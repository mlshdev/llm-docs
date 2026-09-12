> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/sources](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/sources)

# sources

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The data sources and options to use during a search.

## Declaration

```swift
var sources: [SearchSource]
```

<a id="discussion"></a>

## Discussion

Use this property to specify where you want [SpotlightSearchTool](../../spotlightsearchtool.md) to look for your app’s data. Fill this property with [CoreSpotlightSource](../../corespotlightsource.md) or [FileSource](../../filesource.md) types. If you specify multiple search sources, the tool searches all of them and delivers the merged results to the model. Each source object also has options about how much data to retrieve from the source, which you can use to control how much data you send to the model.

If you don’t specify a value for this property, the search tool uses a default [CoreSpotlightSource](../../corespotlightsource.md) to search your app’s Spotlight index.
