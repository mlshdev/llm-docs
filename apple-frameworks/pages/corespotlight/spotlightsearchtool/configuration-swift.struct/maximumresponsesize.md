> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct/maximumresponsesize

# maximumResponseSize

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The maximum number of UTF-8 characters of rendered tool output the search tool sends back to the model on a single call.

## Declaration

```swift
var maximumResponseSize: Int?
```

<a id="discussion"></a>

## Discussion

If `nil`, the tool picks a default based on the configured [guide](guide.md). Pass an explicit value to override that default; the override applies regardless of the guide’s level.
