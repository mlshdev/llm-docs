> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/guide](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/guide)

# guide

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Options you use to guide the search process that the tool uses to retrieve results.

## Declaration

```swift
var guide: SpotlightSearchTool.Guide?
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

The Spotlight search tool employs many techniques to look for results, but some techniques might not be relevant or necessary for your content. Use this property to offer guidance on how to search for your content, and to reduce the amount of data the tool delivers to the model. If you don’t specify custom guidance, the search tool uses all availble techniques, which can take extra time to run and consume additional resources.

## See Also

### Customizing the output

- [customStages](customstages.md): Custom pipeline stages you use to help the Spotlight search tool generate results.
