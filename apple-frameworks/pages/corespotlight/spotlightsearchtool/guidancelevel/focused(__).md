> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidancelevel/focused(_:)](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidancelevel/focused(_:))

# SpotlightSearchTool.GuidanceLevel.focused(\_:)

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An option to search only specific types of content.

## Declaration

```swift
case focused(SpotlightSearchTool.ContentDomain = .items)
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

Choose this option to search attributes only for the specified types of content. You can initialize this value with one or more domains, each of which specifies a particular type of content. During a search, the Spotlight search tool considers only the attributes in the specified domains. The tool also sends data back to the model in a compact format that’s more suitable for models with limited-size context windows.

## See Also

### Getting the guidance levels

- [SpotlightSearchTool.GuidanceLevel.complete](complete.md): An option to use all available search techniques.
- [SpotlightSearchTool.GuidanceLevel.dynamic(\_:)](dynamic%28__%29.md): An option to search using only the specified techniques.
