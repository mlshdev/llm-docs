> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guide/level](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guide/level)

# level

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The guidance for the model to use during a session.

## Declaration

```swift
let level: SpotlightSearchTool.GuidanceLevel
```

<a id="discussion"></a>

## Discussion

Use this property to specify custom guidance for how to search your app’s content. The default value of this property is [SpotlightSearchTool.GuidanceLevel.complete](../guidancelevel/complete.md), which uses all available search techniques and search all content types.

## See Also

### Getting the guidance

- [format](format.md): The representation format for tool responses returned to the model.
