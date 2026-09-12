> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/customstages](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/customstages)

# customStages

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Custom pipeline stages you use to help the Spotlight search tool generate results.

## Declaration

```swift
var customStages: [any CustomStage] { get set }
```

<a id="discussion"></a>

## Discussion

Provide a custom stage if you have custom code for determining search results. For example, you might use a custom stage to provide the Spotlight search tool with app-managed relevance scores. The tool makes your custom stages available to the model, which determines whether to run them based on the prompt.

For more information about creating a custom stage, see [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md).

## See Also

### Customizing the output

- [guide](guide.md): Options you use to guide the search process that the tool uses to retrieve results.
