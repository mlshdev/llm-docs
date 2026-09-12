> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidancelevel/dynamic(_:)](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidancelevel/dynamic(_:))

# SpotlightSearchTool.GuidanceLevel.dynamic(\_:)

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An option to search using only the specified techniques.

## Declaration

```swift
case dynamic(SpotlightSearchTool.GuidanceProfile)
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

Choose this option to specify the subset of search techniques to use on your content. The [SpotlightSearchTool.GuidanceProfile](../guidanceprofile.md) structure you specify contains properties with the available search techniques. Enable the ones that apply to your app’s content and disable any that don’t apply. For example, if you want to perform only literal searches on strings, enable the [textMatch](../guidanceprofile/textmatch.md) property and disable the [similarityMatch](../guidanceprofile/similaritymatch.md) property.

## See Also

### Getting the guidance levels

- [SpotlightSearchTool.GuidanceLevel.complete](complete.md): An option to use all available search techniques.
- [SpotlightSearchTool.GuidanceLevel.focused(\_:)](focused%28__%29.md): An option to search only specific types of content.
